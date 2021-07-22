import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcome';
import Thought from './component/Thought'; 
import Myself from './component/Myself';

function App() {
  const human = {
        name: 'Ibrahim',
        surname: 'Oliyide',
        job: 'Process Technician',
        location: 'Sagamu',
        origin : 'Ogun State'
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is Oliyide Ibrahim <p>Learning web development to better myself and my goals </p>
        </p>
      <div>
           <Welcome/>
          <p>
           <Thought/>
           <Myself user={human}/>
        </p>
      </div>
      </header>
    </div>
  );
}


export default App;
