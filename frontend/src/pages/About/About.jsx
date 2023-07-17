import React from 'react'

function About() {
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center">
    <div className="bg-blue-calypso p-6 rounded-md shadow-lg flex flex-col items-center justify-center">
        <h5 className="text-lg font-bold tracking-tight text-white-sand text-center border-b-2 border-green-paradiso p-3">
          ABOUT
        </h5>
      <img
        src="https://source.unsplash.com/random?technology,business"
        alt="business"
        className="mx-auto rounded-3xl max-w-full h-auto object-cover"
      />
    </div>
  </div>
  )
}

export default About