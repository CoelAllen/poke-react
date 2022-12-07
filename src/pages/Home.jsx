import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar.jsx';
import { useState } from 'react';
import { useEffect } from 'react';
import ActivePoke from '../components/ActivePoke.jsx';





function Home() {
  

  return (
    <Page>
      <Navbar />
      <ActivePoke/>
    </Page>
    
  )
}
const Page = styled.div`
  background-image: url('https://wallpaperaccess.com/full/747801.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
`

export default Home