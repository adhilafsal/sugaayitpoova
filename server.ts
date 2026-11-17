import * as http from 'node:http';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import {
  initDatabase,
  getDestinations,
  getDestinationById,
  calculateWeather,
  getStoreItems,
  getCourses,
  getKnowledge,
  createUser,
  getUserByEmailOrPhone,
  getUserById,
  createSession,
  getUserBySession,
  deleteSession,
  getUserCart,
  addToCart,
  removeFromCart,
  getUserSaved,
  toggleSavedItem,
  createBooking,
  getUserBookings,
  addSuggestion,
  addReview,
  getReviews,
  getStats,
  getDiscoverItems,
  getDiscoverItemById
} from './db.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = parseInt(process.env.PORT || '8080', 10);
const BASE_DIR = __dirname;

// Initialize SQLite database
initDatabase();

const MIME_TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.ts': 'text/typescript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

function sendJson(res: http.ServerResponse, statusCode: number, data: any) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
  });
  res.end(JSON.stringify(data));
}

function parseJsonBody(req: http.IncomingMessage): Promise<any> {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(new Error('Invalid JSON'));
      }
    });
    req.on('error', reject);
  });
}

function getAuthUser(req: http.IncomingMessage) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return null;
  const match = authHeader.match(/^Bearer\s+(.+)$/i);
  if (!match) return null;
  const token = match[1];
  return getUserBySession(token);
}

