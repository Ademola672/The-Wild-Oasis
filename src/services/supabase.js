import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://czgridbqjftajmwtormg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6Z3JpZGJxamZ0YWptd3Rvcm1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2NzE3MjAsImV4cCI6MjA1MjI0NzcyMH0.xvRIw9Gz47h06G-jnXrLXO4CcOSEk9MRD_mtph4sF2Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
