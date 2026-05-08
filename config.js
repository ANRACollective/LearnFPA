// ─────────────────────────────────────────
// LearnFPA — Supabase config
// ─────────────────────────────────────────
// Get your anon key from:
//   Supabase Dashboard → Your project → Settings → API → anon public
// ─────────────────────────────────────────

const SUPABASE_URL  = 'https://wqkpefazrzvjvvmgiexf.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indxa3BlZmF6cnp2anZ2bWdpZXhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyMjEyNDAsImV4cCI6MjA5Mzc5NzI0MH0.1t7B3xYyc7RH4kbAC87_-oKj798fCGswsOiu3Qv7Qxg';

window.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
