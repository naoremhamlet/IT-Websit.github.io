import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import './App.css';




import './css/Form.css';
import './css/Chat.css';
import './css/ContactUs.css';

import Body from './components/Body/Body';

function App() {
  return (
    <div className="App">
      <AlertProvider>
        <Body />
      </AlertProvider>
    </div>
  );
}

export default App;
