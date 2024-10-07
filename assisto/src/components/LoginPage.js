import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Logique de vérification
    navigate('/info');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: 'royalblue' }}>
      <div className="card p-4">
        <h2 className="text-center" style={{ width: '300px', color: 'indigo' }}>Connexion</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Nom d'utilisateur</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Mot de passe</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-3">Se connecter</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
