
const Game = ({setLevel,setRenderButton,setGameOver,setCurrentPoints}) => {
  const nextRound =()=>{
      setCurrentPoints(0);
      setLevel((previousLevel => previousLevel + 1));
      setRenderButton(true);
      setGameOver(false);
      
  }
  return ( 
      <>
      <button
        className="col-span-4 w-full rounded-xl border-2 border-emerald-100 p-8 text-lg font-bold text-emerald-500 shadow-lg shadow-emerald-100"
        type="button"
        data-testid="next"
        onClick={nextRound}
      >
        Neste runde
      </button>
      </>
   );
}

export default Game;