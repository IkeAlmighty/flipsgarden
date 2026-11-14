import { useState } from 'react';
import React from 'react';
import home_image from '../assets/vite.svg';

function Home() {

  return (
		<div>
			<img
			className="home-image"
			src={home_image}
			alt="Hands planting garden"
			style={{ width: '100%', height: 'auto' }}
			></img>
		</div>
  )
}

export default Home
