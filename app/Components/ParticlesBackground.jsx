import React from 'react';
import '../Styles/Particles.css'; // your CSS file

const particleOffsets = Array.from({ length: 22 }, (_, index) => ((index * 7) % 16) + 2);

function ParticlesBackground() {
  return (
    <div className="particlesContainer ">
      <div className="bubbles">
        {particleOffsets.map((size, i) => (
          <span key={i} style={{ '--i': size }}></span>
        ))}
      </div>
    </div>
  );
}

export default ParticlesBackground;
