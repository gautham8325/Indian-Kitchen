//do not edit 
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://mstwhooowumezvcubrqk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zdHdob29vd3VtZXp2Y3VicnFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2MTkyODAsImV4cCI6MjA2MDE5NTI4MH0.uZvv9qsOkPx6qvPjs8vskLfA5yTNXA_3PzB__U3UOc4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);