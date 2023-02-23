import './Card.css'
import React from 'react'


const Card = (props) => {

    return (
<div className="card" style={{ width: "18rem" }}>
            <br />
            <div className="card-body" style={{height: "520px"}}>
                <h5 className="card-text-description">{props.data}</h5>
                {props.image && <img className="card-img-top" src={require('../../image/' + props.image + '.jpg')} />}
                <br />
                <p className="card-text-description">{props.description}</p>
            </div>
        </div>
    )
}


export default Card