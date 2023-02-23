import './App.css';
import Card from './Components/Card/Card';
import events from '../src/db/events.json'

function App() {
  return (
    <div className="App">
    <>{events.length > 0 && events.map((event, index) => <Card key={index} image={event.image} data={event.data} description={event.description} />)}</>

    </div>
  );
}

export default App;
