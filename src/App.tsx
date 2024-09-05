import { useEffect, useState } from "react";

interface type {
  id: number;
  mark: string;
  isClicked: boolean;
}

let PlayerClickID = 0;

function App() {
  let data: type[] = [];
  let [mark, setMark] = useState("X");

  function initialData() {
    for (let i = 0; i < 9; i++) {
      data.push({ id: i, mark: "", isClicked: false });
    }
    return data;
  }

  let [board, changeBoard] = useState(initialData);

  let [xCounter, setXCounter] = useState(0);
  let [oCounter, setOCounter] = useState(0);
  let [tieCounter, setTieCounter] = useState(0);

  //Winning Logic
  useEffect(() => {
    //X winning logic
    if (
      board[0].mark === "X" &&
      board[1].mark === "X" &&
      board[2].mark === "X"
    ) {
      console.log("X won! Game starts again.");
      changeBoard(
        board.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setXCounter((prev) => prev + 1);
    }
    if (
      board[3].mark === "X" &&
      board[4].mark === "X" &&
      board[5].mark === "X"
    ) {
      console.log("X won! Game starts again.");
      changeBoard(
        board.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setXCounter((prev) => prev + 1);
    }
    if (
      board[6].mark === "X" &&
      board[7].mark === "X" &&
      board[8].mark === "X"
    ) {
      console.log("X won! Game starts again.");
      changeBoard(
        board.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setXCounter((prev) => prev + 1);
    }
    if (
      board[0].mark === "X" &&
      board[3].mark === "X" &&
      board[6].mark === "X"
    ) {
      console.log("X won! Game starts again.");
      changeBoard(
        board.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setXCounter((prev) => prev + 1);
    }
    if (
      board[1].mark === "X" &&
      board[4].mark === "X" &&
      board[7].mark === "X"
    ) {
      console.log("X won! Game starts again.");
      changeBoard(
        board.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setXCounter((prev) => prev + 1);
    }
    if (
      board[2].mark === "X" &&
      board[5].mark === "X" &&
      board[8].mark === "X"
    ) {
      console.log("X won! Game starts again.");
      changeBoard(
        board.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setXCounter((prev) => prev + 1);
    }
    if (
      board[0].mark === "X" &&
      board[4].mark === "X" &&
      board[8].mark === "X"
    ) {
      console.log("X won! Game starts again.");
      changeBoard(
        board.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setXCounter((prev) => prev + 1);
    }
    if (
      board[6].mark === "X" &&
      board[4].mark === "X" &&
      board[2].mark === "X"
    ) {
      console.log("X won! Game starts again.");
      changeBoard(
        board.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setXCounter((prev) => prev + 1);
    }
    //O winning logic
    if (
      board[0].mark === "O" &&
      board[1].mark === "O" &&
      board[2].mark === "O"
    ) {
      console.log("O won! Game starts again.");
      changeBoard(
        board.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setOCounter((prev) => prev + 1);
    }
    if (
      board[3].mark === "O" &&
      board[4].mark === "O" &&
      board[5].mark === "O"
    ) {
      console.log("O won! Game starts again.");
      changeBoard(
        board.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setOCounter((prev) => prev + 1);
    }
    if (
      board[6].mark === "O" &&
      board[7].mark === "O" &&
      board[8].mark === "O"
    ) {
      console.log("O won! Game starts again.");
      changeBoard(
        board.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setOCounter((prev) => prev + 1);
    }
    if (
      board[0].mark === "O" &&
      board[3].mark === "O" &&
      board[6].mark === "O"
    ) {
      console.log("O won! Game starts again.");
      changeBoard(
        board.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setOCounter((prev) => prev + 1);
    }
    if (
      board[1].mark === "O" &&
      board[4].mark === "O" &&
      board[7].mark === "O"
    ) {
      console.log("O won! Game starts again.");
      changeBoard(
        board.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setOCounter((prev) => prev + 1);
    }
    if (
      board[2].mark === "O" &&
      board[5].mark === "O" &&
      board[8].mark === "O"
    ) {
      console.log("O won! Game starts again.");
      changeBoard(
        board.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setOCounter((prev) => prev + 1);
    }
    if (
      board[0].mark === "O" &&
      board[4].mark === "O" &&
      board[8].mark === "O"
    ) {
      console.log("O won! Game starts again.");
      changeBoard(
        board.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setOCounter((prev) => prev + 1);
    }
    if (
      board[6].mark === "O" &&
      board[4].mark === "O" &&
      board[2].mark === "O"
    ) {
      console.log("O won! Game starts again.");
      changeBoard(
        board.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setOCounter((prev) => prev + 1);
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
        changeBoard(
          board.map((prev) => {
            return { ...prev, mark: "", isClicked: false };
          })
        );
        setMark("X");
        setTieCounter((prev) => prev + 1);
      }
    }
  }, [board]);

  let [gameType, setGameType] = useState("solo");
  let [playerMove, registerPlayerMove] = useState(0);
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
      } else if (mark === "O") {
        getPlayerClickID(id);
        changeBoard(
          board.map((prev) => {
            console.log("Player clicked at id of " + id);
            if (prev.id === id && prev.isClicked === false) {
              registerPlayerMove((prev) => (prev += 1));
              setMark("X");
              return { ...prev, mark: "O", isClicked: true };
            }
            return prev;
          })
        );
      }
    }
  }

  let [emptyCellsArray, updateEmptyCellsObject] = useState<type[]>([]);
  let randomNumbersArray: number[] = [];

  useEffect(() => {
    updateEmptyCellsObject(board.filter((prev) => prev.isClicked === false));
  }, [board]);

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
      } else if (mark === "X") {
        console.log("Player move registered");
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
      }
    }
  }, [playerMove]);

  let [radioStatus, setRadioStatus] = useState(true);

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="w-[604px] h-auto mx-auto my-auto">
        <div className="pb-4">
          <div className="flex flex-col">
            <button
              onClick={() => console.log(JSON.stringify(board, undefined, 2))}
              className="text-red-500"
            >
              Test board state
            </button>
            <button
              onClick={() =>
                console.log(JSON.stringify(emptyCellsArray, undefined, 2))
              }
              className="text-red-500"
            >
              Test empty cells state
            </button>
            <button
              onClick={() =>
                console.log("---------------------------------------")
              }
              className="text-red-500"
            >
              Seperator
            </button>
          </div>
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
          <p className="font-bold">{gameType}</p>
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
              }}
            >
              Start new game
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
    </div>
  );
}

export default App;
