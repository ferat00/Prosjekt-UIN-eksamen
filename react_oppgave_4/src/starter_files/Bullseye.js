// TODO: Nødvendig props
// TODO: Dynamisk verdi må byttes ut

import { useState } from 'react'

export default function Bullseye({
  game,
  setGameOver,
  setLevel,
  points,
  setPoints,
  currentPoints,
  setCurrentPoints,
  setRenderButton
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

  const click = (e) => {
    /* console.log(e.target.dataset); */
    if (e.target.classList.contains('green')) {
      setCurrentPoints((pre) => pre + 1)
    }
    if (e.target.classList.contains('blue')) {
      setCurrentPoints((pre) => pre + 2)
    }
    if (e.target.classList.contains('purple')) {
      setCurrentPoints((pre) => pre + 4)
    }
    if (points === 1 && points === total) {
      console.log('working')
      console.log(total)
      setGameOver(true);
      setRenderButton(false);
    }
  }

  return (
    <>
      {game?.buttons.map((item, index) => {
        /* console.log(item.point); */
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