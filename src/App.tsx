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

  let [box, changeBox] = useState(initialData());

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
        console.log("A draw! Game starts again.");
        changeBox(
          box.map((prev) => {
            return { ...prev, mark: "", isClicked: false };
          })
        );
        setMark("X");
      }
    }
  }, [box]);

  function handleClick(id: number) {
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
  }

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div
        className="flex border-2 mx-auto flex-wrap w-[604px] h-[604px] [&_div]:w-[200px]
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
    </div>
  );
}

export default App;
