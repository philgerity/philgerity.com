/*
  # Contact Messages Table Setup

  1. Table Changes
    - Ensure contact_messages table exists with all required fields
  
  2. Security
    - Ensure RLS is enabled
    - Safely recreate policies if they don't exist
*/

-- Create table if it doesn't exist
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Safely create policies
DO $$ 
BEGIN
  -- Create insert policy if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'contact_messages' 
    AND policyname = 'Anyone can insert a message'
  ) THEN
    CREATE POLICY "Anyone can insert a message"
      ON contact_messages
      FOR INSERT
      TO anon
      WITH CHECK (true);
  END IF;

  -- Create select policy if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'contact_messages' 
    AND policyname = 'Authenticated users can read all messages'
  ) THEN
    CREATE POLICY "Authenticated users can read all messages"
      ON contact_messages
      FOR SELECT
      TO authenticated
      USING (true);
  END IF;
END $$;