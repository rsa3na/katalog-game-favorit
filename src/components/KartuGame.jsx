export default function KartuGame({ judul, harga, levelKesulitan, gratis }) {
  return (
    <article className="kartu">
      <h3>{judul}</h3>
      <p>Kesulitan: Level {levelKesulitan}</p>
      <p>Harga: Rp {harga.toLocaleString('id-ID')}</p>
      {gratis ? (
        <span className="lencana">Free to Play</span>
      ) : (
        <span className="lencana off">Berbayar</span>
      )}
    </article>
  );
}