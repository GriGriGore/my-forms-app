import React from 'react';
import './App.css';
import BasicButton from './js/BasicButton';
import TextInput from "./js/TextInput";
import StateInput from "./js/StateInput";
import StateInputMulti from "./js/StateInputMulti";

function App() {
    return (
        <div className="App">
            <BasicButton/>
            <TextInput/>
            <StateInput/>
            <StateInputMulti/>
        </div>
    );
}

export default App;
