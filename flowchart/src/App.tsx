import React from 'react';
import './App.css';
import Flowchart from './components/Flowchart';
import data from "./data.json"
import { DataSource } from './interfaces';

function App() {
  return (
    <div>
      <Flowchart dataSource={data as DataSource} />
    </div>
  );
}

export default App;
