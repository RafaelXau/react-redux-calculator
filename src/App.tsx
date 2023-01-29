import Display from './components/Display';
import Frame from './components/Frame';
import Keyboard from './components/Keyboard';

function App() {
  return (
    <Frame>
      <Display />
      <Keyboard />
    </Frame>
  );
}

export default App;
