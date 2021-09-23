import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import './App.css';




import './css/Form.css';
import './css/Chat.css';
import './css/ContactUs.css';
import './css/WhyUs.css';

import Body from './components/Body/Body';


const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 3000,
  offset: '5px',
  transition: transitions.SCALE
}

function App() {
  return (
    <div className="App">
      <AlertProvider template={AlertTemplate} {...options}>
        <Body />
      </AlertProvider>
    </div>
  );
}

export default App;
