
// TODO: Nødvendig props
// TODO: Dynamisk verdi må byttes ut

import { useState } from 'react'

export default function BullsEye({
  game,
  setGameOver,
  setLevel,
  points,
  setPoints,
  currentPoints,
  setCurrentPoints,
  setRenderButton,
  level,
  setScore,
  setShowEndGame
}) {
  // TODO: Legge til nødvendig logikk. Hvis nødvendig.
  /* const colorClass = game?.buttons.map(item=>item.color); */

  const total = game?.buttons.reduce((agg, item) => {
    if (item.point > 0) {
      return agg + item.point
    }
    return agg
  }, 0)
  setPoints(total)

  let finalScore = 0;
  

  const click = (e) => {
    /* console.log(e.target.dataset); */
    if (e.target.classList.contains('green')) {
      setCurrentPoints((pre) => pre + 1)
      finalScore ++;
      setScore(pre => pre + 1);
      
    }
    if (e.target.classList.contains('blue')) {
      setCurrentPoints((pre) => pre + 2)
      finalScore += 2;
      setScore(pre => pre + 2);
    }
    if (e.target.classList.contains('purple')) {
      setCurrentPoints((pre) => pre + 4)
      setScore(pre => pre + 4);
      finalScore += 4;
    }
    if (e.target.classList.contains('red')) {
      /* setCurrentPoints(0);
      setScore(0);
      setLevel(0); */
      setGameOver(false);
      setRenderButton(false);
      setShowEndGame(true);
    }
    
    
  }

  //next round if statement and function. if
  const newRound = ()=>{
    setGameOver(true);
    setRenderButton(false);
  }

  if(level >= 0 && currentPoints >= total){
        
        newRound();
  }
  
  

  return (
    <>
      {game?.buttons.map((item, index) => {
        /* console.log(item); */
        return (
          <button
            type="button"
            className={`${item.color} flex h-36 w-36 items-center justify-center p-8 shadow shadow-slate-200`}
            data-color={item.color}
            data-point={item.point}
            data-testid="button"
            key={index}
            onClick={click}
          >
            <span className="pointer-events-none block h-12 w-12 rounded-full" />
          </button>
        )
      })}
    </>
  )
}