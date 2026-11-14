import { useState } from 'react';
import React from 'react';
import home_image from '../assets/vite.svg';

function Home() {

  return (
		<div>
			<img
			src={home_image}
			alt="Hands planting garden"
			style={{ width: '100%', height: 'auto' }}
			className="h-64 w-full object-cover"
			></img>
				<h1 className="absolute inset-0 flex flex-col justify-end text-white text-4xl font-bold p-4">Our mission</h1>
				<p className="absolute inset-0 flex flex-col justify-end" >Our mission is to provide ecologically sound, personalized gardening and landscaping services that are detail oriented and flexible to meet the unique needs of each client throughout the Twin Cities. </p>
			<div>
				<p className="text-2xl font-bold p-4">
					Here at Flip’s Garden and Landscaping, our first and most important responsibility is to the earth.
					</p>
				<p className="text-2xl font-bold p-4">
					That is why we prioritize native plant options whenever possible and specialize in completely native gardens. All of our work is also free of chemicals that endanger wildlife and other essential parts of the ecosystem like water and soil.
					</p>
				<p className="text-2xl font-bold p-4">
					Client-centered and personal services are incredibly important in this digital age, so we make an effort to get to know you. Everyone deserves to receive services from a person they know and trust.
					</p>
			</div>
		</div>
  )
}

export default Home
