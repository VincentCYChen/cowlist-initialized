import React from 'react';

function Detail({ cow, showDetail }) {
  if (cow === null) return null;
  return (
    <div>
      <button onClick={() => showDetail(null)}>close</button>
      <p>Cow Name: {cow.name}</p>
      <p>Description: {cow.description}</p>
    </div>
  );
}

export default Detail;
