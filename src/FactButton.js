import React from 'react';

const FactButton = ({newFact, btnType}) => {
  return(
    <div>
      <button type="button" onClick={newFact} >{btnType}</button>
    </div>
  )
}

export default FactButton;
