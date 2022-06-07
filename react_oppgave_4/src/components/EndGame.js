
const EndGame = ({setLevel,setRenderButton,setGameOver,setCurrentPoints,currentPoints,score,setShowEndGame,setScore}) => {
  const Restart =()=>{
      setCurrentPoints(0);
      setLevel(0);
      setRenderButton(true);
      setGameOver(false);
      setShowEndGame(false);
      setScore(0);
  }
  return ( 
      <>

      <button
        className="col-span-4 w-full rounded-xl border-2 border-emerald-100 p-8 text-lg font-bold text-emerald-500 shadow-lg shadow-emerald-100"
        type="button"
        data-testid="next"
        onClick={Restart}
      >
        Game Over - your final score is: {score}
      </button>
      </>
   );
}

export default EndGame;