import BoardType from "../types/boardType";

interface Props {
  SetWinner: React.Dispatch<React.SetStateAction<boolean>>;
  board: BoardType[];
  changeBoard: React.Dispatch<React.SetStateAction<BoardType[]>>;
  setMark: React.Dispatch<React.SetStateAction<string>>;
  OpenRestartModel: React.Dispatch<React.SetStateAction<boolean>>;
}

function RestartBox({
  SetWinner,
  board,
  changeBoard,
  setMark,
  OpenRestartModel,
}: Props) {
  function closeRestartBox() {
    OpenRestartModel(false);
  }

  function closeAndReset() {
    SetWinner(false);
    changeBoard(
      board.map((prev) => {
        return {
          ...prev,
          mark: "",
          isClicked: false,
          isHighlighted: false,
        };
      })
    );
    setMark("X");
    OpenRestartModel(false);
  }

  return (
    <>
      <div className="fixed w-full h-screen opacity-80 bg-black z-9" />
      <div className="flex flex-col items-center justify-center fixed w-full h-screen bg-[#1A2A33] z-99 center top-[50%] left-[50%]">
        <div className="flex items-center mb-[6.4vw]">
          <p className="text-[#A8BFC9] font-bold text-[6.4vw] tracking-[0.4vw]">
            RESTART GAME?
          </p>
        </div>

        <div className="flex mb-[12.8vw]">
          <button
            onClick={() => closeRestartBox()}
            className="bg-[#A8BFC9] mr-[4.27vw] font-bold text-[4.27vw] tracking-[0.27vw] border-[#78888f] rounded-[2.67vw] border-b-4 w-[38.93vw] h-[13.87vw]"
          >
            NO, CANCEL
          </button>
          <button
            onClick={() => closeAndReset()}
            className="bg-[#F2B137] font-bold text-[4.27vw] tracking-[0.27vw] border-[#a17625] rounded-[2.67vw] border-b-4 w-[38.93vw] h-[13.87vw]"
          >
            YES, RESTART
          </button>
        </div>
      </div>
    </>
  );
}

export default RestartBox;
