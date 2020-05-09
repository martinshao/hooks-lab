// import React from 'react'
import React, { useState } from 'react'
// import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
// import Example from './components/Example'
// import Articles from './components/Articles'
// import ProfilePage from './components/ProfilePage'
// import CandyDispenser from './components/CandyDispenser'
// import Blub from './components/Blub'
// import DualCounter from './components/DualCounter'
// import Profile from './components/Profile'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 0,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
  },
});

function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      {
        show && <Counter initialCount={6} />
      }
      {/* <Articles /> */}
      {/* <ProfilePage /> */}
      {/* {
        show && <Example someProp={'shaogucheng'} />
      } */}
      {/* <Blub /> */}
      {/* <DualCounter /> */}
      {/* <CandyDispenser /> */}

      <ThemeProvider theme={theme}>
        <Button onClick={() => setShow(!show)}>Trigger</Button>
      </ThemeProvider>
      {/* <Profile /> */}
    </div>
  );
}

export default App;
