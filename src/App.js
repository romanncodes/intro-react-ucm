
import './App.css';
import { Card } from './components/Card';
import {Header} from './components/Header';

import supervisor from "./assets/icon-supervisor.svg";
import { Formulario } from './components/Formulario';

function App() {
  return (
    <div>
      <Header 
        title="Primera demo"
        subtitle="Clase Numero 4" />

    <Card
        title="Supervisor"
        description="Monitor activity to identify project roadblocks"
        image={supervisor}
        color="card-cyan"
    />
    <br/>

    <Formulario />

    </div>  
  );
}

export default App;
