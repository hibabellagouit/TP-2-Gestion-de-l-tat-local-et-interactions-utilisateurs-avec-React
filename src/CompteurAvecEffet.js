// CompteurEffet.js
import { useState, useEffect } from 'react';

function CompteurAvecEffet()  {
  const [clics, setClics] = useState(0);

  function incrementer() {
    setClics(clics + 1);
  }

  // 🔁 useEffect se déclenche à chaque changement de "clics"
  useEffect(() => {
    document.title = `Clics : ${clics}`;
  }, [clics]); // dépendance : se met à jour à chaque clic

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>🧮 Compteur avec effet</h2>
      <p>Vous avez cliqué {clics} fois.</p>
      <button onClick={incrementer}>Incrémenter</button>
    </div>
  );
}

export default CompteurAvecEffet;
