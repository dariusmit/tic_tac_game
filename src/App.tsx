import { useEffect, useState } from "react";

interface type {
  id: number;
  mark: string;
  isClicked: boolean;
}

function App() {
  let data: type[] = [];
  let [mark, setMark] = useState("X");

  function initialData() {
    for (let i = 0; i < 9; i++) {
      data.push({ id: i, mark: "", isClicked: false });
    }
    return data;
  }

  let [box, changeBox] = useState(initialData);

  let [xCounter, setXCounter] = useState(0);
  let [oCounter, setOCounter] = useState(0);
  let [tieCounter, setTieCounter] = useState(0);

  //Winning Logic
  useEffect(() => {
    //X winning logic
    if (box[0].mark === "X" && box[1].mark === "X" && box[2].mark === "X") {
      console.log("X won! Game starts again.");
      changeBox(
        box.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setXCounter((prev) => prev + 1);
    } else if (
      box[3].mark === "X" &&
      box[4].mark === "X" &&
      box[5].mark === "X"
    ) {
      console.log("X won! Game starts again.");
      changeBox(
        box.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setXCounter((prev) => prev + 1);
    } else if (
      box[6].mark === "X" &&
      box[7].mark === "X" &&
      box[8].mark === "X"
    ) {
      console.log("X won! Game starts again.");
      changeBox(
        box.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setXCounter((prev) => prev + 1);
    } else if (
      box[0].mark === "X" &&
      box[3].mark === "X" &&
      box[6].mark === "X"
    ) {
      console.log("X won! Game starts again.");
      changeBox(
        box.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setXCounter((prev) => prev + 1);
    } else if (
      box[1].mark === "X" &&
      box[4].mark === "X" &&
      box[7].mark === "X"
    ) {
      console.log("X won! Game starts again.");
      changeBox(
        box.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setXCounter((prev) => prev + 1);
    } else if (
      box[2].mark === "X" &&
      box[5].mark === "X" &&
      box[8].mark === "X"
    ) {
      console.log("X won! Game starts again.");
      changeBox(
        box.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setXCounter((prev) => prev + 1);
    } else if (
      box[0].mark === "X" &&
      box[4].mark === "X" &&
      box[8].mark === "X"
    ) {
      console.log("X won! Game starts again.");
      changeBox(
        box.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setXCounter((prev) => prev + 1);
    } else if (
      box[6].mark === "X" &&
      box[4].mark === "X" &&
      box[2].mark === "X"
    ) {
      console.log("X won! Game starts again.");
      changeBox(
        box.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setXCounter((prev) => prev + 1);
    }
    //O winning logic
    else if (
      box[0].mark === "O" &&
      box[1].mark === "O" &&
      box[2].mark === "O"
    ) {
      console.log("O won! Game starts again.");
      changeBox(
        box.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setOCounter((prev) => prev + 1);
    } else if (
      box[3].mark === "O" &&
      box[4].mark === "O" &&
      box[5].mark === "O"
    ) {
      console.log("O won! Game starts again.");
      changeBox(
        box.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setOCounter((prev) => prev + 1);
    } else if (
      box[6].mark === "O" &&
      box[7].mark === "O" &&
      box[8].mark === "O"
    ) {
      console.log("O won! Game starts again.");
      changeBox(
        box.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setOCounter((prev) => prev + 1);
    } else if (
      box[0].mark === "O" &&
      box[3].mark === "O" &&
      box[6].mark === "O"
    ) {
      console.log("O won! Game starts again.");
      changeBox(
        box.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setOCounter((prev) => prev + 1);
    } else if (
      box[1].mark === "O" &&
      box[4].mark === "O" &&
      box[7].mark === "O"
    ) {
      console.log("O won! Game starts again.");
      changeBox(
        box.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setOCounter((prev) => prev + 1);
    } else if (
      box[2].mark === "O" &&
      box[5].mark === "O" &&
      box[8].mark === "O"
    ) {
      console.log("O won! Game starts again.");
      changeBox(
        box.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setOCounter((prev) => prev + 1);
    } else if (
      box[0].mark === "O" &&
      box[4].mark === "O" &&
      box[8].mark === "O"
    ) {
      console.log("O won! Game starts again.");
      changeBox(
        box.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setOCounter((prev) => prev + 1);
    } else if (
      box[6].mark === "O" &&
      box[4].mark === "O" &&
      box[2].mark === "O"
    ) {
      console.log("O won! Game starts again.");
      changeBox(
        box.map((prev) => {
          return { ...prev, mark: "", isClicked: false };
        })
      );
      setMark("X");
      setOCounter((prev) => prev + 1);
    } else {
      //A draw case. If no winners emerged.
      if (
        box[0].isClicked === true &&
        box[1].isClicked === true &&
        box[2].isClicked === true &&
        box[3].isClicked === true &&
        box[4].isClicked === true &&
        box[5].isClicked === true &&
        box[6].isClicked === true &&
        box[7].isClicked === true &&
        box[8].isClicked === true
      ) {
        console.log("A Tie! Game starts again.");
        changeBox(
          box.map((prev) => {
            return { ...prev, mark: "", isClicked: false };
          })
        );
        setMark("X");
        setTieCounter((prev) => prev + 1);
      }
    }
  }, [box]);

  let [gameType, setGameType] = useState("solo");

  function handleClick(id: number) {
    if (gameType === "solo") {
      changeBox(
        box.map((prev) => {
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
    } else if (gameType === "cpu") {
      changeBox(
        box.map((prev) => {
          if (prev.id === id) {
            if (prev.isClicked === false) {
              if (mark === "X") {
                setMark("O");
                return { ...prev, mark: mark, isClicked: true };
              }
            }
            return prev;
          }
          return prev;
        })
      );
    }
  }

  function getRandomInt(number: number) {
    return Math.floor(Math.random() * number);
  }

  //Bad logic here, need to fix
  useEffect(() => {
    if (gameType === "cpu") {
      changeBox(
        box.map((prev) => {
          if (prev.isClicked === false) {
            console.log("match");
            if (prev.isClicked === false) {
              if (mark === "O") {
                setMark("X");
                return { ...prev, mark: mark, isClicked: true };
              }
            }
          }
          return prev;
        })
      );
    }
  }, [mark]);

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
                changeBox(
                  box.map((prev) => {
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
          {box.map((item) => {
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
