import React from 'react';
import './App.css';
import BasicButton from './js/BasicButton';
import TextInput from "./js/TextInput";
import StateInput from "./js/StateInput";
import StateInputMulti from "./js/StateInputMulti";
import Validation from "./js/Validation";

function App() {
    return (
        <div className="App">
            <Validation/>
            <StateInputMulti/>
            <StateInput/>
            <TextInput/>
            <BasicButton/>
        </div>
    );
}

export default App;
