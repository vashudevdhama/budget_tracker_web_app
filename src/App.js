import './App.css';
import Navbar from './components/Navbar/Navbar';
import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="app-container">
        <LeftSide />
        <RightSide />
      </section>
    </div>
  );
}

export default App;
