import React from 'react';
import Output from './Output';
import NameForm from './NameForm';
import DrPebba from '../containers/DrPebba';
import RooBeer from '../containers/RooBeer';
import Fanter from '../containers/Fanter';
import Monsert from '../containers/Monsert';
import Spirte from '../containers/Spirte';
import CokeyCola from '../containers/CokeyCola';
import Pepsie from '../containers/Pepsie';


const CatApp = (props) => {
    return (
        <div>
            <h1>cats</h1>
            <Output />
            <NameForm />
            <DrPebba />
            <RooBeer />
            <Fanter />
            <Monsert />
            <Spirte /> 
            <CokeyCola />
            <Pepsie />

        </div>
    )
}

export default CatApp;