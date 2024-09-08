import { useEffect } from "react";
import BoardType from "../types/boardType";

interface Props {
  winner: string;
  SetWinner: React.Dispatch<React.SetStateAction<boolean>>;
  board: BoardType[];
  changeBoard: React.Dispatch<React.SetStateAction<BoardType[]>>;
  setGameType: React.Dispatch<React.SetStateAction<string>>;
  player1Mark: string;
  player2Mark: string;
}

function WinBox({
  winner,
  SetWinner,
  board,
  changeBoard,
  setGameType,
  player1Mark,
  player2Mark,
}: Props) {
  function colorWinningMarks() {
    if (
      board[0].mark === "X" &&
      board[1].mark === "X" &&
      board[2].mark === "X"
    ) {
      changeBoard(
        board.map((prev) => {
          if (prev.id === 0) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 1) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 2) {
            return { ...prev, isHighlighted: true };
          }
          return prev;
        })
      );
    }
    if (
      board[3].mark === "X" &&
      board[4].mark === "X" &&
      board[5].mark === "X"
    ) {
      changeBoard(
        board.map((prev) => {
          if (prev.id === 3) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 4) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 5) {
            return { ...prev, isHighlighted: true };
          }
          return prev;
        })
      );
    }
    if (
      board[6].mark === "X" &&
      board[7].mark === "X" &&
      board[8].mark === "X"
    ) {
      changeBoard(
        board.map((prev) => {
          if (prev.id === 6) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 7) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 8) {
            return { ...prev, isHighlighted: true };
          }
          return prev;
        })
      );
    }
    if (
      board[0].mark === "X" &&
      board[3].mark === "X" &&
      board[6].mark === "X"
    ) {
      changeBoard(
        board.map((prev) => {
          if (prev.id === 0) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 3) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 6) {
            return { ...prev, isHighlighted: true };
          }
          return prev;
        })
      );
    }
    if (
      board[1].mark === "X" &&
      board[4].mark === "X" &&
      board[7].mark === "X"
    ) {
      changeBoard(
        board.map((prev) => {
          if (prev.id === 1) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 4) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 7) {
            return { ...prev, isHighlighted: true };
          }
          return prev;
        })
      );
    }
    if (
      board[2].mark === "X" &&
      board[5].mark === "X" &&
      board[8].mark === "X"
    ) {
      changeBoard(
        board.map((prev) => {
          if (prev.id === 2) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 5) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 8) {
            return { ...prev, isHighlighted: true };
          }
          return prev;
        })
      );
    }
    if (
      board[0].mark === "X" &&
      board[4].mark === "X" &&
      board[8].mark === "X"
    ) {
      changeBoard(
        board.map((prev) => {
          if (prev.id === 0) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 4) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 8) {
            return { ...prev, isHighlighted: true };
          }
          return prev;
        })
      );
    }
    if (
      board[6].mark === "X" &&
      board[4].mark === "X" &&
      board[2].mark === "X"
    ) {
      changeBoard(
        board.map((prev) => {
          if (prev.id === 6) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 4) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 2) {
            return { ...prev, isHighlighted: true };
          }
          return prev;
        })
      );
    }
    if (
      board[0].mark === "O" &&
      board[1].mark === "O" &&
      board[2].mark === "O"
    ) {
      changeBoard(
        board.map((prev) => {
          if (prev.id === 0) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 1) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 2) {
            return { ...prev, isHighlighted: true };
          }
          return prev;
        })
      );
    }
    if (
      board[3].mark === "O" &&
      board[4].mark === "O" &&
      board[5].mark === "O"
    ) {
      changeBoard(
        board.map((prev) => {
          if (prev.id === 3) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 4) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 5) {
            return { ...prev, isHighlighted: true };
          }
          return prev;
        })
      );
    }
    if (
      board[6].mark === "O" &&
      board[7].mark === "O" &&
      board[8].mark === "O"
    ) {
      changeBoard(
        board.map((prev) => {
          if (prev.id === 6) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 7) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 8) {
            return { ...prev, isHighlighted: true };
          }
          return prev;
        })
      );
    }
    if (
      board[0].mark === "O" &&
      board[3].mark === "O" &&
      board[6].mark === "O"
    ) {
      changeBoard(
        board.map((prev) => {
          if (prev.id === 0) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 3) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 6) {
            return { ...prev, isHighlighted: true };
          }
          return prev;
        })
      );
    }
    if (
      board[1].mark === "O" &&
      board[4].mark === "O" &&
      board[7].mark === "O"
    ) {
      changeBoard(
        board.map((prev) => {
          if (prev.id === 1) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 4) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 7) {
            return { ...prev, isHighlighted: true };
          }
          return prev;
        })
      );
    }
    if (
      board[2].mark === "O" &&
      board[5].mark === "O" &&
      board[8].mark === "O"
    ) {
      changeBoard(
        board.map((prev) => {
          if (prev.id === 2) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 5) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 8) {
            return { ...prev, isHighlighted: true };
          }
          return prev;
        })
      );
    }
    if (
      board[0].mark === "O" &&
      board[4].mark === "O" &&
      board[8].mark === "O"
    ) {
      changeBoard(
        board.map((prev) => {
          if (prev.id === 0) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 4) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 8) {
            return { ...prev, isHighlighted: true };
          }
          return prev;
        })
      );
    }
    if (
      board[6].mark === "O" &&
      board[4].mark === "O" &&
      board[2].mark === "O"
    ) {
      changeBoard(
        board.map((prev) => {
          if (prev.id === 6) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 4) {
            return { ...prev, isHighlighted: true };
          }
          if (prev.id === 2) {
            return { ...prev, isHighlighted: true };
          }
          return prev;
        })
      );
    }
  }

  useEffect(() => {
    colorWinningMarks();
  }, [winner]);

  function closeAndReset() {
    SetWinner(false);
    setGameType("");
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
  }

  function close() {
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
  }

  return (
    <>
      <div className="fixed w-full h-screen opacity-80 bg-black z-9" />
      <div className="flex flex-col items-center justify-center fixed w-full h-screen bg-[#1A2A33] z-99 center top-[50%] left-[50%]">
        <p className="text-[#A8BFC9] font-bold text-[3.73vw] tracking-[0.23vw] mt-[10.67vw] mb-[4.27vw]">
          {winner === "Tie"
            ? "ROUND TIED"
            : winner === "X"
            ? player1Mark === "X"
              ? "PLAYER 1 WINS!"
              : "PLAYER 2 WINS!"
            : winner === "O"
            ? player1Mark === "O"
              ? "PLAYER 1 WINS!"
              : "PLAYER 2 WINS!"
            : null}
        </p>
        {winner === "X" ? (
          <div className="flex items-center mb-[6.4vw]">
            <img
              className="w-[8vw] h-[8vw] mr-[2.13vw]"
              src="../../images/icon-x.svg"
            />
            <p className="text-[#F2B137] font-bold text-[6.4vw] tracking-[0.4vw]">
              TAKES THE ROUND
            </p>
          </div>
        ) : null}
        {winner === "O" ? (
          <div className="flex items-center mb-[6.4vw]">
            <img
              className="w-[8vw] h-[8vw] mr-[2.13vw]"
              src="../../images/icon-o.svg"
            />
            <p className="text-[#F2B137] font-bold text-[6.4vw] tracking-[0.4vw]">
              TAKES THE ROUND
            </p>
          </div>
        ) : null}

        <div className="flex flex-wrap justify-center [&_div]:w-[25.5vw] [&_div]:h-[25.5vw] [&_div]:flex [&_div]:items-center [&_div]:justify-center">
          {board.map((item) => {
            return (
              <div
                className={
                  item.isHighlighted === true
                    ? item.mark === "X"
                      ? "bg-[#31C3BD] rounded-[2.67vw] border-[#0b1114] border-b-8 mx-[2.67vw] mb-[5.33vw]"
                      : "bg-[#F2B137] rounded-[2.67vw] border-[#0b1114] border-b-8 mx-[2.67vw] mb-[5.33vw]"
                    : item.mark === "O"
                    ? "bg-[#1F3641] rounded-[2.67vw] border-[#0b1114] border-b-8 mx-[2.67vw] mb-[5.33vw]"
                    : "bg-[#1F3641] rounded-[2.67vw] border-[#0b1114] border-b-8 mx-[2.67vw] mb-[5.33vw]"
                }
                key={String(item.id)}
              >
                {item.isClicked === true ? (
                  <p className="font-bold text-2xl">
                    {item.mark === "X" ? (
                      item.isHighlighted === true ? (
                        <img
                          className="w-[10.67vw]"
                          src="../images/icon-x-dark-navy.svg"
                        />
                      ) : (
                        <img
                          className="w-[10.67vw]"
                          src="../images/icon-x.svg"
                        />
                      )
                    ) : item.isHighlighted === true ? (
                      <img
                        className="w-[10.67vw]"
                        src="../images/icon-o-dark-navy.svg"
                      />
                    ) : (
                      <img className="w-[10.67vw]" src="../images/icon-o.svg" />
                    )}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="flex mb-[12.8vw]">
          <button
            onClick={() => closeAndReset()}
            className="bg-[#A8BFC9] mr-[4.27vw] font-bold text-[4.27vw] tracking-[0.27vw] border-[#78888f] rounded-[2.67vw] border-b-4 w-[20.27vw] h-[13.87vw]"
          >
            QUIT
          </button>
          <button
            onClick={() => close()}
            className="bg-[#F2B137] font-bold text-[4.27vw] tracking-[0.27vw] border-[#a17625] rounded-[2.67vw] border-b-4 w-[38.93vw] h-[13.87vw]"
          >
            NEXT ROUND
          </button>
        </div>
      </div>
    </>
  );
}

export default WinBox;
