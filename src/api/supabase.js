import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rouwowwctjrhdcuksrqr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvdXdvd3djdGpyaGRjdWtzcnFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4NTMwNjMsImV4cCI6MjAyMTQyOTA2M30.na2Wu80cMmtwlyyBfQuGl2x-TFAUqgfZUyUZQbZMkbY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
