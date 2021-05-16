import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// Components
// import Landing from "../components/landing"
const Landing = dynamic(() =>
  import('../components/landing'), {
  loading: () => {
    console.log('loading dlu')
    return (
      <Loader
        className="absolute inset-0 z-100 flex items-center justify-center bg-brand-500"
        visible={true}
        type="Puff"
        color="#FFF"
        height={100}
        width={100}
      // timeout={3000} //3 secs
      />
    )
  }
})

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <Landing />
    </>
  )
}

export default HomePage;