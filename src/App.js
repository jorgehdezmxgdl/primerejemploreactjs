import logo from './logo.svg';
import './App.css';
import Parrafo from './componentes/Parrafo';
import Imagen from './componentes/Imagen';
import SaltoLinea from './componentes/SaltoLinea';

function App() {
  return (
    <div>
    <h1>Juego de topos</h1>
    <Parrafo leyenda="Haz click para iniciar" />
    <Imagen />
    <SaltoLinea />
    </div>
  );
}

export default App;
