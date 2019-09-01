import React from 'react';
import './App.css';
import BasicButton from './js/BasicButton';
import TextInput from "./js/TextInput";
import StateInput from "./js/StateInput";
import StateInputMulti from "./js/StateInputMulti";
import Validation from "./js/Validation";
import FieldComponentValidation from "./js/FieldComponentValidation";
import CourseAsyncFetch from "./js/CourseAsyncFetch";
import RemotePersistence from "./js/RemotePersistence";

function App() {
    return (
        <div className="App">
            <RemotePersistence/>
            {/*<CourseAsyncFetch/>
            <FieldComponentValidation/>
            <Validation/>
            <StateInputMulti/>
            <StateInput/>
            <TextInput/>
            <BasicButton/>*/}
        </div>
    );
}

export default App;
