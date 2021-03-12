import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const Cervejaria = () => {
  const [cervejaria, setCervejaria] = useState(null);

  useEffect(() => {
    axios.get('https://api.openbrewerydb.org/breweries').then((resposta) => {
      setCervejaria(resposta.data);
    });
  }, []);

  if (cervejaria === null) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <div>
        <h2 className="c">PROJETO40: CERVEJARIAS</h2>
      </div>
      <div className="texto">
        {cervejaria.map((cervejaria) => (
          <li key={cervejaria.id}>
            <div className="h1:hover">
              <h1>Nome: {cervejaria.name}</h1>
              <h1>Cidade: {cervejaria.city}</h1>
              <h1>Estado: {cervejaria.state}</h1>
              <h1>Pais: {cervejaria.country}</h1>
              <h1>Site: {cervejaria.website_url}</h1>
            </div>
          </li>
        ))}
      </div>
    </>
  );
};

export default Cervejaria;
