import { useState } from "react";

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

  function handleClick(id: number) {
    console.log("Item with the id of " + id + " was clicked!");
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
      <button onClick={() => console.log(JSON.stringify(box, undefined, 2))}>
        Test state values
      </button>
    </div>
  );
}

export default App;
