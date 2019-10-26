import React, { useState } from 'react';

// import { Container } from './styles';

export default function TechList() {
  const [techs, setTechs] = useState([]);

  function handleAddTech() {
    setTechs([...techs, 'Dae negada', 'Node.js']);
  }

  return (
    <div>
      <button onClick={handleAddTech}>Adicionar</button>
      <ul data-testid="tech-list">
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}
