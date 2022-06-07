/* eslint-disable no-plusplus */
import { useEffect, useState } from 'react'
/* import Game from './starter_files/Game' */
import Game from './components/Game'
/* import Header from './starter_files/Header' */
import Header from './components/Header'
import Bullseye from './components/Bullseye'
// TODO: createGame har en TODO som må ferdigstilles
import { createGame, levels } from './starter_files/start'
import EndGame from './components/EndGame'

export default function App() {
  const [game, setGame] = useState(null)
  const [points, setPoints] = useState(null)
  const [currentPoints, setCurrentPoints] = useState(0)
  //lvl state
  const [level, setLevel] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [renderButtons, setRenderButton] = useState(true)
  const [showEndGame, setShowEndGame] = useState(false)
  /*  console.log(levels); */
  // TODO: Legge til nødvendig logikk. Hvis nødvendig.Jada.
  const [score, setScore] = useState(0)
  useEffect(() => {
    // TODO: 0 må byttes ut med noe dynamisk
    setGame(createGame(level))
  }, [level, gameOver])

  return (
    <div>
      <Header points={points} currentPoints={currentPoints} />
      <div data-testid="game" className="grid grid-cols-4 gap-6">
        {renderButtons ? (
          <Bullseye
            game={game ? game : null}
            setGameOver={setGameOver}
            setLevel={setLevel}
            setPoints={setPoints}
            setCurrentPoints={setCurrentPoints}
            currentPoints={currentPoints}
            points={points}
            setRenderButton={setRenderButton}
            level={level}
            setScore={setScore}
            setShowEndGame={setShowEndGame}
          />
        ) : null}
        {gameOver ? (
          <Game
            setLevel={setLevel}
            setRenderButton={setRenderButton}
            setGameOver={setGameOver}
            setCurrentPoints={setCurrentPoints}
            score={score}
          />
        ) : null}
        {showEndGame ? (
          <EndGame
            setLevel={setLevel}
            setRenderButton={setRenderButton}
            setGameOver={setGameOver}
            setCurrentPoints={setCurrentPoints}
            score={score}
            setShowEndGame={setShowEndGame}
            setScore={setScore}
          />
        ) : null}
      </div>
    </div>
  )
}