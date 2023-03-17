import React from 'react';
import '../index.css';
import backgroundCard from '../assets/card.png';

export default function ImageCard() {
    return (
        <div className='flex w-736 h-900 bg-purple'>
                <img src={backgroundCard} alt="fundo roxo"/>
            </div>
    )
}