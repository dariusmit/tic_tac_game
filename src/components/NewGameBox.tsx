interface Props {
  setGameType: React.Dispatch<React.SetStateAction<string>>;
  mark: string;
  setMark: React.Dispatch<React.SetStateAction<string>>;
  setPlayer1Mark: React.Dispatch<React.SetStateAction<string>>;
  setPlayer2Mark: React.Dispatch<React.SetStateAction<string>>;
}

function NewGameBox({
  setGameType,
  mark,
  setMark,
  setPlayer1Mark,
  setPlayer2Mark,
}: Props) {
  return (
    <>
      <div className="fixed w-full h-screen center top-[50%] left-[50%] bg-[#1A2A33] z-9"></div>
      <div
        className="flex fixed w-full h-auto center top-[50%] left-[50%] z-99 flex-col justify-center text-center items-center px-[6.4vw]
      tablet:w-[59.9vw] tablet:px-0 desktop:w-[31.94vw]"
      >
        <img
          className="mb-[8.53vw] tablet:mb-[5.21vw] desktop:mb-[2.78vw]"
          src="../../images/logo.svg"
        />
        <div
          className="bg-[#1F3641] w-full rounded-[4vw] border-[#111e24] border-b-8 p-[6.4vw] mb-[8.53vw]
        tablet:rounded-[1.95vw] tablet:p-[3.13vw] tablet:mb-[5.21vw]
        desktop:rounded-[1.04vw] desktop:p-[1.67vw] desktop:mb-[2.78vw]"
        >
          <p
            className="font-bold text-[4.27vw] mb-[6.4vw] tracking-[0.27vw] text-[#A8BFC9]
          tablet:text-[2.08vw] tablet:mb-[3.13vw] tablet:tracking-[0.13vw]
          desktop:text-[1.11vw] desktop:mb-[1.67vw] desktop:tracking-[0.07vw]"
          >
            PICK PLAYER 1'S MARK?
          </p>
          <div
            className="flex items-center bg-[#1A2A33] rounded-[2.67vw] mb-[4.53vw] px-[2.4vw]
          tablet:rounded-[1.3vw] tablet:mb-[2.21vw] tablet:px-[1.04vw]
          desktop:rounded-[0.69vw] desktop:mb-[1.18vw] desktop:px-[0.63vw]"
          >
            <div
              onClick={() => {
                setMark("X");
                setPlayer1Mark("X");
                setPlayer2Mark("O");
              }}
              className={
                mark === "X"
                  ? "bg-[#A8BFC9] rounded-[2.67vw] flex items-center justify-center w-1/2 tablet:rounded-[1.3vw] desktop:rounded-[0.69vw]"
                  : "flex items-center py-[2.4vw] justify-center w-1/2 tablet:py-[1.17vw] desktop:py-[0.76vw]"
              }
            >
              <img
                className="w-[8.53vw] my-[2.93vw] h-[8.53vw] tablet:w-[4.13vw] tablet:h-[4.13vw] tablet:my-[1.43vw] desktop:w-[2.22vw] desktop:h-[2.22vw] desktop:my-[0.63vw]"
                src={
                  mark === "X"
                    ? "../../images/icon-x-dark-navy.svg"
                    : "../../images/icon-x-grey.svg"
                }
              />
            </div>
            <div
              onClick={() => {
                setMark("O");
                setPlayer1Mark("O");
                setPlayer2Mark("X");
              }}
              className={
                mark === "O"
                  ? "bg-[#A8BFC9] rounded-[2.67vw] flex items-center justify-center w-1/2 tablet:rounded-[1.3vw] desktop:rounded-[0.69vw]"
                  : "flex items-center py-[2.4vw] justify-center w-1/2 tablet:py-[1.17vw] desktop:py-[0.76vw]"
              }
            >
              <img
                className="w-[8.53vw] my-[2.93vw] h-[8.53vw] tablet:w-[4.13vw] tablet:h-[4.13vw] tablet:my-[1.43vw] desktop:w-[2.22vw] desktop:h-[2.22vw] desktop:my-[0.63vw]"
                src={
                  mark === "O"
                    ? "../../images/icon-o-dark-navy.svg"
                    : "../../images/icon-o-grey.svg"
                }
              />
            </div>
          </div>
          <p className="font-regular text-[#A8BFC9] text-[3.73vw] tracking-[0.23vw] tablet:text-[1.82vw] tablet:tracking-[0.11vw] desktop:text-[0.97vw] desktop:tracking-[0.06vw]">
            REMEMBER: X GOES FIRST
          </p>
        </div>
        <button
          className="w-full h-[14.93vw] bg-[#F2B137] mb-[4.27vw] rounded-[4vw] text-[#1A2A33] font-bold tracking-[0.27vw] border-[#ac7d26] border-b-8
          tablet:mb-[2.6vw] tablet:tracking-[0.16vw] tablet:h-[8.72vw] tablet:text-[2.6vw] tablet:rounded-[1.95vw]
          desktop:mb-[1.39vw] desktop:tracking-[0.09vw] desktop:h-[4.65vw] desktop:text-[1.39vw] desktop:rounded-[1.04vw]"
          onClick={() => {
            setGameType("cpu");
            setMark("X");
          }}
        >
          NEW GAME (VS CPU)
        </button>
        <button
          className="w-full h-[14.93vw] bg-[#31C3BD] rounded-[4vw] text-[#1A2A33] font-bold tracking-[0.27vw] border-[#1e7471] border-b-8
          tablet:mb-[2.6vw] tablet:tracking-[0.16vw] tablet:h-[8.72vw] tablet:text-[2.6vw] tablet:rounded-[1.95vw]
          desktop:mb-[1.39vw] desktop:tracking-[0.09vw] desktop:h-[4.65vw] desktop:text-[1.39vw] desktop:rounded-[1.04vw]"
          onClick={() => {
            setGameType("multiplayer");
            setMark("X");
          }}
        >
          NEW GAME (VS PLAYER)
        </button>
      </div>
    </>
  );
}

export default NewGameBox;
