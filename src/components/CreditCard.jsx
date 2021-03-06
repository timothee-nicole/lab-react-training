import React from 'react'


const CreditCard = (props) => {
    return (
        <div className="credit-card" style={{backgroundColor: props.bgColor, color: props.color}}>
          <div className="bank">
              {props.type}
          </div>  
          <p>•••• •••• •••• {props.number.substr(-4)}</p>
          <p>Expires {props.expirationMonth}/{props.expirationYear - 2000} {props.bank}</p>
          <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard
