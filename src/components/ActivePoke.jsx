import React, { useEffect, useState } from 'react'

function ActivePoke() {
  const [activePoke, setActivePoke] = useState({})
  
      useEffect(()=>{
      getActive()
    }, [])

  const getActive = async () => {
    const active = localStorage.getItem('activePoke')
    const mon = JSON.parse(active)
    console.log(mon, "logging ActivePoke");
    

     
      
  }
  
  // const getPoke = async (activePoke) => {
  //   if(activePoke){
  //     const api = await fetch(`${activePoke.url}`)
  //     const data = await api.json()
  //     console.log(data.name);
  //   }else{
  //     console.log("No active Pokemon");
  //   }
  // }
  return (
    
    <div>
      <h2>{}</h2>
      </div>
  )
}

export default ActivePoke