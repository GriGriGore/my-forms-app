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
import ReduxApp from "./js/api/ReduxApp";

function App() {
    return (
        <div className="App">
            <ReduxApp/>
            {/*
            <RemotePersistence/>
            <CourseAsyncFetch/>
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
