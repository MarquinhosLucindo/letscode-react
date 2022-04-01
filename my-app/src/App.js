import { Button, Menu  } from 'antd'
import { FaRocket, FaWhatsapp } from 'react-icons/fa';
import { GiSpermWhale } from 'react-icons/gi';
import { SiAdblockplus, Si3M } from "react-icons/si";
import { MdCommute, MdAccessibility} from 'react-icons/md'



const App = () => {
  return (
    <div>
      <h1>Teste</h1>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          Home
        </Menu.Item>
        <Menu.Item key="team">
          Equipe
        </Menu.Item>
        <Menu.Item key="aboutus">
          Sobre nós
        </Menu.Item>
        <Menu.Item key="contact">
          Contato
        </Menu.Item>
      </Menu>
      <main>
        <h2>Listagem</h2>
        <Button icon={
          <>
            <GiSpermWhale/>
            <FaWhatsapp/>
            <Si3M/>
            <SiAdblockplus/>
            <FaRocket />
            <MdCommute />
            <MdAccessibility />
          </>
        }>
          Cadastrar item
        </Button>
       
      </main>
      
    </div>
  );


  
}

export default App;
