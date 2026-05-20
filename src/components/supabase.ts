import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = 'https://oetdlhxeylswohijqypd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ldGRsaHhleWxzd29oaWpxeXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2OTEwMDYsImV4cCI6MjA5MDI2NzAwNn0.O0wuALd8lm3YxbbthbDYPQF0vwXULimXdKhrEN7TSDU';

export const supabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);