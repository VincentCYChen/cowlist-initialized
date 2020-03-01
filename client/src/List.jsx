import React from 'react';

function List({ cows, showDetail }) {
  return (
    <div>
      {cows.map(cow => {
        return <div onClick={() => showDetail(cow)}>{cow.name}</div>;
      })}
    </div>
  );
}

export default List;
