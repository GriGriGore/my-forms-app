/* eslint no-underscore-dangle: [2, { "allow": ["_loading", "_saveStatus"] }] */
import React from 'react';
import isEmail from 'validator/lib/isEmail';
import FieldComponent from "./FieldComponent";
import CourseSelect from "./CourseSelect";

export default class RemotePersistence extends React.Component {
    render(){
        return(
            <div>
                <h1>Remote persistence</h1>
            </div>

        );
    }
}
