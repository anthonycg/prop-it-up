import logo from './logo.svg';
import './App.css';
import PersonCard from './components/personCard';
function App() {
  return (
    <div className="App">
      <PersonCard 
      firstName = {'Jane'} lastName = {'Doe'} 
      age = {45}
      hairColor = {'black'}/>
      <PersonCard 
      firstName = {'Peter'} lastName = {'Theil'} 
      age = {42}
      hairColor = {'green'}/>
      <PersonCard 
      firstName = {'Robbie'} lastName = {'Meeks'} 
      age = {61}
      hairColor = {'black'}/>
      <PersonCard 
      firstName = {'Big'} lastName = {'June'} 
      age = {72}
      hairColor = {'gray'}/>

    </div>
  );
}

export default App;
