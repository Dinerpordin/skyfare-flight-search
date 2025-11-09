export default function Home() {
  return (
    <div style={{ padding: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1>✈️ SkyFare Flight Search</h1>
      <p>Welcome to SkyFare Flight Search - Your gateway to finding the best flight deals!</p>
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h2>Coming Soon</h2>
        <p>We're building an amazing flight search experience with:</p>
        <ul>
          <li>Real-time flight prices from 400+ airlines</li>
          <li>Multi-city search capabilities</li>
          <li>Advanced filters and sorting options</li>
          <li>Best price guarantees</li>
        </ul>
        <p style={{ marginTop: '20px' }}>
          <strong>Powered by:</strong> Amadeus API, Aviationstack, and AeroDataBox
        </p>
      </div>
    </div>
  );
}