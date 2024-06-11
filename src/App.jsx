import GameBoard from "./components/GameBoard"
import Header from "./components/Header"
import Player from "./components/Player"

function App() {
  
  let name = "Player 1"

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players">
            <Player name={name} symbol="X"/>
            <Player name="Player 2" symbol="O"/>
          </ol>
          <GameBoard />
        </div>
      </main>

    </>
  )
}

export default App
