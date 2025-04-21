/*
  # Update contact messages policies

  1. Security
    - Ensure RLS is enabled on contact_messages table
    - Add policy for anonymous users to insert messages (if not exists)
    - Add policy for authenticated users to read messages (if not exists)
*/

-- Enable RLS if not already enabled
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Conditionally create the insert policy
DO $$ 
BEGIN
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
END $$;

-- Conditionally create the select policy
DO $$ 
BEGIN
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