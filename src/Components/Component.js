import React from 'react';
import './component.css';


const Component = ({title,calories,image,ingredients}) => {
    return (
            <div className="Recipe">
                <h1>{title}</h1>
                <p className="caloriya">{calories}</p>
                <ol>
                    {ingredients.map(ingredients =>(
                        <li className="tarkib">{ingredients.text}</li>
                    ))}
                </ol>
                <img src={image} alt=""/>

            </div>
    )
}

export default Component
