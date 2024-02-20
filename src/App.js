import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import DiscographyHeader from './components/DiscographyHeader/DiscographyHeader';
import TimelineTree from './components/timelineTree/TimelineTree';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Using components directly rather than invoking them as functions */}
        {/* <Navbar /> */}
        <DiscographyHeader />
      </header>
      <body>
        {/* Place the TimelineTree component where it fits in your page layout */}
        <TimelineTree />
      </body>
    </div>
  );
}
export default App;
