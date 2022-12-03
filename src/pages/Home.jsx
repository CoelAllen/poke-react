import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar.jsx';





function Home() {
  
  return (
    <Page>
      <Navbar />
      
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