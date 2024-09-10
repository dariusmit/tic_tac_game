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
      <div className="flex flex-col items-center justify-center fixed w-full h-screen bg-[#1A2A33] z-99 center top-[50%] left-[50%]">
        <div className="flex items-center mb-[6.4vw] tablet:mb-[4.04vw] desktop:mb-[2.15vw]">
          <p className="text-[#A8BFC9] font-bold text-[6.4vw] tracking-[0.4vw] tablet:text-[3.13vw] tablet:tracking-[0.33vw] desktop:text-[1.67vw] desktop:tracking-[0.17vw]">
            RESTART GAME?
          </p>
        </div>

        <div className="flex mb-[12.8vw]">
          <button
            onClick={() => closeRestartBox()}
            className="bg-[#A8BFC9] mr-[4.27vw] font-bold text-[4.27vw] tracking-[0.27vw] border-[#78888f] rounded-[2.67vw] border-b-4 w-[38.93vw] h-[13.87vw]
            tablet:mr-[2.08vw] tablet:text-[2.08vw] tablet:tracking-[0.13vw] tablet:rounded-[1.3vw] tablet:border-b-[0.52vw] tablet:w-[19.01vw] tablet:h-[6.77vw]
            desktop:mr-[1.11vw] desktop:text-[1.11vw] desktop:tracking-[0.07vw] desktop:rounded-[0.69vw] desktop:border-b-[0.28vw] desktop:w-[10.14vw] desktop:h-[3.61vw]"
          >
            NO, CANCEL
          </button>
          <button
            onClick={() => closeAndReset()}
            className="bg-[#F2B137] font-bold text-[4.27vw] tracking-[0.27vw] border-[#a17625] rounded-[2.67vw] border-b-4 w-[38.93vw] h-[13.87vw]
            tablet:mr-[2.08vw] tablet:text-[2.08vw] tablet:tracking-[0.13vw] tablet:rounded-[1.3vw] tablet:border-b-[0.52vw] tablet:w-[19.01vw] tablet:h-[6.77vw]
            desktop:mr-[1.11vw] desktop:text-[1.11vw] desktop:tracking-[0.07vw] desktop:rounded-[0.69vw] desktop:border-b-[0.28vw] desktop:w-[10.14vw] desktop:h-[3.61vw]"
          >
            YES, RESTART
          </button>
        </div>
      </div>
    </>
  );
}

export default RestartBox;
