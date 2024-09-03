 //X winning logic
 if (box[0].mark === "X" && box[1].mark === "X" && box[2].mark === "X") {
    console.log("X won! Game starts again.");
    changeBox(
      box.map((prev) => {
        return { ...prev, mark: "", isClicked: false };
      })
    );
    setMark("X");
  }
  if (box[3].mark === "X" && box[4].mark === "X" && box[5].mark === "X") {
    console.log("X won! Game starts again.");
    changeBox(
      box.map((prev) => {
        return { ...prev, mark: "", isClicked: false };
      })
    );
    setMark("X");
  }
  if (box[6].mark === "X" && box[7].mark === "X" && box[8].mark === "X") {
    console.log("X won! Game starts again.");
    changeBox(
      box.map((prev) => {
        return { ...prev, mark: "", isClicked: false };
      })
    );
    setMark("X");
  }
  if (box[0].mark === "X" && box[3].mark === "X" && box[6].mark === "X") {
    console.log("X won! Game starts again.");
    changeBox(
      box.map((prev) => {
        return { ...prev, mark: "", isClicked: false };
      })
    );
    setMark("X");
  }
  if (box[1].mark === "X" && box[4].mark === "X" && box[7].mark === "X") {
    console.log("X won! Game starts again.");
    changeBox(
      box.map((prev) => {
        return { ...prev, mark: "", isClicked: false };
      })
    );
    setMark("X");
  }
  if (box[2].mark === "X" && box[5].mark === "X" && box[8].mark === "X") {
    console.log("X won! Game starts again.");
    changeBox(
      box.map((prev) => {
        return { ...prev, mark: "", isClicked: false };
      })
    );
    setMark("X");
  }
  if (box[0].mark === "X" && box[4].mark === "X" && box[8].mark === "X") {
    console.log("X won! Game starts again.");
    changeBox(
      box.map((prev) => {
        return { ...prev, mark: "", isClicked: false };
      })
    );
    setMark("X");
  }
  if (box[6].mark === "X" && box[4].mark === "X" && box[2].mark === "X") {
    console.log("X won! Game starts again.");
    changeBox(
      box.map((prev) => {
        return { ...prev, mark: "", isClicked: false };
      })
    );
    setMark("X");
  }
  //O winning logic
  if (box[0].mark === "O" && box[1].mark === "O" && box[2].mark === "O") {
    console.log("O won! Game starts again.");
    changeBox(
      box.map((prev) => {
        return { ...prev, mark: "", isClicked: false };
      })
    );
    setMark("X");
  }
  if (box[3].mark === "O" && box[4].mark === "O" && box[5].mark === "O") {
    console.log("O won! Game starts again.");
    changeBox(
      box.map((prev) => {
        return { ...prev, mark: "", isClicked: false };
      })
    );
    setMark("X");
  }
  if (box[6].mark === "O" && box[7].mark === "O" && box[8].mark === "O") {
    console.log("O won! Game starts again.");
    changeBox(
      box.map((prev) => {
        return { ...prev, mark: "", isClicked: false };
      })
    );
    setMark("X");
  }
  if (box[0].mark === "O" && box[3].mark === "O" && box[6].mark === "O") {
    console.log("O won! Game starts again.");
    changeBox(
      box.map((prev) => {
        return { ...prev, mark: "", isClicked: false };
      })
    );
    setMark("X");
  }
  if (box[1].mark === "O" && box[4].mark === "O" && box[7].mark === "O") {
    console.log("O won! Game starts again.");
    changeBox(
      box.map((prev) => {
        return { ...prev, mark: "", isClicked: false };
      })
    );
    setMark("X");
  }
  if (box[2].mark === "O" && box[5].mark === "O" && box[8].mark === "O") {
    console.log("O won! Game starts again.");
    changeBox(
      box.map((prev) => {
        return { ...prev, mark: "", isClicked: false };
      })
    );
    setMark("X");
  }
  if (box[0].mark === "O" && box[4].mark === "O" && box[8].mark === "O") {
    console.log("O won! Game starts again.");
    changeBox(
      box.map((prev) => {
        return { ...prev, mark: "", isClicked: false };
      })
    );
    setMark("X");
  }
  if (box[6].mark === "O" && box[4].mark === "O" && box[2].mark === "O") {
    console.log("O won! Game starts again.");
    changeBox(
      box.map((prev) => {
        return { ...prev, mark: "", isClicked: false };
      })
    );
    setMark("X");
  }