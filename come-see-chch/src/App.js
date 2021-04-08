import './App.css';
import Landing from './pages/Landing'
import AddForm from './components/form/AddForm'
import Menu from './components/menu/Menu'

function App() {
  return (
    <div className="App">
      <Landing />
      <Menu />
      <AddForm />
    </div>
  );
}

export default App;
