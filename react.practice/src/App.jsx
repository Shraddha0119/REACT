import React from 'react';


function App() {

    const languages = ['JS', 'Python', 'Java'];
    const morelanguages = ['C', 'C++', 'C#']

    const allLanguages = [...languages, ...morelanguages]


  return (
   
     <div className="App">
      Hello World
    </div>

   

  );
}

export default App;