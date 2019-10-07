import React, { Component } from 'react';
import Header from './Header.jsx';
import RandomFact from './RandomFact.jsx';
import TableOfContents from './TableOfContents.jsx';

import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import '../styles/App.css';

export default class App extends Component {
    render() {
        return (
            <>
                <Header />
                <RandomFact />
                <DndProvider backend={HTML5Backend} >
                    <TableOfContents />
                </DndProvider>
            </>
        )
    }
}