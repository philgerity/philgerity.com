/*
  # Fix schema and table setup

  1. Changes
    - Ensure public schema exists and is properly configured
    - Recreate contact_messages table with proper schema reference
    - Set up RLS policies with proper schema references
    - Grant necessary permissions

  2. Security
    - Enable RLS on contact_messages table
    - Add policies for anonymous inserts and authenticated reads
*/

-- Reset search path and ensure public schema
CREATE SCHEMA IF NOT EXISTS public;
SET search_path TO public;

-- Drop existing table if it exists to ensure clean state
DROP TABLE IF EXISTS public.contact_messages;

-- Create table in public schema
CREATE TABLE public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

-- Enable RLS
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can insert a message" ON public.contact_messages;
DROP POLICY IF EXISTS "Authenticated users can read all messages" ON public.contact_messages;

-- Create fresh policies
CREATE POLICY "Anyone can insert a message"
  ON public.contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all messages"
  ON public.contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO postgres, anon, authenticated;
GRANT ALL ON TABLE public.contact_messages TO postgres, anon, authenticated;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO postgres, anon, authenticated;