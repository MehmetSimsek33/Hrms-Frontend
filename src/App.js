import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Dashbord from './layout/Dashbord';
import Navi from './layout/Navi.jsx';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className="main">
        <Dashbord/>
      </Container>
      
      
    </div>
  );
}

export default App;
