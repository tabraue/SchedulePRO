import React from 'react'

function Welcome() {
  return (
    <div className="min-w-screen min-h-screen relative">
    <div className="absolute inset-0">
      <img
        src="https://source.unsplash.com/random?technology,business"
        alt="business"
        className="w-[100%] h-[100%] object-cover relative"
      />
    </div>
    <div className="min-w-screen min-h-screen flex items-center justify-center z-50">
      <div className="shadow-md bg-white-sand min-w-[600px] min-h-[500px] w-64 h-64 grid auto-rows-r justify-items-stretch gap-y-3 place-content-center content-center items-center border-solid border-2 border-blue-calypso p-6 z-50">
        <h1 className="text-3xl font-extrabold text-blue-calypso text-center z-50">
          Welcome
        </h1>
      </div>
    </div>
  </div>
  )
}

export default Welcome