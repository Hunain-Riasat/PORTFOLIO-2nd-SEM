// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://uumkhylnyfmnfhsdzmnq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1bWtoeWxueWZtbmZoc2R6bW5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4MDgwNjksImV4cCI6MjA2NDM4NDA2OX0.k8trlo0OMW16zVKuJSg91IcQw6ttMtX7jMX7f2-73E4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);