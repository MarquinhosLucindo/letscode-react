import Counter from './components/Counter';
import Main from './components/Main';
import Menu from './components/Menu'
import ButtonCounter from './components/BottonCounter';
import UserCard from './components/UserCard';

const App = () => (
  <div>
    {/* <h1>Teste</h1> */}
    <ButtonCounter step={100} />
    <UserCard/>
    <Counter step={3} startValue={5}/>
    <Menu />
    <Main />
  </div>
);

export default App;
