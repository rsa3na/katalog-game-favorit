import KartuGame from './components/KartuGame.jsx';

export default function App() {
  return (
    <main style={{ padding: '16px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '1.5rem', lineHeight: '1.2' }}>Katalog Game PC & Konsol</h1>
      <KartuGame judul="Mobile Legends" harga={0} levelKesulitan={3} gratis={true} />
      <KartuGame judul="Minecraft" harga={400000} levelKesulitan={2} gratis={false} />
      <KartuGame judul="Elden Ring" harga={750000} levelKesulitan={5} gratis={false} />
    </main>
  );
}