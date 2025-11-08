// FormulaireInscription.js
import { useState } from 'react';

function FormulaireInscription() {
  // États pour les champs du formulaire
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');

  // Fonction appelée lors de la soumission
  function handleSubmit(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    alert(`Prénom : ${prenom}\nEmail : ${email}`);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>📝 Formulaire d'inscription</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ margin: '10px' }}>
          <label>
            Prénom :
            <input
              type="text"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              required
              style={{ marginLeft: '10px' }}
            />
          </label>
        </div>

        <div style={{ margin: '10px' }}>
          <label>
            Email :
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ marginLeft: '10px' }}
            />
          </label>
        </div>

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default FormulaireInscription;
