import logo from './logo.svg';
import './App.css';
import { timelineTree } from './components/timelineTree/TimelineTree'; // Import the timelineTree function
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* {Navbar()} */}
      </header>
      <body>  
        
        {timelineTree()}
      </body>
    </div>
  );
}

export default App;
