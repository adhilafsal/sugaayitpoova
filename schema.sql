-- ==============================================================================
-- SUGGAYITT POVAA - SUPABASE DATABASE SCHEMA & ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

-- 1. PROFILES TABLE
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. SAVED PACKAGES TABLE
CREATE TABLE IF NOT EXISTS public.saved_packages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  package_id TEXT NOT NULL,
  package_name TEXT NOT NULL,
  saved_date TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT uq_saved_packages_user_package UNIQUE (user_id, package_id)
);

-- 3. CART ITEMS TABLE
CREATE TABLE IF NOT EXISTS public.cart_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id TEXT NOT NULL,
  product_name TEXT NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1 CHECK (quantity > 0),
  added_date TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_date TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT uq_cart_items_user_product UNIQUE (user_id, product_id)
);

-- 4. SAVED COURSES TABLE
CREATE TABLE IF NOT EXISTS public.saved_courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id TEXT NOT NULL,
  course_name TEXT NOT NULL,
  saved_date TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT uq_saved_courses_user_course UNIQUE (user_id, course_id)
);

-- 5. BOOKING REQUESTS TABLE
CREATE TABLE IF NOT EXISTS public.booking_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  package_id TEXT NOT NULL,
  package_name TEXT NOT NULL,
  amount TEXT,
  request_date TIMESTAMPTZ NOT NULL DEFAULT now(),
  booking_status TEXT NOT NULL DEFAULT 'Requested'
);

-- 6. ORDER REQUESTS TABLE
CREATE TABLE IF NOT EXISTS public.order_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id TEXT NOT NULL,
  product_name TEXT NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1 CHECK (quantity > 0),
  amount TEXT,
  order_request_date TIMESTAMPTZ NOT NULL DEFAULT now(),
  order_status TEXT NOT NULL DEFAULT 'Requested'
);

-- 7. USER ACTIVITY TABLE
CREATE TABLE IF NOT EXISTS public.user_activity (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  activity_type TEXT NOT NULL,
  item_id TEXT,
  item_name TEXT,
  details JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ==============================================================================
-- INDEXES FOR MAXIMUM QUERY PERFORMANCE
-- ==============================================================================
CREATE INDEX IF NOT EXISTS idx_saved_packages_user_id ON public.saved_packages(user_id);
CREATE INDEX IF NOT EXISTS idx_cart_items_user_id ON public.cart_items(user_id);
CREATE INDEX IF NOT EXISTS idx_saved_courses_user_id ON public.saved_courses(user_id);
CREATE INDEX IF NOT EXISTS idx_booking_requests_user_id ON public.booking_requests(user_id);
CREATE INDEX IF NOT EXISTS idx_order_requests_user_id ON public.order_requests(user_id);
CREATE INDEX IF NOT EXISTS idx_user_activity_user_id ON public.user_activity(user_id);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.booking_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_activity ENABLE ROW LEVEL SECURITY;

-- Profiles Policies
DROP POLICY IF EXISTS "Users can read own profile" ON public.profiles;
CREATE POLICY "Users can read own profile" ON public.profiles
  FOR SELECT TO authenticated USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

-- Saved Packages Policies
DROP POLICY IF EXISTS "Users can read own saved packages" ON public.saved_packages;
CREATE POLICY "Users can read own saved packages" ON public.saved_packages
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can save packages" ON public.saved_packages;
CREATE POLICY "Users can save packages" ON public.saved_packages
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete own saved packages" ON public.saved_packages;
CREATE POLICY "Users can delete own saved packages" ON public.saved_packages
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- Cart Items Policies
DROP POLICY IF EXISTS "Users can read own cart" ON public.cart_items;
CREATE POLICY "Users can read own cart" ON public.cart_items
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can add to own cart" ON public.cart_items;
CREATE POLICY "Users can add to own cart" ON public.cart_items
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own cart" ON public.cart_items;
CREATE POLICY "Users can update own cart" ON public.cart_items
  FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete from own cart" ON public.cart_items;
CREATE POLICY "Users can delete from own cart" ON public.cart_items
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- Saved Courses Policies
DROP POLICY IF EXISTS "Users can read own saved courses" ON public.saved_courses;
CREATE POLICY "Users can read own saved courses" ON public.saved_courses
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can save courses" ON public.saved_courses;
CREATE POLICY "Users can save courses" ON public.saved_courses
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete own saved courses" ON public.saved_courses;
CREATE POLICY "Users can delete own saved courses" ON public.saved_courses
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- Booking Requests Policies
DROP POLICY IF EXISTS "Users can read own booking requests" ON public.booking_requests;
CREATE POLICY "Users can read own booking requests" ON public.booking_requests
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can create booking requests" ON public.booking_requests;
CREATE POLICY "Users can create booking requests" ON public.booking_requests
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- Order Requests Policies
DROP POLICY IF EXISTS "Users can read own order requests" ON public.order_requests;
CREATE POLICY "Users can read own order requests" ON public.order_requests
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can create order requests" ON public.order_requests;
CREATE POLICY "Users can create order requests" ON public.order_requests
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- User Activity Policies
DROP POLICY IF EXISTS "Users can read own activity" ON public.user_activity;
CREATE POLICY "Users can read own activity" ON public.user_activity
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own activity" ON public.user_activity;
CREATE POLICY "Users can insert own activity" ON public.user_activity
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- ==============================================================================
-- AUTOMATIC PROFILE TRIGGER ON AUTH.USERS INSERT
-- ==============================================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS 
BEGIN
  INSERT INTO public.profiles (id, full_name, email, phone, created_at, updated_at)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    NEW.email,
    NEW.raw_user_meta_data->>'phone',
    NOW(),
    NOW()
  )
  ON CONFLICT (id) DO UPDATE
  SET
    full_name = EXCLUDED.full_name,
    email = EXCLUDED.email,
    phone = COALESCE(EXCLUDED.phone, public.profiles.phone),
    updated_at = NOW();
  RETURN NEW;
END;
 LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
