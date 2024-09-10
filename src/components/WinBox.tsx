import { useEffect } from "react";
import BoardType from "../types/boardType";

interface Props {
  winner: string;
  SetWinner: React.Dispatch<React.SetStateAction<boolean>>;
  board: BoardType[];
  changeBoard: React.Dispatch<React.SetStateAction<BoardType[]>>;
  setGameType: React.Dispatch<React.SetStateAction<string>>;
  player1Mark: string;
  setXCounter: React.Dispatch<React.SetStateAction<number>>;
  setOCounter: React.Dispatch<React.SetStateAction<number>>;
  setTieCounter: React.Dispatch<React.SetStateAction<number>>;
  gameType: string;
}

function WinBox({
  winner,
  SetWinner,
  board,
  changeBoard,
  setGameType,
  player1Mark,
  setXCounter,
  setOCounter,
  setTieCounter,
  gameType,
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
    setXCounter(0);
    setOCounter(0);
    setTieCounter(0);
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
      <div
        className="flex flex-col items-center justify-center fixed w-full h-screen bg-[#1A2A33] z-99 center top-[50%] left-[50%]
      tablet:px-[19.75vw] desktop:px-[34.03vw]"
      >
        <p
          className="text-[#A8BFC9] font-bold text-[3.73vw] tracking-[0.23vw] mt-[10.67vw] mb-[4.27vw]
        tablet:text-[2.08vw] tablet:tracking-[0.13vw] tablet:mt-[5.86vw] tablet:mb-[2.08vw]
        desktop:text-[1.11vw] desktop:tracking-[0.07vw] desktop:mt-[3.13vw] desktop:mb-[1.11vw]"
        >
          {winner === "Tie"
            ? "ROUND TIED"
            : winner === "X" && gameType === "multiplayer"
            ? player1Mark === "X"
              ? "PLAYER 1 WINS!"
              : "PLAYER 2 WINS!"
            : winner === "O" && gameType === "multiplayer"
            ? player1Mark === "O"
              ? "PLAYER 1 WINS!"
              : "PLAYER 2 WINS!"
            : winner === "X" && gameType === "cpu"
            ? player1Mark === "X"
              ? "YOU WON!"
              : "OH NO, YOU LOST..."
            : winner === "O" && gameType === "cpu"
            ? player1Mark === "O"
              ? "YOU WON!"
              : "OH NO, YOU LOST..."
            : null}
        </p>
        {winner === "X" ? (
          <div className="flex items-center mb-[6.4vw] tablet:mb-[3.13vw] tablet:mx-[1.3vw] desktop:mb-[1.67vw] desktop:mx-[0.69vw]">
            <img
              className="w-[8vw] h-[8vw] mr-[2.13vw] tablet:w-[4.33vw] tablet:h-[4.33vw] tablet:mr-[3.13vw] desktop:w-[3.44vw] desktop:h-[3.44vw] desktop:mr-[1.67vw]"
              src="../../images/icon-x.svg"
            />
            <p className="text-[#F2B137] font-bold text-[6.4vw] tracking-[0.4vw] tablet:text-[3.13vw] tablet:tracking-[0.33vw] desktop:text-[1.67vw] desktop:tracking-[0.17vw]">
              TAKES THE ROUND
            </p>
          </div>
        ) : null}
        {winner === "O" ? (
          <div className="flex items-center mb-[6.4vw] tablet:mb-[3.13vw] tablet:mx-[1.3vw] desktop:mb-[1.67vw] desktop:mx-[0.69vw]">
            <img
              className="w-[8vw] h-[8vw] mr-[2.13vw] tablet:w-[4.33vw] tablet:h-[4.33vw] tablet:mr-[3.13vw] desktop:w-[3.44vw] desktop:h-[3.44vw] desktop:mr-[1.67vw]"
              src="../../images/icon-o.svg"
            />
            <p className="text-[#F2B137] font-bold text-[6.4vw] tracking-[0.4vw] tablet:text-[3.13vw] tablet:tracking-[0.33vw] desktop:text-[1.67vw] desktop:tracking-[0.17vw]">
              TAKES THE ROUND
            </p>
          </div>
        ) : null}

        <div
          className="flex flex-wrap justify-center [&_div]:w-[25.5vw] [&_div]:h-[25.5vw] [&_div]:flex [&_div]:items-center [&_div]:justify-center
        tablet:[&_div]:w-[16.35vw] tablet:[&_div]:h-[16.35vw]
        desktop:[&_div]:w-[9vw] desktop:[&_div]:h-[9vw]"
        >
          {board.map((item) => {
            return (
              <div
                className={
                  item.isHighlighted === true
                    ? item.mark === "X"
                      ? "bg-[#31C3BD] rounded-[2.67vw] border-[#0b1114] border-b-8 mx-[2.67vw] mb-[5.33vw] tablet:rounded-[1.95vw] tablet:border-b-[1.04vw] tablet:mx-[1.3vw] tablet:mb-[2.6vw] desktop:rounded-[1.04vw] desktop:border-b-[0.56vw] desktop:mx-[0.69vw] desktop:mb-[1.39vw]"
                      : "bg-[#F2B137] rounded-[2.67vw] border-[#0b1114] border-b-8 mx-[2.67vw] mb-[5.33vw] tablet:rounded-[1.95vw] tablet:border-b-[1.04vw] tablet:mx-[1.3vw] tablet:mb-[2.6vw] desktop:rounded-[1.04vw] desktop:border-b-[0.56vw] desktop:mx-[0.69vw] desktop:mb-[1.39vw]"
                    : item.mark === "O"
                    ? "bg-[#1F3641] rounded-[2.67vw] border-[#0b1114] border-b-8 mx-[2.67vw] mb-[5.33vw] tablet:rounded-[1.95vw] tablet:border-b-[1.04vw] tablet:mx-[1.3vw] tablet:mb-[2.6vw] desktop:rounded-[1.04vw] desktop:border-b-[0.56vw] desktop:mx-[0.69vw] desktop:mb-[1.39vw]"
                    : "bg-[#1F3641] rounded-[2.67vw] border-[#0b1114] border-b-8 mx-[2.67vw] mb-[5.33vw] tablet:rounded-[1.95vw] tablet:border-b-[1.04vw] tablet:mx-[1.3vw] tablet:mb-[2.6vw] desktop:rounded-[1.04vw] desktop:border-b-[0.56vw] desktop:mx-[0.69vw] desktop:mb-[1.39vw]"
                }
                key={String(item.id)}
              >
                {item.isClicked === true ? (
                  <p className="font-bold text-2xl">
                    {item.mark === "X" ? (
                      item.isHighlighted === true ? (
                        <img
                          className="w-[10.67vw] tablet:w-[8.33vw] desktop:w-[4.44vw]"
                          src="../images/icon-x-dark-navy.svg"
                        />
                      ) : (
                        <img
                          className="w-[10.67vw] tablet:w-[8.33vw] desktop:w-[4.44vw]"
                          src="../images/icon-x.svg"
                        />
                      )
                    ) : item.isHighlighted === true ? (
                      <img
                        className="w-[10.67vw] tablet:w-[8.33vw] desktop:w-[4.44vw]"
                        src="../images/icon-o-dark-navy.svg"
                      />
                    ) : (
                      <img
                        className="w-[10.67vw] tablet:w-[8.33vw] desktop:w-[4.44vw]"
                        src="../images/icon-o.svg"
                      />
                    )}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="flex mb-[12.8vw] tablet:mb-0">
          <button
            onClick={() => closeAndReset()}
            className="bg-[#A8BFC9] mr-[4.27vw] font-bold text-[4.27vw] tracking-[0.27vw] border-[#78888f] rounded-[2.67vw] border-b-4 w-[20.27vw] h-[13.87vw]
            tablet:mr-[2.08vw] tablet:text-[2.08vw] tablet:tracking-[0.13vw] tablet:rounded-[1.3vw] tablet:border-b-[0.52vw] tablet:w-[9.89vw] tablet:h-[6.77vw]
            desktop:mr-[1.11vw] desktop:text-[1.11vw] desktop:tracking-[0.07vw] desktop:rounded-[0.69vw] desktop:border-b-[0.28vw] desktop:w-[5.28vw] desktop:h-[3.61vw]"
          >
            QUIT
          </button>
          <button
            onClick={() => close()}
            className="bg-[#F2B137] font-bold text-[4.27vw] tracking-[0.27vw] border-[#a17625] rounded-[2.67vw] border-b-4 w-[38.93vw] h-[13.87vw]
            tablet:mr-[2.08vw] tablet:text-[2.08vw] tablet:tracking-[0.13vw] tablet:rounded-[1.3vw] tablet:border-b-[0.52vw] tablet:w-[19.01vw] tablet:h-[6.77vw]
            desktop:mr-[1.11vw] desktop:text-[1.11vw] desktop:tracking-[0.07vw] desktop:rounded-[0.69vw] desktop:border-b-[0.28vw] desktop:w-[10.14vw] desktop:h-[3.61vw]"
          >
            NEXT ROUND
          </button>
        </div>
      </div>
    </>
  );
}

export default WinBox;
