
import React, { useState } from 'react';
import Keyboard from './components/KeyBoard';

const App = () => {
  const [text, setText] = useState('');
  


  const handleKeyPress = (key) => {
    setText(text + key);
  };

  const handleBackspace = () => {
    setText(text.slice(0, -1));
  };


  return (
    <div className="App">
      <h1>מקלדת וירטואלית</h1>
      <textarea value={text} readOnly />
      <Keyboard onKeyPress={handleKeyPress} onBackspace={handleBackspace}/>
    </div>
  );
};

export default App;







// import logo from './logo.svg';
// import './App.css';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//        <h1>55555</h1>
//       </header>
//     </div>
//   );
// }

// export default App;
