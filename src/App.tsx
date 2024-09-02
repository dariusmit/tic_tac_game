import { useState } from "react";

interface type {
  id: number;
  selected: boolean;
}

function App() {
  let data: type[] = [];
  let mark: string = "X";

  function initialData() {
    for (let i = 0; i < 9; i++) {
      data.push({ id: i, selected: false });
    }
    return data;
  }

  let [box, changeBox] = useState(initialData());

  function handleClick(id: number) {
    changeBox(
      box.map((prev) => {
        if (prev.id === id) {
          return { ...prev, selected: true };
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
              {item.selected === true ? (
                <p className="font-bold text-2xl">{mark}</p>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
