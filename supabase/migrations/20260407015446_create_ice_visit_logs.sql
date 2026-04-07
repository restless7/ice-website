-- Create ice_visit_logs table
CREATE TABLE IF NOT EXISTS public.ice_visit_logs (
    id BIGSERIAL PRIMARY KEY,
    email TEXT NOT NULL,
    full_name TEXT NOT NULL,
    id_type TEXT NOT NULL,
    id_number TEXT NOT NULL,
    phone TEXT NOT NULL,
    reason TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Add comments to columns for documentation
COMMENT ON TABLE public.ice_visit_logs IS 'Visitor logs for ICE Colombia offices';
COMMENT ON COLUMN public.ice_visit_logs.email IS 'Email address of the visitor';
COMMENT ON COLUMN public.ice_visit_logs.full_name IS 'Full name of the visitor';
COMMENT ON COLUMN public.ice_visit_logs.id_type IS 'Type of identification (Cédula, Pasaporte, etc)';
COMMENT ON COLUMN public.ice_visit_logs.id_number IS 'Identification number';
COMMENT ON COLUMN public.ice_visit_logs.phone IS 'Contact phone number';
COMMENT ON COLUMN public.ice_visit_logs.reason IS 'Stated reason for the visit';

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_ice_visit_logs_created_at ON public.ice_visit_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_ice_visit_logs_email ON public.ice_visit_logs(email);

-- Enable Row Level Security (RLS)
ALTER TABLE public.ice_visit_logs ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for the public registration form)
CREATE POLICY "Allow anonymous inserts for visit_logs" 
ON public.ice_visit_logs 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Create policy to allow authenticated users to read logs
CREATE POLICY "Allow authenticated viewing visit_logs" 
ON public.ice_visit_logs 
FOR SELECT 
TO authenticated 
USING (true);
