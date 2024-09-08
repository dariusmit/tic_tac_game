interface Props {
  setGameType: React.Dispatch<React.SetStateAction<string>>;
}

function GameTypeBox({ setGameType }: Props) {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <p>How you want to play?</p>
        <button onClick={() => setGameType("solo")}>Solo</button>
        <button onClick={() => setGameType("cpu")}>Against CPU</button>
      </div>
    </>
  );
}

export default GameTypeBox;
