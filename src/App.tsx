import { useEffect, useState } from "react";
import WinBox from "./components/WinBox";
import BoardType from "./types/boardType";
import NewGameBox from "./components/NewGameBox";
import RestartBox from "./components/RestartBox";

let PlayerClickID = 0;

function App() {
  let data: BoardType[] = [];

  const savedWinningMark = localStorage.getItem("winning mark") || "";

  let [winningMark, setWinningMark] = useState(() => {
    return savedWinningMark;
  });

  useEffect(() => {
    localStorage.setItem("winning mark", winningMark);
  }, [winningMark]);

  const savedMark = localStorage.getItem("mark") || "";

  let [mark, setMark] = useState(() => {
    return savedMark === "" ? "" : savedMark;
  });

  const savedPlayer1Mark = localStorage.getItem("player 1 mark") || "";
  const savedPlayer2Mark = localStorage.getItem("player 2 mark") || "";

  let [player1Mark, setPlayer1Mark] = useState(() => {
    return savedPlayer1Mark === "" ? "" : savedPlayer1Mark;
  });
  let [player2Mark, setPlayer2Mark] = useState(() => {
    return savedPlayer2Mark === "" ? "" : savedPlayer2Mark;
  });

  useEffect(() => {
    localStorage.setItem("mark", mark);
  }, [mark]);

  useEffect(() => {
    localStorage.setItem("player 1 mark", player1Mark);
  }, [player1Mark]);

  useEffect(() => {
    localStorage.setItem("player 2 mark", player2Mark);
  }, [player2Mark]);

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

  const savedWinnerState = JSON.parse(
    localStorage.getItem("winner modal") || "false"
  );

  let [winner, SetWinner] = useState(() => {
    return savedWinnerState;
  });

  useEffect(() => {
    localStorage.setItem("winner modal", String(winner));
  }, [winner]);

  useEffect(() => {
    localStorage.setItem("x win count", String(xCounter));
  }, [xCounter]);

  useEffect(() => {
    localStorage.setItem("o win count", String(oCounter));
  }, [oCounter]);

  useEffect(() => {
    localStorage.setItem("tie win count", String(tieCounter));
  }, [tieCounter]);

  //Winning Logic
  useEffect(() => {
    updateEmptyCellsObject(board.filter((prev) => prev.isClicked === false));
    localStorage.setItem("board data", JSON.stringify(board));
    if (
      board[0].mark === "X" &&
      board[1].mark === "X" &&
      board[2].mark === "X"
    ) {
      if (winner === false) {
        setXCounter((prev) => prev + 1);
        setWinningMark("X");
        SetWinner(true);
      }
    } else if (
      board[3].mark === "X" &&
      board[4].mark === "X" &&
      board[5].mark === "X"
    ) {
      if (winner === false) {
        setXCounter((prev) => prev + 1);
        setWinningMark("X");
        SetWinner(true);
      }
    } else if (
      board[6].mark === "X" &&
      board[7].mark === "X" &&
      board[8].mark === "X"
    ) {
      if (winner === false) {
        setXCounter((prev) => prev + 1);
        setWinningMark("X");
        SetWinner(true);
      }
    } else if (
      board[0].mark === "X" &&
      board[3].mark === "X" &&
      board[6].mark === "X"
    ) {
      if (winner === false) {
        setXCounter((prev) => prev + 1);
        setWinningMark("X");
        SetWinner(true);
      }
    } else if (
      board[1].mark === "X" &&
      board[4].mark === "X" &&
      board[7].mark === "X"
    ) {
      if (winner === false) {
        setXCounter((prev) => prev + 1);
        setWinningMark("X");
        SetWinner(true);
      }
    } else if (
      board[2].mark === "X" &&
      board[5].mark === "X" &&
      board[8].mark === "X"
    ) {
      if (winner === false) {
        setXCounter((prev) => prev + 1);
        setWinningMark("X");
        SetWinner(true);
      }
    } else if (
      board[0].mark === "X" &&
      board[4].mark === "X" &&
      board[8].mark === "X"
    ) {
      if (winner === false) {
        setXCounter((prev) => prev + 1);
        setWinningMark("X");
        SetWinner(true);
      }
    } else if (
      board[6].mark === "X" &&
      board[4].mark === "X" &&
      board[2].mark === "X"
    ) {
      if (winner === false) {
        setXCounter((prev) => prev + 1);
        setWinningMark("X");
        SetWinner(true);
      }
    } else if (
      board[0].mark === "O" &&
      board[1].mark === "O" &&
      board[2].mark === "O"
    ) {
      if (winner === false) {
        setOCounter((prev) => prev + 1);
        setWinningMark("O");
        SetWinner(true);
      }
    } else if (
      board[3].mark === "O" &&
      board[4].mark === "O" &&
      board[5].mark === "O"
    ) {
      if (winner === false) {
        setOCounter((prev) => prev + 1);
        setWinningMark("O");
        SetWinner(true);
      }
    } else if (
      board[6].mark === "O" &&
      board[7].mark === "O" &&
      board[8].mark === "O"
    ) {
      if (winner === false) {
        setOCounter((prev) => prev + 1);
        setWinningMark("O");
        SetWinner(true);
      }
    } else if (
      board[0].mark === "O" &&
      board[3].mark === "O" &&
      board[6].mark === "O"
    ) {
      if (winner === false) {
        setOCounter((prev) => prev + 1);
        setWinningMark("O");
        SetWinner(true);
      }
    } else if (
      board[1].mark === "O" &&
      board[4].mark === "O" &&
      board[7].mark === "O"
    ) {
      if (winner === false) {
        setOCounter((prev) => prev + 1);
        setWinningMark("O");
        SetWinner(true);
      }
    } else if (
      board[2].mark === "O" &&
      board[5].mark === "O" &&
      board[8].mark === "O"
    ) {
      if (winner === false) {
        setOCounter((prev) => prev + 1);
        setWinningMark("O");
        SetWinner(true);
      }
    } else if (
      board[0].mark === "O" &&
      board[4].mark === "O" &&
      board[8].mark === "O"
    ) {
      if (winner === false) {
        setOCounter((prev) => prev + 1);
        setWinningMark("O");
        SetWinner(true);
      }
    } else if (
      board[6].mark === "O" &&
      board[4].mark === "O" &&
      board[2].mark === "O"
    ) {
      if (winner === false) {
        setOCounter((prev) => prev + 1);
        setWinningMark("O");
        SetWinner(true);
      }
    } else if (
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
      if (winner === false) {
        setTieCounter((prev) => prev + 1);
        setWinningMark("Tie");
        SetWinner(true);
      }
    }
  }, [board]);

  const savedGameType = localStorage.getItem("game type") || "";

  let [gameType, setGameType] = useState(() => {
    return savedGameType === "" ? "" : savedGameType;
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
    if (gameType === "multiplayer") {
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
        changeBoard(
          board.map((prev) => {
            if (prev.id === randomNumber) {
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
        changeBoard(
          board.map((prev) => {
            if (prev.id === randomNumber) {
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

  const savedRestartModalState = JSON.parse(
    localStorage.getItem("restart modal") || "false"
  );

  let [restartModal, OpenRestartModel] = useState(() => {
    return savedRestartModalState;
  });

  useEffect(() => {
    localStorage.setItem("restart modal", String(restartModal));
  }, [restartModal]);

  return (
    <div className="flex flex-col w-full h-screen p-[3.73vw] tablet:px-[18.75vw] tablet:py-[5vw] desktop:px-[34.03vw] desktop:py-[2.5vw]">
      <div className="w-full h-screen mx-auto tablet:mx-0 tablet:w-[59.9vw] desktop:w-[31.94vw]">
        {gameType === "" ? (
          <NewGameBox
            setGameType={setGameType}
            mark={mark}
            setMark={setMark}
            setPlayer1Mark={setPlayer1Mark}
            setPlayer2Mark={setPlayer2Mark}
          />
        ) : null}
        <div
          className="flex items-center justify-between px-[2.67vw] pb-[17.07vw] pt-[6.4vw] tablet:px-[1.3vw] tablet:pb-[2.47vw] tablet:pt-0
        desktop:px-[0.69vw] desktop:pb-[1.39vw]"
        >
          <div>
            <img src="../images/logo.svg" />
          </div>
          {mark === "X" ? (
            <div
              className="flex z-[-99] absolute center top-[16vw] left-[50%] items-center justify-center border-[#0b1114] border-b-4 rounded-[1.33vw] w-[24.3vw] h-[10.67vw] bg-[#1F3641]
            tablet:ml-[-2.5vw] tablet:border-b-[0.52vw] tablet:rounded-[1.3vw] tablet:w-[17.23vw] tablet:h-[6.77vw] tablet:top-[8.8vw] tablet:left-[51.2vw]
            desktop:ml-[-1.5vw] desktop:border-b-[0.28vw] desktop:rounded-[0.69vw] desktop:w-[9.26vw] desktop:h-[3.61vw] desktop:top-[4.37vw] desktop:left-[51.5vw]"
            >
              <img
                className="w-[4.27vw] h-[4.27vw] mr-[2.4vw] tablet:w-[2.6vw] tablet:h-[2.6vw] tablet:mr-[1.69vw] desktop:w-[1.39vw] desktop:h-[1.39vw] desktop:mr-[0.9vw]"
                src="../images/icon-x-grey.svg"
              />
              <p className="text-[#A8BFC9] font-bold text-[3.73vw] tracking-[0.23vw] tablet:text-[2.08vw] tablet:tracking-[0.13vw] desktop:text-[1.11vw] desktop:tracking-[0.069vw]">
                TURN
              </p>
            </div>
          ) : (
            <div
              className="flex z-[-99] absolute center top-[16vw] left-[50%] items-center justify-center border-[#0b1114] border-b-4 rounded-[1.33vw] w-[24.3vw] h-[10.67vw] bg-[#1F3641]
            tablet:ml-[-2.5vw] tablet:border-b-[0.52vw] tablet:rounded-[1.3vw] tablet:w-[17.23vw] tablet:h-[6.77vw] tablet:top-[8.8vw] tablet:left-[51.2vw]
            desktop:ml-[-1.5vw] desktop:border-b-[0.28vw] desktop:rounded-[0.69vw] desktop:w-[9.26vw] desktop:h-[3.61vw] desktop:top-[4.37vw] desktop:left-[51.5vw]"
            >
              <img
                className="w-[4.27vw] h-[4.27vw] mr-[2.4vw] tablet:w-[2.6vw] tablet:h-[2.6vw] tablet:mr-[1.69vw] desktop:w-[1.39vw] desktop:h-[1.39vw] desktop:mr-[0.9vw]"
                src="../images/icon-o-grey.svg"
              />
              <p className="text-[#A8BFC9] font-bold text-[3.73vw] tracking-[0.23vw] tablet:text-[2.08vw] tablet:tracking-[0.13vw] desktop:text-[1.11vw] desktop:tracking-[0.069vw]">
                TURN
              </p>
            </div>
          )}
          <div>
            <div
              className="flex items-center justify-center w-[10.67vw] h-[10.67vw] bg-[#A8BFC9] rounded-[1.33vw] border-b-4 border-[#73838a]
              tablet:w-[6.77vw] tablet:h-[6.77vw] tablet:rounded-[1.3vw] tablet:border-b-[0.52vw]
              desktop:w-[3.61vw] desktop:h-[3.61vw] desktop:rounded-[0.69vw] desktop:border-b-[0.28vw]"
              onClick={() => OpenRestartModel(true)}
            >
              <img
                className="w-[4.1vw] h-[4.1vw] tablet:w-[2.6vw] tablet:h-[2.6vw] desktop:w-[1.39vw] desktop:h-[1.39vw]"
                src="../images/icon-restart.svg"
              />
            </div>
          </div>
        </div>
        <div
          className="flex flex-wrap justify-center [&_div]:w-[24.3vw] [&_div]:h-[24.3vw] [&_div]:flex [&_div]:items-center [&_div]:justify-center
        tablet:[&_div]:w-[17.35vw] tablet:[&_div]:h-[18.23vw] desktop:[&_div]:w-[9.26vw] desktop:[&_div]:h-[9.26vw]"
        >
          {board.map((item) => {
            return (
              <div
                className="bg-[#1F3641] rounded-[2.67vw] border-[#0b1114] border-b-8 mx-[2.67vw] mb-[5.33vw]
                tablet:rounded-[1.95vw] tablet:border-b-[1.04vw] tablet:mx-[1.3vw] tablet:mb-[2.73vw]
                desktop:rounded-[1.04vw] desktop:border-b-[0.56vw] desktop:mx-[0.69vw] desktop:mb-[1.39vw]"
                onClick={() => handleClick(item.id)}
                key={String(item.id)}
              >
                {item.isClicked === true ? (
                  <p>
                    {item.mark === "X" ? (
                      <img
                        className="w-[10.67vw] tablet:w-[8.33vw] desktop:w-[4.38vw]"
                        src="../images/icon-x.svg"
                      />
                    ) : (
                      <img
                        className="w-[10.67vw] tablet:w-[8.33vw] desktop:w-[4.38vw]"
                        src="../images/icon-o.svg"
                      />
                    )}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between text-center px-[2.67vw] pt-[2.67vw] tablet:px-[1.3vw] tablet:pt-0 desktop:px-[0.69vw]">
          <div
            className="flex flex-col items-center justify-center w-[25.6vw] h-[17.07vw] bg-[#31C3BD] rounded-[2.67vw]
          tablet:w-[17.32vw] tablet:h-[9.38vw] tablet:rounded-[1.95vw]
          desktop:w-[9.72vw] desktop:h-[5vw] desktop:rounded-[1.04vw]"
          >
            <p className="font-medium text-[3.73vw] tracking-[0.23vw] tablet:text-[1.82vw] tablet:tracking-[0.11vw] desktop:text-[0.97vw] desktop:tracking-[0.06vw]">
              X (
              {gameType === "multiplayer"
                ? player1Mark === "X"
                  ? "P1"
                  : "P2"
                : player1Mark === "X"
                ? "YOU"
                : "CPU"}
              )
            </p>
            <p className="font-bold text-[5.33vw] tracking-[0.33vw] tablet:text-[3.13vw] tablet:tracking-[0.2vw] desktop:text-[1.67vw] desktop:tracking-[0.1vw]">
              {xCounter}
            </p>
          </div>
          <div
            className="flex flex-col items-center justify-center w-[25.6vw] h-[17.07vw] bg-[#A8BFC9] rounded-[2.67vw]
          tablet:w-[17.32vw] tablet:h-[9.38vw] tablet:rounded-[1.95vw]
          desktop:w-[9.72vw] desktop:h-[5vw] desktop:rounded-[1.04vw]"
          >
            <p className="font-medium text-[3.73vw] tracking-[0.23vw] tablet:text-[1.82vw] tablet:tracking-[0.11vw] desktop:text-[0.97vw] desktop:tracking-[0.06vw]">
              TIES
            </p>
            <p className="font-bold text-[5.33vw] tracking-[0.33vw] tablet:text-[3.13vw] tablet:tracking-[0.2vw] desktop:text-[1.67vw] desktop:tracking-[0.1vw]">
              {tieCounter}
            </p>
          </div>
          <div
            className="flex flex-col items-center justify-center w-[25.6vw] h-[17.07vw] bg-[#F2B137] rounded-[2.67vw]
          tablet:w-[17.32vw] tablet:h-[9.38vw] tablet:rounded-[1.95vw] desktop:w-[9.72vw] desktop:h-[5vw] desktop:rounded-[1.04vw]"
          >
            <p className="font-medium text-[3.73vw] tracking-[0.23vw] tablet:text-[1.82vw] tablet:tracking-[0.11vw] desktop:text-[0.97vw] desktop:tracking-[0.06vw]">
              O (
              {gameType === "multiplayer"
                ? player1Mark === "O"
                  ? "P1"
                  : "P2"
                : player1Mark === "O"
                ? "YOU"
                : "CPU"}
              )
            </p>
            <p className="font-bold text-[5.33vw] tracking-[0.33vw] tablet:text-[3.13vw] tablet:tracking-[0.2vw] desktop:text-[1.67vw] desktop:tracking-[0.1vw]">
              {oCounter}
            </p>
          </div>
        </div>
      </div>
      {winner ? (
        <WinBox
          winner={winningMark}
          SetWinner={SetWinner}
          board={board}
          changeBoard={changeBoard}
          setGameType={setGameType}
          player1Mark={player1Mark}
          setXCounter={setXCounter}
          setOCounter={setOCounter}
          setTieCounter={setTieCounter}
          gameType={gameType}
        />
      ) : null}
      {restartModal ? (
        <RestartBox
          SetWinner={SetWinner}
          board={board}
          changeBoard={changeBoard}
          setMark={setMark}
          OpenRestartModel={OpenRestartModel}
        />
      ) : null}
    </div>
  );
}

export default App;
