import { useEffect } from "react";
import BoardType from "../types/boardType";

interface Props {
  winner: string;
  SetWinner: React.Dispatch<React.SetStateAction<boolean>>;
  board: BoardType[];
  changeBoard: React.Dispatch<React.SetStateAction<BoardType[]>>;
}

function WinBox({ winner, SetWinner, board, changeBoard }: Props) {
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
        onClick={() => closeAndReset()}
        className="fixed w-full h-screen opacity-80 bg-black z-9"
      />
      <div
        onClick={() => closeAndReset()}
        className="flex flex-col items-center justify-center fixed w-[304px] h-auto bg-white z-99 center top-[50%] left-[50%]"
      >
        <p className="text-red-500">
          {winner === "Tie" ? "It's a Draw" : winner + " won"}
        </p>
        <div className="flex border-2 flex-wrap [&_div]:w-[100px] [&_div]:border-2 [&_div]:h-[100px] [&_div]:flex [&_div]:items-center [&_div]:justify-center">
          {board.map((item) => {
            return (
              <div key={String(item.id)}>
                {item.isClicked === true ? (
                  <p
                    className={
                      item.isHighlighted === true ? "text-red-500" : ""
                    }
                  >
                    {item.mark}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default WinBox;
