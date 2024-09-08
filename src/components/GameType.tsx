interface Props {
  setGameType: React.Dispatch<React.SetStateAction<string>>;
  mark: string;
  setMark: React.Dispatch<React.SetStateAction<string>>;
  setPlayer1Mark: React.Dispatch<React.SetStateAction<string>>;
  setPlayer2Mark: React.Dispatch<React.SetStateAction<string>>;
}

function GameTypeBox({
  setGameType,
  mark,
  setMark,
  setPlayer1Mark,
  setPlayer2Mark,
}: Props) {
  return (
    <>
      <div className="fixed w-full h-screen bg-[#1A2A33] z-9"></div>
      <div className="flex fixed w-full h-auto center top-[50%] left-[50%] z-99 flex-col justify-center text-center items-center px-[6.4vw]">
        <img className="mb-[8.53vw]" src="../../images/logo.svg" />
        <div className="bg-[#1F3641] w-full rounded-[4vw] border-[#111e24] border-b-8 p-[6.4vw] mb-[8.53vw]">
          <p className="font-bold text-[4.27vw] mb-[6.4vw] tracking-[0.27vw] text-[#A8BFC9]">
            PICK PLAYER 1'S MARK?
          </p>
          <div className="flex items-center bg-[#1A2A33] rounded-[2.67vw] mb-[4.53vw] px-[2.4vw]">
            <div
              onClick={() => {
                setMark("X");
                setPlayer1Mark("X");
                setPlayer2Mark("O");
              }}
              className={
                mark === "X"
                  ? "bg-[#A8BFC9] rounded-[2.67vw] flex items-center justify-center w-1/2"
                  : "flex items-center py-[2.4vw] justify-center w-1/2"
              }
            >
              <img
                className="w-[8.53vw] my-[2.93vw] h-[8.53vw]"
                src={
                  mark === "X"
                    ? "../../images/icon-x-dark-navy.svg"
                    : "../../images/icon-x-grey.svg"
                }
              />
            </div>
            <div
              onClick={() => {
                setMark("O");
                setPlayer1Mark("O");
                setPlayer2Mark("X");
              }}
              className={
                mark === "O"
                  ? "bg-[#A8BFC9] rounded-[2.67vw] flex items-center justify-center w-1/2"
                  : "flex items-center py-[2.4vw] justify-center w-1/2"
              }
            >
              <img
                className="w-[8.53vw] my-[2.93vw] h-[8.53vw]"
                src={
                  mark === "O"
                    ? "../../images/icon-o-dark-navy.svg"
                    : "../../images/icon-o-grey.svg"
                }
              />
            </div>
          </div>
          <p className="font-regular text-[#A8BFC9] text-[3.73vw] tracking-[0.23vw]">
            REMEMBER: X GOES FIRST
          </p>
        </div>
        <button
          className="w-full h-[14.93vw] bg-[#F2B137] mb-[4.27vw] rounded-[4vw] text-[#1A2A33] font-bold tracking-[0.27vw] border-[#ac7d26] border-b-8"
          onClick={() => {
            setGameType("cpu");
            setMark("X");
          }}
        >
          NEW GAME (VS CPU)
        </button>
        <button
          className="w-full h-[14.93vw] bg-[#31C3BD] rounded-[4vw] text-[#1A2A33] font-bold tracking-[0.27vw] border-[#1e7471] border-b-8"
          onClick={() => {
            setGameType("solo");
            setMark("X");
          }}
        >
          NEW GAME (VS PLAYER)
        </button>
      </div>
    </>
  );
}

export default GameTypeBox;
