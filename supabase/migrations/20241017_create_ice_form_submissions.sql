-- Create ice_form_submissions table
CREATE TABLE IF NOT EXISTS public.ice_form_submissions (
    id BIGSERIAL PRIMARY KEY,
    nombres_apellidos TEXT NOT NULL,
    email TEXT NOT NULL,
    celular TEXT,
    edad INTEGER NOT NULL CHECK (edad >= 15 AND edad <= 99),
    nivel_ingles INTEGER NOT NULL CHECK (nivel_ingles >= 0 AND nivel_ingles <= 10),
    programa_interes TEXT NOT NULL,
    otro_especificar TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Add comments to columns for documentation
COMMENT ON TABLE public.ice_form_submissions IS 'Form submissions from ICE website users interested in international programs';
COMMENT ON COLUMN public.ice_form_submissions.nombres_apellidos IS 'Full name of the applicant';
COMMENT ON COLUMN public.ice_form_submissions.email IS 'Email address for contact';
COMMENT ON COLUMN public.ice_form_submissions.celular IS 'Phone number (optional)';
COMMENT ON COLUMN public.ice_form_submissions.edad IS 'Age of applicant (15-99)';
COMMENT ON COLUMN public.ice_form_submissions.nivel_ingles IS 'English level (0-10 scale)';
COMMENT ON COLUMN public.ice_form_submissions.programa_interes IS 'Program of interest';
COMMENT ON COLUMN public.ice_form_submissions.otro_especificar IS 'Specification when programa_interes is "Otro"';

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_ice_form_submissions_created_at ON public.ice_form_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_ice_form_submissions_email ON public.ice_form_submissions(email);
CREATE INDEX IF NOT EXISTS idx_ice_form_submissions_programa_interes ON public.ice_form_submissions(programa_interes);

-- Enable Row Level Security (RLS)
ALTER TABLE public.ice_form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for form submissions)
CREATE POLICY "Allow anonymous inserts" 
ON public.ice_form_submissions 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Create policy to allow authenticated users to read their own submissions
CREATE POLICY "Users can view all submissions" 
ON public.ice_form_submissions 
FOR SELECT 
TO authenticated 
USING (true);

-- Create a function to automatically update the updated_at column
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER handle_ice_form_submissions_updated_at
    BEFORE UPDATE ON public.ice_form_submissions
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();