import React from 'react';

function List({ cows }) {
  return (
    <div>
      {cows.map(cow => {
        return <div>{cow.name}</div>;
      })}
    </div>
  );
}

export default List;
