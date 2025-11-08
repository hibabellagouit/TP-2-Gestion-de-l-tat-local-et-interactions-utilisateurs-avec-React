// AffichageDynamique.js
import { useState } from 'react';

function AffichageDynamique() {
  const [compteur, setCompteur] = useState(0);

  // Tableau des messages à afficher selon le clic
  const messages = [
    "Premier clic",
    "Deuxième clic",
    "Troisième clic",
    "Encore un clic !",
  ];

  function changerTexte() {
    // Incrémente le compteur, puis recommence à 0 après le dernier message
    setCompteur((compteur + 1) % messages.length);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{messages[compteur]}</p>
      <button onClick={changerTexte}>Changer le texte</button>
    </div>
  );
}

export default AffichageDynamique;
