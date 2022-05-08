import logo from './logo.svg';
import './App.css';
import PersonCard from './components/personCard';
function App() {
  return (
    <div className="App">
      <PersonCard 
      firstName = {'Jane'} lastName = {'Doe'} 
      age = {45}
      hairColor = {'black'}
      initialClicks = {3}/>
      <PersonCard 
      firstName = {'Peter'} lastName = {'Theil'} 
      age = {42}
      hairColor = {'green'}
      initialClicks = {5}/>
      <PersonCard 
      firstName = {'Robbie'} lastName = {'Meeks'} 
      age = {61}
      hairColor = {'black'}
      initialClicks = {0}/>
      <PersonCard 
      firstName = {'Big'} lastName = {'June'} 
      age = {72}
      hairColor = {'gray'}
      initialClicks = {78}/>

    </div>
  );
}

export default App;
