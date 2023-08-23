import { Header } from './components/Header';
import { OutroHeader } from './components/OutroHeader';
import { MeuForm } from './components/MeuForm';
import './App.css'

function App() {
  const handleClick =(userName) => {
    console.log(`Olá ${userName}`);

  }
//Fazendo importações
  return (
    <>
     <Header />
     <OutroHeader /> 
     <MeuForm />
     <botton onClick={() => handleClick ("Schelen")}> Clique aqui </botton> {/*é o bottom que aciona o alert*/}

   </>
  )
}

export default App
