import React from 'react'
import LazyHero from 'react-lazy-hero';

export default function Home() {
  return (
    <div>
    <LazyHero 
    opacity={0.5}
    minHeight={'85vh'}
    color={"#000"}
    imageSrc="https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80">
    <div class="hero-image">
      <div class="hero-text">
        <h1>Veni a desestresarte</h1>
        <p>StressOut tu lugar</p>
        <button className='hero-button'>Ver eventos</button>
      </div>
    </div>    
    </LazyHero>
    </div>
  )
}