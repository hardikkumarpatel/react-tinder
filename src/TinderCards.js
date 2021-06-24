import './TinderCard.css'
import TinderCard from 'react-tinder-card'
import React, { useState, useEffect } from 'react'
import axios from "axios";
export default function TinderCards() {
    const [people, setPeople] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:9002/tinder/card')
            .then(res => {
                setPeople(res.data)
            })
    }, []);
     
    const swipe = (name) => {
        console.log('Name:' + name)
    }
    const outOfFrame = (name) => {
        console.log('Left Of Frame:' + name);
    }
    return (
        <div className="cardContent">
            <div className="tinderCards__cardContainer">
                {people.map((people) => (
                    <TinderCard
                        className="swipe"
                        key={people.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swipe(people.name)}
                        onCardLeftScreen={() => outOfFrame(people.name)}
                    >
                        <div
                            className="card"
                            style={{ backgroundImage: `url(${people.imgUrl})` }}>
                              <h3>{people.name}</h3>
                        </div>
                  </TinderCard>
                ))}
            </div>
        </div>
    )
}

