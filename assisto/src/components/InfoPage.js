import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function InfoPage() {
  const [numPers, setNumPers] = useState(1);
  const [numDouch, setNumDouch] = useState(1);
  const [numLavabo, setNumLavabo] = useState(1);
  const [numToilets, setNumToilets] = useState(1);
  const [WashingMach, setWashingMach] = useState(false);
  const [Dishwash, setDishwash] = useState(false);
  const [Garden, setGarden] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour enregistrer les données de l'utilisateur
    navigate('/dashboard');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: 'white' }}>
      <div className="card shadow p-4" style={{ width: '600px', borderRadius: '15px' }}>
        <h2 className="text-center mb-4" style={{ color: 'indigo' }}>Informations sur la consommation</h2>
        <form onSubmit={handleSubmit}>
          {/* Nombre de personnes dans la maison */}
          <div className="mb-3">
            <label className="form-label">Nombre de personnes dans la maison</label>
            <input
              type="number"
              className="form-control"
              value={numPers}
              onChange={(e) => setNumPers(e.target.value)}
              min="1"
              required
            />
          </div>

          {/* Nombre de douches */}
          <div className="mb-3">
            <label className="form-label">Nombre de douches</label>
            <input
              type="number"
              className="form-control"
              value={numDouch}
              onChange={(e) => setNumDouch(e.target.value)}
              min="1"
              required
            />
          </div>

          {/* Nombre de lavabos */}
          <div className="mb-3">
            <label className="form-label">Nombre de lavabos</label>
            <input
              type="number"
              className="form-control"
              value={numLavabo}
              onChange={(e) => setNumLavabo(e.target.value)}
              min="1"
              required
            />
          </div>

          {/* Nombre de toilettes */}
          <div className="mb-3">
            <label className="form-label">Nombre de toilettes</label>
            <input
              type="number"
              className="form-control"
              value={numToilets}
              onChange={(e) => setNumToilets(e.target.value)}
              min="1"
              required
            />
          </div>

          {/* Présence de lave-linge */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={WashingMach}
              onChange={(e) => setWashingMach(e.target.checked)}
            />
            <label className="form-check-label">Avez-vous un lave-linge ?</label>
          </div>

          {/* Présence de lave-vaisselle */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={Dishwash}
              onChange={(e) => setDishwash(e.target.checked)}
            />
            <label className="form-check-label">Avez-vous un lave-vaisselle ?</label>
          </div>

          {/* Présence d'un jardin */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={Garden}
              onChange={(e) => setGarden(e.target.checked)}
            />
            <label className="form-check-label">Avez-vous un jardin ou une piscine ?</label>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 mt-3"
            style={{ backgroundColor: 'indigo', borderRadius: '50px' }}
          >
            Suivant
          </button>
        </form>
      </div>
    </div>
  );
}

export default InfoPage;
