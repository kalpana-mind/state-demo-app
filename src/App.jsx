import './App.css';
import EmojiClicker from './EmojiClicker';
import ScoreKeeper from './ScoreKeeper';

function App() {
  return (
    <>
      {/* <h1>State Demo</h1> */}
      {/* <EmojiClicker /> */}
      <ScoreKeeper numPlayers={3} target={3} />
    </>
  );
}

export default App;
