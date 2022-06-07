// TODO: Nødvendig props
import Bullseye from './Bullseye'
export default function Game({
  game,
  setLevel,
  points,
  setPoints,
  setCurrentPoints,
  currentPoints,
  gameOver,
  setGameOver,
  setRenderButton
}) {
  // TODO: Legge til nødvendig logikk. Hvis nødvendig.

  return (
    <div data-testid="game" className="grid grid-cols-4 gap-6">
      {/* TODO: Må skrive ut antall knapper et spill skal vise */}
      {/* TODO: Må bruke riktig komponent og sende data som props */}

      {/* TODO: Kun vise denne knappen når en runde er ferdig */}
      <Bullseye
        game={game ? game : null}
        setGameOver={setGameOver}
        setLevel={setLevel}
        setPoints={setPoints}
        setCurrentPoints={setCurrentPoints}
        currentPoints={currentPoints}
        points={points}
        setRenderButton={setRenderButton}
      />
      {gameOver ? (
        <button
          className="col-span-4 w-full rounded-xl border-2 border-emerald-100 p-8 text-lg font-bold text-emerald-500 shadow-lg shadow-emerald-100"
          type="button"
          data-testid="next"
        >
          Neste runde
        </button>
      ) : null}
    </div>
  )
}