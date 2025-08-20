export default function TestPage() {
  return (
    <div style={{ padding: '50px', backgroundColor: '#0B0F19', minHeight: '100vh', color: 'white' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Test Page Works!</h1>
      <p style={{ fontSize: '1.5rem' }}>If you can see this, the routing is working correctly.</p>
      <a href="/chat" style={{ color: '#3B82F6', fontSize: '1.2rem', textDecoration: 'underline' }}>
        Go to Chat
      </a>
    </div>
  );
}
