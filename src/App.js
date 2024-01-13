// src/App.js
import React from 'react';
import FormBuilder from './Components/DynamicFormField';
import "./App.css"

const App = () => {
  return (
    <div className='App'>
      <h1>Dynamic Form Generator</h1>
      <FormBuilder />
    </div>
  );
};

export default App;
