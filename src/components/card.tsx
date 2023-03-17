import React from 'react';
import '../index.css';
import ImageCard from './imageCard';
import Login from './login';


export default function Card() {
    return (
        <div className='flex flex-rol w-1440 h-900 mt-4 bg-gray50'>
            <Login />
            <ImageCard />
        </div>
    )
}