const server = http.createServer(async (req, res) => {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
    });
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
  const pathname = decodeURIComponent(parsedUrl.pathname);

  // ==========================================
  // REST API ROUTES (/api/...)
  // ==========================================
  if (pathname.startsWith('/api/')) {
    try {
      // 1. GET /api/destinations
      if (req.method === 'GET' && pathname === '/api/destinations') {
        const category = parsedUrl.searchParams.get('category') || undefined;
        const search = parsedUrl.searchParams.get('search') || undefined;
        const sort = parsedUrl.searchParams.get('sort') || undefined;
        const destinations = getDestinations(category, search, sort);
        return sendJson(res, 200, { success: true, count: destinations.length, destinations });
      }

      // 2. GET /api/destinations/:id
      const destMatch = pathname.match(/^\/api\/destinations\/([a-zA-Z0-9_-]+)$/);
      if (req.method === 'GET' && destMatch) {
        const id = destMatch[1];
        const dest = getDestinationById(id);
        if (!dest) return sendJson(res, 404, { success: false, error: 'Destination not found' });
        return sendJson(res, 200, { success: true, destination: dest });
      }

      // 3. GET /api/weather/:id
      const weatherMatch = pathname.match(/^\/api\/weather\/([a-zA-Z0-9_-]+)$/);
      if (req.method === 'GET' && weatherMatch) {
        const id = weatherMatch[1];
        const weather = calculateWeather(id);
        if (!weather) return sendJson(res, 404, { success: false, error: 'Weather not found' });
        return sendJson(res, 200, { success: true, weather });
      }

      // 4. GET /api/store
      if (req.method === 'GET' && pathname === '/api/store') {
        const search = parsedUrl.searchParams.get('search') || undefined;
        const items = getStoreItems(search);
        return sendJson(res, 200, { success: true, count: items.length, items });
      }

      // 5. GET /api/courses
      if (req.method === 'GET' && pathname === '/api/courses') {
        const courses = getCourses();
        return sendJson(res, 200, { success: true, count: courses.length, courses });
      }

      // 6. GET /api/knowledge
      if (req.method === 'GET' && pathname === '/api/knowledge') {
        const knowledge = getKnowledge();
        return sendJson(res, 200, { success: true, count: knowledge.length, knowledge });
      }

      // 6B. GET /api/discover & /api/discover/:id
      if (req.method === 'GET' && pathname === '/api/discover') {
        const category = parsedUrl.searchParams.get('category') || undefined;
        const search = parsedUrl.searchParams.get('search') || undefined;
        const items = getDiscoverItems(category, search);
        return sendJson(res, 200, { success: true, count: items.length, items });
      }

      const discoverMatch = pathname.match(/^\/api\/discover\/([a-zA-Z0-9_-]+)$/);
      if (req.method === 'GET' && discoverMatch) {
        const id = discoverMatch[1];
        const item = getDiscoverItemById(id);
        if (!item) return sendJson(res, 404, { success: false, error: 'Discover item not found' });
        return sendJson(res, 200, { success: true, item });
      }

      // 7. GET /api/stats
      if (req.method === 'GET' && pathname === '/api/stats') {
        const stats = getStats();
        return sendJson(res, 200, { success: true, stats });
      }

      // 8. POST /api/auth/signup
      if (req.method === 'POST' && pathname === '/api/auth/signup') {
        const body = await parseJsonBody(req);
        const { name, phone, email, password } = body;
        if (!name || !phone || !email || !password) {
          return sendJson(res, 400, { success: false, error: 'All fields are required.' });
        }

        const existing = getUserByEmailOrPhone(email) || getUserByEmailOrPhone(phone);
        if (existing) {
          return sendJson(res, 409, { success: false, error: 'An account with this email or mobile already exists.' });
        }

        const salt = crypto.randomBytes(16).toString('hex');
        const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
        const userId = `usr-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;

        const user = createUser({
          id: userId,
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim().toLowerCase(),
          password_hash: hash,
          salt
        });

        const token = crypto.randomBytes(32).toString('hex');
        const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
        createSession(token, user.id, expiresAt);

        return sendJson(res, 201, { success: true, user, token });
      }

      // 9. POST /api/auth/login
      if (req.method === 'POST' && pathname === '/api/auth/login') {
        const body = await parseJsonBody(req);
        const { identifier, password } = body;
        if (!identifier || !password) {
          return sendJson(res, 400, { success: false, error: 'Email/phone and password are required.' });
        }

        const user = getUserByEmailOrPhone(identifier);
        if (!user) {
          return sendJson(res, 401, { success: false, error: 'No account found with this email or mobile.' });
        }

        const testHash = crypto.pbkdf2Sync(password, user.salt, 1000, 64, 'sha512').toString('hex');
        if (testHash !== user.password_hash) {
          return sendJson(res, 401, { success: false, error: 'Incorrect password. Please try again.' });
        }

        const token = crypto.randomBytes(32).toString('hex');
        const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
        createSession(token, user.id, expiresAt);

        const safeUser = { id: user.id, name: user.name, phone: user.phone, email: user.email };
        return sendJson(res, 200, { success: true, user: safeUser, token });
      }

      // 10. GET /api/auth/me
      if (req.method === 'GET' && pathname === '/api/auth/me') {
        const user = getAuthUser(req);
        if (!user) return sendJson(res, 401, { success: false, error: 'Not authenticated' });
        return sendJson(res, 200, { success: true, user });
      }

      // 11. POST /api/auth/logout
      if (req.method === 'POST' && pathname === '/api/auth/logout') {
        const authHeader = req.headers['authorization'];
        if (authHeader) {
          const match = authHeader.match(/^Bearer\s+(.+)$/i);
          if (match) deleteSession(match[1]);
        }
        return sendJson(res, 200, { success: true, message: 'Logged out successfully' });
      }

      // 12. GET /api/profile (Complete Profile Sync from SQLite)
      if (req.method === 'GET' && pathname === '/api/profile') {
        const user = getAuthUser(req);
        if (!user) return sendJson(res, 401, { success: false, error: 'Please log in to view profile.' });

        const cart = getUserCart(user.id);
        const saved = getUserSaved(user.id);
        const bookings = getUserBookings(user.id);

        return sendJson(res, 200, {
          success: true,
          profile: {
            user,
            cart,
            savedPackages: saved.packages,
            savedCourses: saved.courses,
            bookings
          }
        });
      }

      // 13. POST /api/cart & DELETE /api/cart/:itemId
      if (req.method === 'POST' && pathname === '/api/cart') {
        const user = getAuthUser(req);
        if (!user) return sendJson(res, 401, { success: false, error: 'Login required' });
        const body = await parseJsonBody(req);
        const { itemId, quantity } = body;
        if (!itemId) return sendJson(res, 400, { success: false, error: 'itemId required' });
        addToCart(user.id, itemId, quantity || 1);
        const cart = getUserCart(user.id);
        return sendJson(res, 200, { success: true, cart });
      }

      const cartDeleteMatch = pathname.match(/^\/api\/cart\/([a-zA-Z0-9_-]+)$/);
      if (req.method === 'DELETE' && cartDeleteMatch) {
        const user = getAuthUser(req);
        if (!user) return sendJson(res, 401, { success: false, error: 'Login required' });
        const itemId = cartDeleteMatch[1];
        removeFromCart(user.id, itemId);
        const cart = getUserCart(user.id);
        return sendJson(res, 200, { success: true, cart });
      }

      // 14. POST /api/saved (Toggle Saved Package / Course)
      if (req.method === 'POST' && pathname === '/api/saved') {
        const user = getAuthUser(req);
        if (!user) return sendJson(res, 401, { success: false, error: 'Login required' });
        const body = await parseJsonBody(req);
        const { itemType, itemId } = body;
        if (!itemType || !itemId) return sendJson(res, 400, { success: false, error: 'Missing parameters' });
        const isSaved = toggleSavedItem(user.id, itemType, itemId);
        const saved = getUserSaved(user.id);
        return sendJson(res, 200, { success: true, isSaved, saved });
      }

      // 15. POST /api/bookings (Create booking in SQLite)
      if (req.method === 'POST' && pathname === '/api/bookings') {
        const user = getAuthUser(req);
        if (!user) return sendJson(res, 401, { success: false, error: 'Login required' });
        const body = await parseJsonBody(req);
        const { category, itemId, itemTitle, priceOrCost } = body;
        if (!category || !itemId || !itemTitle || !priceOrCost) {
          return sendJson(res, 400, { success: false, error: 'Missing booking fields' });
        }
        const bookingId = createBooking(user.id, category, itemId, itemTitle, priceOrCost);
        const bookings = getUserBookings(user.id);
        return sendJson(res, 201, { success: true, bookingId, bookings });
      }

      // 16. POST /api/suggestions (Store feedback in SQLite)
      if (req.method === 'POST' && pathname === '/api/suggestions') {
        const user = getAuthUser(req);
        const body = await parseJsonBody(req);
        const { method, message } = body;
        if (!message) return sendJson(res, 400, { success: false, error: 'Message required' });
        addSuggestion(user ? user.id : null, method || 'web', message);
        return sendJson(res, 201, { success: true, message: 'Suggestion saved to database.' });
      }

      // 17. Reviews API: GET /api/reviews/:itemId and POST /api/reviews
      const reviewMatch = pathname.match(/^\/api\/reviews\/([a-zA-Z0-9_-]+)$/);
      if (req.method === 'GET' && reviewMatch) {
        const itemId = reviewMatch[1];
        const reviews = getReviews(itemId);
        return sendJson(res, 200, { success: true, reviews });
      }

      if (req.method === 'POST' && pathname === '/api/reviews') {
        const body = await parseJsonBody(req);
        const { itemId, userName, rating, comment } = body;
        if (!itemId || !userName || !rating || !comment) {
          return sendJson(res, 400, { success: false, error: 'All review fields required' });
        }
        addReview(itemId, userName, rating, comment);
        const reviews = getReviews(itemId);
        return sendJson(res, 201, { success: true, reviews });
      }

      return sendJson(res, 404, { success: false, error: 'API route not found' });
    } catch (err: any) {
      console.error('API Error:', err);
      return sendJson(res, 500, { success: false, error: err.message || 'Internal Server Error' });
    }
  }

  // ==========================================
  // STATIC FILE SERVING
  // ==========================================
  let reqPath = pathname;
  if (reqPath === '/' || reqPath === '/index.html') {
    reqPath = '/suggayitt povaa.html';
  }

  const safePath = path.normalize(reqPath).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(BASE_DIR, safePath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'suggayitt povaa.html');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(`404 Not Found: ${pathname}`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache'
    });

    const stream = fs.createReadStream(filePath);
    stream.on('error', () => {
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      }
      res.end('500 Internal Server Error');
    });
    stream.pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`[SUGGAYITT POVAA] TypeScript & SQLite Full-Stack Server running at: http://localhost:${PORT}/`);
  console.log(`[SQL DATABASE] Connected to ${path.join(BASE_DIR, 'suggayitt.db')}`);
});
