-- Create english_course_exams table
CREATE TABLE IF NOT EXISTS public.english_course_exams (
    id BIGSERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    unit INTEGER NOT NULL,
    score INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    answers JSONB NOT NULL DEFAULT '{}'::jsonb,
    submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Add comments to columns for documentation
COMMENT ON TABLE public.english_course_exams IS 'English course exam submissions';
COMMENT ON COLUMN public.english_course_exams.first_name IS 'First name of the student';
COMMENT ON COLUMN public.english_course_exams.last_name IS 'Last name of the student';
COMMENT ON COLUMN public.english_course_exams.email IS 'Email address';
COMMENT ON COLUMN public.english_course_exams.unit IS 'Unit number of the exam';
COMMENT ON COLUMN public.english_course_exams.score IS 'Total correct answers';

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_english_course_exams_email ON public.english_course_exams(email);
CREATE INDEX IF NOT EXISTS idx_english_course_exams_unit ON public.english_course_exams(unit);

-- Enable Row Level Security (RLS)
ALTER TABLE public.english_course_exams ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for form submissions)
CREATE POLICY "Allow anonymous inserts for english_course_exams" 
ON public.english_course_exams 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Create policy to allow authenticated users to read submissions
CREATE POLICY "Allow authenticated viewing english_course_exams" 
ON public.english_course_exams 
FOR SELECT 
TO authenticated 
USING (true);
