-- Create the table in public schema if it doesn't exist
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

-- Enable RLS
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Recreate policies
DO $$ 
BEGIN
  -- Drop existing policies if they exist
  DROP POLICY IF EXISTS "Anyone can insert a message" ON public.contact_messages;
  DROP POLICY IF EXISTS "Authenticated users can read all messages" ON public.contact_messages;
  
  -- Create insert policy for anonymous users
  CREATE POLICY "Anyone can insert a message"
    ON public.contact_messages
    FOR INSERT
    TO anon
    WITH CHECK (true);
  
  -- Create select policy for authenticated users
  CREATE POLICY "Authenticated users can read all messages"
    ON public.contact_messages
    FOR SELECT
    TO authenticated
    USING (true);
END $$;