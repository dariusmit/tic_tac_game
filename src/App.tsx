import { useEffect, useState } from "react";
import WinBox from "./components/WinBox";
import BoardType from "./types/boardType";

let PlayerClickID = 0;
let winningMark = "";

function App() {
  let data: BoardType[] = [];
  let [mark, setMark] = useState("X");

  const savedBoardData: BoardType[] = JSON.parse(
    localStorage.getItem("board data") || "[]"
  );

  function initialData() {
    for (let i = 0; i < 9; i++) {
      data.push({ id: i, mark: "", isClicked: false, isHighlighted: false });
    }
    return data;
  }

  let [board, changeBoard] = useState(() => {
    return savedBoardData.length > 0 ? savedBoardData : initialData();
  });

  const savedXCounter = String(localStorage.getItem("x win count") || "");
  const savedOCounter = String(localStorage.getItem("o win count") || "");
  const savedTieCounter = String(localStorage.getItem("tie win count") || "");

  let [xCounter, setXCounter] = useState(() => {
    return Number(savedXCounter) > 0 ? Number(savedXCounter) : 0;
  });
  let [oCounter, setOCounter] = useState(() => {
    return Number(savedOCounter) > 0 ? Number(savedOCounter) : 0;
  });
  let [tieCounter, setTieCounter] = useState(() => {
    return Number(savedTieCounter) > 0 ? Number(savedTieCounter) : 0;
  });
  let [winner, SetWinner] = useState(false);

  useEffect(() => {
    console.log("x win count changed");
    localStorage.setItem("x win count", String(xCounter));
  }, [xCounter]);

  useEffect(() => {
    console.log("o win count changed");
    localStorage.setItem("o win count", String(oCounter));
  }, [oCounter]);

  useEffect(() => {
    console.log("tie win count changed");
    localStorage.setItem("tie win count", String(tieCounter));
  }, [tieCounter]);

  //Winning Logic
  useEffect(() => {
    updateEmptyCellsObject(board.filter((prev) => prev.isClicked === false));
    console.log("board data changed");
    localStorage.setItem("board data", JSON.stringify(board));
    //X winning logic
    if (
      board[0].mark === "X" &&
      board[1].mark === "X" &&
      board[2].mark === "X"
    ) {
      console.log("X won! Game starts again.");
      setMark("X");
      setXCounter((prev) => Number(prev) + 1);
      winningMark = "X";
      SetWinner(true);
    } else if (
      board[3].mark === "X" &&
      board[4].mark === "X" &&
      board[5].mark === "X"
    ) {
      console.log("X won! Game starts again.");
      setMark("X");
      setXCounter((prev) => Number(prev) + 1);
      winningMark = "X";
      SetWinner(true);
    } else if (
      board[6].mark === "X" &&
      board[7].mark === "X" &&
      board[8].mark === "X"
    ) {
      console.log("X won! Game starts again.");
      setMark("X");
      setXCounter((prev) => Number(prev) + 1);
      winningMark = "X";
      SetWinner(true);
    } else if (
      board[0].mark === "X" &&
      board[3].mark === "X" &&
      board[6].mark === "X"
    ) {
      console.log("X won! Game starts again.");
      setMark("X");
      setXCounter((prev) => Number(prev) + 1);
      winningMark = "X";
      SetWinner(true);
    } else if (
      board[1].mark === "X" &&
      board[4].mark === "X" &&
      board[7].mark === "X"
    ) {
      console.log("X won! Game starts again.");
      setMark("X");
      setXCounter((prev) => Number(prev) + 1);
      winningMark = "X";
      SetWinner(true);
    } else if (
      board[2].mark === "X" &&
      board[5].mark === "X" &&
      board[8].mark === "X"
    ) {
      console.log("X won! Game starts again.");
      setMark("X");
      setXCounter((prev) => Number(prev) + 1);
      winningMark = "X";
      SetWinner(true);
    } else if (
      board[0].mark === "X" &&
      board[4].mark === "X" &&
      board[8].mark === "X"
    ) {
      console.log("X won! Game starts again.");
      setMark("X");
      setXCounter((prev) => Number(prev) + 1);
      winningMark = "X";
      SetWinner(true);
    } else if (
      board[6].mark === "X" &&
      board[4].mark === "X" &&
      board[2].mark === "X"
    ) {
      console.log("X won! Game starts again.");
      setMark("X");
      setXCounter((prev) => Number(prev) + 1);
      winningMark = "X";
      SetWinner(true);
    }
    //O winning logic
    if (
      board[0].mark === "O" &&
      board[1].mark === "O" &&
      board[2].mark === "O"
    ) {
      console.log("O won! Game starts again.");
      setMark("X");
      setOCounter((prev) => Number(prev) + 1);
      winningMark = "O";
      SetWinner(true);
    } else if (
      board[3].mark === "O" &&
      board[4].mark === "O" &&
      board[5].mark === "O"
    ) {
      console.log("O won! Game starts again.");
      setMark("X");
      setOCounter((prev) => Number(prev) + 1);
      winningMark = "O";
      SetWinner(true);
    } else if (
      board[6].mark === "O" &&
      board[7].mark === "O" &&
      board[8].mark === "O"
    ) {
      console.log("O won! Game starts again.");
      setMark("X");
      setOCounter((prev) => Number(prev) + 1);
      winningMark = "O";
      SetWinner(true);
    } else if (
      board[0].mark === "O" &&
      board[3].mark === "O" &&
      board[6].mark === "O"
    ) {
      console.log("O won! Game starts again.");
      setMark("X");
      setOCounter((prev) => Number(prev) + 1);
      winningMark = "O";
      SetWinner(true);
    } else if (
      board[1].mark === "O" &&
      board[4].mark === "O" &&
      board[7].mark === "O"
    ) {
      console.log("O won! Game starts again.");
      setMark("X");
      setOCounter((prev) => Number(prev) + 1);
      winningMark = "O";
      SetWinner(true);
    } else if (
      board[2].mark === "O" &&
      board[5].mark === "O" &&
      board[8].mark === "O"
    ) {
      console.log("O won! Game starts again.");
      setMark("X");
      setOCounter((prev) => Number(prev) + 1);
      winningMark = "O";
      SetWinner(true);
    } else if (
      board[0].mark === "O" &&
      board[4].mark === "O" &&
      board[8].mark === "O"
    ) {
      console.log("O won! Game starts again.");
      setMark("X");
      setOCounter((prev) => Number(prev) + 1);
      winningMark = "O";
      SetWinner(true);
    } else if (
      board[6].mark === "O" &&
      board[4].mark === "O" &&
      board[2].mark === "O"
    ) {
      console.log("O won! Game starts again.");
      setMark("X");
      setOCounter((prev) => Number(prev) + 1);
      winningMark = "O";
      SetWinner(true);
    } else {
      //A draw case. If no winners emerged.
      if (
        board[0].isClicked === true &&
        board[1].isClicked === true &&
        board[2].isClicked === true &&
        board[3].isClicked === true &&
        board[4].isClicked === true &&
        board[5].isClicked === true &&
        board[6].isClicked === true &&
        board[7].isClicked === true &&
        board[8].isClicked === true
      ) {
        console.log("A Tie! Game starts again.");
        setMark("X");
        setTieCounter((prev) => Number(prev) + 1);
        winningMark = "Tie";
        SetWinner(true);
      }
    }
  }, [board]);

  const savedGameType = localStorage.getItem("game type") || "";

  let [gameType, setGameType] = useState(() => {
    return savedGameType === "" ? "solo" : savedGameType;
  });

  useEffect(() => {
    localStorage.setItem("game type", gameType);
  }, [gameType]);

  let [playerMove, registerPlayerMove] = useState(0);
  let [cpuMoveCount, increaseCpuMoveCount] = useState(0);

  let randomNumber = 0;

  function getPlayerClickID(id: number) {
    PlayerClickID = id;
  }

  function handleClick(id: number) {
    if (gameType === "solo") {
      changeBoard(
        board.map((prev) => {
          if (prev.id === id) {
            if (prev.isClicked === false) {
              if (mark === "X") {
                setMark("O");
                return { ...prev, mark: mark, isClicked: true };
              }
              if (mark === "O") {
                setMark("X");
                return { ...prev, mark: mark, isClicked: true };
              }
            }
            return prev;
          }
          return prev;
        })
      );
      //Player move on click when versus CPU is selected
    } else if (gameType === "cpu") {
      if (mark === "X") {
        getPlayerClickID(id);
        if (cpuMoveCount === 0) {
          changeBoard(
            board.map((prev) => {
              console.log("Player clicked at id of " + id);
              if (prev.id === id && prev.isClicked === false) {
                registerPlayerMove((prev) => (prev += 1));
                setMark("O");
                return { ...prev, mark: "X", isClicked: true };
              }
              return prev;
            })
          );
        }
        if (cpuMoveCount > 0) {
          changeBoard(
            board.map((prev) => {
              console.log("Player clicked at id of " + id);
              if (prev.id === id && prev.isClicked === false) {
                registerPlayerMove((prev) => (prev += 1));
                setMark("O");
                return { ...prev, mark: "X", isClicked: true };
              }
              return prev;
            })
          );
        }
      } else if (mark === "O") {
        getPlayerClickID(id);
        if (cpuMoveCount === 0) {
          changeBoard(
            board.map((prev) => {
              console.log("Player clicked at id of " + id);
              if (prev.id === id && prev.isClicked === false) {
                registerPlayerMove((prev) => (prev += 1));
                setMark("O");
                return { ...prev, mark: "X", isClicked: true };
              }
              return prev;
            })
          );
        }
        if (cpuMoveCount > 0) {
          changeBoard(
            board.map((prev) => {
              console.log("Player clicked at id of " + id);
              if (prev.id === id && prev.isClicked === false) {
                registerPlayerMove((prev) => (prev += 1));
                setMark("O");
                return { ...prev, mark: "X", isClicked: true };
              }
              return prev;
            })
          );
        }
      }
    }
  }

  let [emptyCellsArray, updateEmptyCellsObject] = useState<BoardType[]>([]);
  let randomNumbersArray: number[] = [];

  /*
  useEffect(() => {
    updateEmptyCellsObject(board.filter((prev) => prev.isClicked === false));
  }, [board]);
  */

  function GetRandomIndex() {
    for (let i = 0; i < emptyCellsArray.length; i++) {
      randomNumbersArray.push(emptyCellsArray[i].id);
    }
    randomNumbersArray = randomNumbersArray.filter((item) => {
      return item !== PlayerClickID;
    });
    return randomNumbersArray;
  }

  function getRandomNumber() {
    GetRandomIndex();
    return randomNumbersArray[
      Math.floor(Math.random() * randomNumbersArray.length)
    ];
  }

  //CPU move logic to listen for player move and respond
  useEffect(() => {
    randomNumber = getRandomNumber();
    if (gameType === "cpu") {
      if (mark === "O") {
        console.log("Player move registered");
        console.log("CPU is thinking");

        changeBoard(
          board.map((prev) => {
            console.log(
              "prev.id " + prev.id + " Random number " + randomNumber
            );
            if (prev.id === randomNumber) {
              console.log("CPU responded");
              setMark("X");
              return {
                ...prev,
                mark: "O",
                isClicked: true,
              };
            }
            return prev;
          })
        );

        increaseCpuMoveCount((prev) => (prev += 1));
      } else if (mark === "X") {
        console.log("Player move registered");
        console.log("CPU is thinking");

        changeBoard(
          board.map((prev) => {
            console.log(
              "prev.id " + prev.id + " Random number " + randomNumber
            );
            if (prev.id === randomNumber) {
              console.log("CPU responded");
              setMark("O");
              return {
                ...prev,
                mark: "X",
                isClicked: true,
              };
            }
            return prev;
          })
        );

        increaseCpuMoveCount((prev) => (prev += 1));
      }
    }
  }, [playerMove]);

  let [radioStatus, setRadioStatus] = useState(true);

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="w-[604px] h-auto mx-auto my-auto">
        <div className="pb-4">
          <p>How you want to play?</p>
          <div className="flex items-center">
            <p className="pr-2">Solo</p>
            <input
              className="mt-[2.5px]"
              type="radio"
              onChange={(e) => setGameType(e.target.value)}
              name="game_type"
              id="solo"
              value="solo"
              checked={radioStatus}
              onClick={() => setRadioStatus(true)}
            />
          </div>
          <div className="flex items-center">
            <p className="pr-2">VS computer</p>
            <input
              className="mt-[2.5px]"
              type="radio"
              onChange={(e) => setGameType(e.target.value)}
              name="game_type"
              id="cpu"
              value="cpu"
              onClick={() => setRadioStatus(false)}
            />
          </div>
        </div>
        <div className="flex items-center justify-between [&_div]:pb-4">
          <div>
            <p>XO game</p>
          </div>
          <div>
            <p>{mark} Turn</p>
          </div>
          <div>
            <button
              onClick={() => {
                changeBoard(
                  board.map((prev) => {
                    return { ...prev, mark: "", isClicked: false };
                  })
                );
                setMark("X");
                setXCounter(0);
                setOCounter(0);
                setTieCounter(0);
              }}
            >
              Reset Values
            </button>
          </div>
        </div>
        <div
          className="flex border-2 flex-wrap [&_div]:w-[200px]
    [&_div]:border-2 [&_div]:h-[200px] [&_div]:flex [&_div]:items-center [&_div]:justify-center"
        >
          {board.map((item) => {
            return (
              <div onClick={() => handleClick(item.id)} key={String(item.id)}>
                {item.isClicked === true ? (
                  <p className="font-bold text-2xl">{item.mark}</p>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between text-center [&_div]:pt-4">
          <div>
            <p>X(YOU)</p>
            <p>{xCounter}</p>
          </div>
          <div>
            <p>TIES</p>
            <p>{tieCounter}</p>
          </div>
          <div>
            <p>O(CPU)</p>
            <p>{oCounter}</p>
          </div>
        </div>
      </div>
      {winner ? (
        <WinBox
          winner={winningMark}
          SetWinner={SetWinner}
          board={board}
          changeBoard={changeBoard}
        />
      ) : null}
    </div>
  );
}

export default App;
