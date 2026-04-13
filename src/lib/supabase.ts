import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://tyeqrsbxjbxymhcdmach.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5ZXFyc2J4amJ4eW1oY2RtYWNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwOTI1NTYsImV4cCI6MjA5MTY2ODU1Nn0.zD0oF6n71N8KU0ricxU1oF-nAlgZkONhRKArcFT_J0U";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
