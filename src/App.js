
import React, { useState } from 'react';
import Keyboard from './components/KeyBoard';

const App = () => {
  const [text, setText] = useState('');
  


  const handleKeyPress = (key) => {
    setText(text + key);
  };

  return (
    <div className="App">
      <h1>מקלדת וירטואלית</h1>
      <textarea value={text} readOnly />
      <Keyboard onKeyPress={handleKeyPress} />
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
