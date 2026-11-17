export interface Destination {
  id: string;
  category: 'kerala' | 'west' | 'himalayas';
  image: string;
  nameEn: string;
  nameMl: string;
  regionEn: string;
  regionMl: string;
  shortEn: string;
  shortMl: string;
  briefEn: string;
  briefMl: string;
  bestSeasonEn: string;
  bestSeasonMl: string;
  durationEn: string;
  durationMl: string;
  cost: string;
  costNumeric: number;
  altitudeFt: number;
  itineraryEn: string[];
  itineraryMl: string[];
}

export interface StoreItem {
  id: string;
  image: string;
  typeEn: string;
  typeMl: string;
  nameEn: string;
  nameMl: string;
  price: string;
  priceNumeric: number;
  descEn: string;
  descMl: string;
  specsEn: string[];
  specsMl: string[];
}

export interface CourseItem {
  id: string;
  image: string;
  typeEn: string;
  typeMl: string;
  nameEn: string;
  nameMl: string;
  price: string;
  priceNumeric: number;
  descEn: string;
  descMl: string;
  specsEn: string[];
  specsMl: string[];
}

export interface KnowledgeItem {
  id: string;
  titleEn: string;
  titleMl: string;
  pointsEn: string[];
  pointsMl: string[];
}

export interface DiscoverItem {
  id: string;
  category: 'mountaineers' | 'peaks' | 'expeditions' | 'geography';
  image: string;
  badgeEn: string;
  badgeMl: string;
  titleEn: string;
  titleMl: string;
  subtitleEn: string;
  subtitleMl: string;
  shortEn: string;
  shortMl: string;
  keyFactEn: string;
  keyFactMl: string;
  timelineEn?: string;
  timelineMl?: string;
  altitudeMeters?: number;
  fullStoryEn: string[];
  fullStoryMl: string[];
  takeawaysEn: string[];
  takeawaysMl: string[];
}

export interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
  created_at: string;
}

export interface Booking {
  id: string;
  user_id: string;
  category: string;
  item_id: string;
  item_title: string;
  price_or_cost: string;
  status: string;
  booked_at: string;
}

export interface WeatherInfo {
  placeId: string;
  tempC: number;
  conditionEn: string;
  conditionMl: string;
  humidity: number;
  windKmH: number;
  altitudeFt: number;
  icon: string;
}
