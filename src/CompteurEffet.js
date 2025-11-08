import { useState, useEffect } from 'react';

function CompteurEffet() {
  const [compte, setCompte] = useState(0);

  useEffect(() => {
    console.log(`Le compteur est à ${compte}`);
  }, [compte]);

  return (
    <div>
      <button onClick={() => setCompte(compte + 1)}>
        Incrémenter avec effet
      </button>
    </div>
  );
}

export default CompteurEffet;