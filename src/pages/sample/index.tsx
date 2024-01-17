import React, { useState } from "react";

const ContohKomponen = () => {
  const [kondisi, setKondisi] = useState(true);

  // Array contoh
  const dataArray = ["Item 1", "Item 2", "Item 3"];

  return (
    <div>
      {/* Pernyataan kondisional */}
      {kondisi ? (
        <p>Kondisi adalah true, tampilkan pesan ini.</p>
      ) : (
        <p>Kondisi adalah false, tampilkan pesan lain.</p>
      )}

      {/* Mapping array dengan kondisi */}
      <ul>
        {dataArray.map((item, index) => (
          <li key={index}>
            {/* Pernyataan kondisional untuk setiap elemen array */}
            {kondisi ? <span>{item}</span> : <strong>{item}</strong>}
          </li>
        ))}
      </ul>

      {/* Tombol untuk mengubah kondisi */}
      <button onClick={() => setKondisi(!kondisi)}>Ubah Kondisi</button>
    </div>
  );
};

export default ContohKomponen;
