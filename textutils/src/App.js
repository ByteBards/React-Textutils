import Navbar from './components/Navbar';
import './App.css';
import Textform from './components/Textform';

function App() {
  return (
    <>

    <Navbar title="Bilal" hometext="HomePage" />
    <div className="container">
    <Textform />
    </div>
      </>
  );
}

export default App;
