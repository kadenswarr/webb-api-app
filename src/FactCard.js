import React from 'react';
import FactButton from './FactButton';
import Card from './Card';
import './FactCard.css';

const FactCard = ({ fact, newFact}) => {
  return(
    <div className="Card">
      < Card fact={fact} />
      <div className="buttons">
        < FactButton newFact={ newFact } btnType= {"Year Fact"}/>
        < FactButton newFact={ newFact } btnType= {"Trivia Fact"}/>
        < FactButton newFact={ newFact } btnType= {"Date Fact"}/>
        < FactButton newFact={ newFact } btnType= {"Previous Fact"}/>
      </div>
    </div>
  )
}

export default FactCard;
