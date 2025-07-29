// app/env-test/page.tsx
export default function EnvTest() {
  return (
    <div>
      <h1>Environment Variables Test</h1>
      <p>NEXT_PUBLIC_SUPABASE_URL: {process.env.NEXT_PUBLIC_SUPABASE_URL || 'NOT FOUND'}</p>
      <p>NEXT_PUBLIC_SUPABASE_ANON_KEY: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.slice(0, 10) || 'NOT FOUND'}...</p>
    </div>
  )
}