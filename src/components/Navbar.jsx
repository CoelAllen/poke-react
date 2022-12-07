import React, { useEffect, useState } from 'react';
import styled from "styled-components"
import Button from "react-bootstrap/Button"
import Offcanvas from "react-bootstrap/Offcanvas"
import {AiOutlineClose} from "react-icons/ai"

function Navbar(props) {  
  const [pokemon, setPokemon] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("")
  const [show, setShow] = useState(false);
  const [activePoke, setActivePoke] = useState({})
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    

  useEffect(()=>{
    getPokemon()
    console.log(activePoke);
  }, [activePoke]);

 const makePokeActive = (poke) =>{
  setActivePoke(poke)
  console.log(poke, "making active");
  localStorage.setItem('activePoke', JSON.stringify(poke))
  console.log(localStorage.getItem('activePoke'), "checking local");
 }

  const getPokemon = async () => {
    const api = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = await api.json();
    setNextPage(data.next)
    setPreviousPage(data.previous)
    setPokemon(data.results)
  }
  const getNextPage = async () =>{
    const api = await fetch(`${nextPage}`);
    const data = await api.json()
    setNextPage(data.next)
    setPreviousPage(data.previous)
    setPokemon(data.results)
  }
  const getPreviousPage = async ()=> {
    const api = await fetch (`${previousPage}`);
    const data = await api.json();
    setNextPage(data.next)
    setPreviousPage(data.previous)
    setPokemon(data.results)
  }
  return (
    <Nav>
      <img 
      title='See All Pokemon'
      onClick={handleShow}
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png' alt='Poke-List'>
      </img>
        <div>
          <img 
            title='Pokemon!'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png' alt='Pokemon Logo'>
          </img>
        </div>
      
      <Wrapper show={show} onHide={handleClose}>
          <Adjust>
            <Close onClick={handleClose}/>
          </Adjust>
        <Header>
          <Offcanvas.Title><img 
            title='Pokemon!'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png' alt='Pokemon Logo'>
          </img></Offcanvas.Title>
        </Header>
        <Offcanvas.Body>
          <Body>
            {pokemon.map((p)=>{
              return(
                <div key={p.name}>
                  <p onClick={()=>makePokeActive(p)}>{p.name}</p>
                </div>
              )
            })}
          </Body>
          <Buttons>
            {previousPage != null &&
              <Action onClick={getPreviousPage}>Previous</Action>
            }
            {nextPage != null &&
              <Action onClick={getNextPage}>Next</Action>
            }
          </Buttons>
        </Offcanvas.Body>
      </Wrapper>
    </Nav>
  )
}
const Nav = styled.div`
  width:100%;
  background-color: yellow;
  height: 3rem;
  padding-inline-start: 1rem;
  display: flex;
  align-items: center;
  img{
    height: 2rem;
    cursor: pointer;
    }
`
const Adjust = styled.div`
  text-align: end;
`
const Wrapper = styled(Offcanvas)`
  padding: 1rem;
  background-color: #d30e0e;
  width: 10rem;
  text-align: center;
  height: 90vh;
  border-radius: 5px;
  position: absolute;
  overflow-y: scroll;
  top: 0;
  z-index: 10000;
`
const Header = styled(Offcanvas.Header)`
  background-color: #da8f0479;
  font-size: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width:100%;
  border-radius: 3px;
  img{
    height: 3rem;
  }
`
const Close = styled(AiOutlineClose)` 
  font-size: small;
  cursor: pointer;
`
const Action = styled(Button)`
  background-color: orange;
  border:none;
  border-radius: 3px;
  font-size: large; 
  padding-inline:.5rem;
  cursor: pointer;
  
`
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`
const Body = styled.div`
background-color: whitesmoke;
padding: .25rem;
margin-bottom: 1rem;
border-radius: 3px;
height: auto;

div{
  p{
    cursor: pointer;
  }
}
`
export default Navbar