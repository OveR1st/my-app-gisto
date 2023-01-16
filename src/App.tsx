import React from 'react'
import logo from './logo.svg'
import './App.css'
// import MyPlot from './components/PlotlyComponent';
import Histogram from './components/ChartsJS'
// import HistogramVictory from './components/Victory';
// import { Doughnut } from 'react-chartjs-2';

function App() {
	return (
		<div className="App">
			{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
			{/* <MyPlot /> */}
			<Histogram />
			{/* <Doughnut data={[2, 2]} /> */}
			{/* <HistogramVictory /> */}
		</div>
	)
}

export default App
