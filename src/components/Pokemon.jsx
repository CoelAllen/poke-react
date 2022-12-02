import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    getPokemon()
  }, [])

  const getPokemon = async () => {
    const api = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = await api.json();
    localStorage.setItem('pokemon', JSON.stringify(data.results))
    setPokemon(data.results)
  }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Pokemon
      </Button>
      <Wrapper show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Pokemon!</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
      {pokemon.map((p)=>{
        return(
          <div key={p.name}>
              <p>{p.name}</p>
          </div>
          )
        })}
        </Offcanvas.Body>
      </Wrapper>
    </div>
  )
}
const Wrapper = styled(Offcanvas)`
  padding: 2rem;
  background-color: #d70404;
  width: 10rem;
  text-align: center;
  height:100%;
  font-size: 1.5rem;
`
const Action = styled(Button)`
  position: sticky;
`
export default Pokemon