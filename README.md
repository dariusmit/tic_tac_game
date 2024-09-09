### Tic tac toe game in React + TypeScript + Tailwind CSS.

### Functions

- Player vs. Player.
- Player vs. CPU.
- Local cache saves game state even if refreshed.
- X win, O win, Tie win counters.
- Game reset.

### Expected behaviour

- You can choose to make the default screen either the new game menu or the solo player game board.
- On the new game screen, whichever mark isn't selected for the first player is automatically assigned to the second player when the game is started.
- The first turn of the first round is always played by whoever is playing as X. For every following round, the first turn alternates between O and X.
- After a round, if the player chooses to quit the game, they should be taken back to the new game menu.
- If the restart icon in the top right is clicked, the "Restart game?" modal should show and allow the player to reset the game or cancel and continue to play.

### Known bugs

- When game mode VS CPU selected every new round mark does not switch. X should always start first only on new round, and every new round mark should alternate between O and X.
- In cases when 2 winning patterns emerge, when board is completely filled with marks, last winning mark registered as a winner even though first one should be marked as a winner.

### Possible future functions

- CPU move delay of 1-2s to make gameplay a bit more pleasant.
- AI algorithm for CPU move logic instead of random CPU move.
