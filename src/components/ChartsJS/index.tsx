import React from 'react'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	TimeScale,
	registerables,
} from 'chart.js'

import type { ChartData, ChartOptions } from 'chart.js'

import { Line, Scatter } from 'react-chartjs-2'

import { enGB } from 'date-fns/locale'
// import 'chartjs-plugin-zoom'

import zoomPlugin from 'chartjs-plugin-zoom'
import 'chartjs-adapter-date-fns'

ChartJS.register(
	TimeScale,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	zoomPlugin,
	...registerables
)

const Histogram = () => {
	function getRandomNumber() {
		return Math.floor(Math.random() * 10)
	}

	const funcClosure = () => {
		const arr: number[] = []
		console.log('arr', arr)
		return () => {
			for (let i = 0; i < 10; i++) {
				arr.push(getRandomNumber())
			}

			return arr
		}
	}

	const optionsTest2: ChartOptions<'line'> = {
		responsive: true,
		// hover: {
		// 	mode: 'x',
		// 	intersect: true,
		// },
		plugins: {
			zoom: {
				zoom: {
					// zoom options and/or events
					wheel: {
						enabled: true,
					},
					pinch: {
						enabled: true,
					},

					mode: 'xy',
				},
				pan: {
					enabled: true,
					mode: 'xy',
				},
				limits: {
					x: {
						min: new Date('2000-04-15 16:00').valueOf(),
						max: new Date().valueOf(),
						minRange: 3600000,
					},
					x1: {
						min: new Date('2000-04-15 16:00').valueOf(),
						max: new Date().valueOf(),
						minRange: 3600000,
					},
					y: { min: 0, max: 10, minRange: 1 },
				},
			},
			title: {
				text: 'THICCNESS SCALE PLUGINS',
				display: true,
			},
		},
		scales: {
			y: {
				position: 'right',
				ticks: {
					callback: (val: number | string, index: number, ticks: unknown[]) => {
						//yAxis level
						if (Math.floor(+val) === val) {
							return val
						}
					},
				},
				grid: {
					color: 'none',
					display: true,
				},
				title: {
					display: true,
					// text: (ctx: any) => ctx.scale.axis + ' axis',
					text: 'yAxis',
				},
				// beginAtZero: true,
			},
			x: {
				position: 'top',
				type: 'timeseries',
				ticks: {
					// callback(tickValue, index, ticks) {
					// 	console.log('tickValue', tickValue)
					// 	return null
					// },
					autoSkip: true,
					autoSkipPadding: 50,
					maxRotation: 0,
					major: {
						enabled: true,
					},
				},
				time: {
					displayFormats: {
						hour: 'HH:mm',
						minute: 'HH:mm',
						// second: 'HH:mm:ss',
					},
					// unit: 'hour',
					// parser: 'yyyy-MM-dd',
					// unit: 'minute',
				},

				grid: {
					display: true,
				},
			},
			x1: {
				position: 'bottom',
				type: 'timeseries',
				ticks: {
					autoSkip: false,
					autoSkipPadding: 50,
					maxRotation: 0,
					major: {
						enabled: true,
					},
					// mirror: true,
				},
				time: {
					displayFormats: {
						hour: 'HH:mm',
						minute: 'HH:mm',
						// second: 'HH:mm:ss',
					},
					// unit: 'year',
					// parser: 'yyyy-MM-dd',
					// unit: 'minute',
				},
				grid: {
					display: true,
				},
			},
		},
	}
	const dateTestObj = [
		{
			x: new Date('2020-01-11').valueOf(),
			y: 1,
		},
		{
			x: new Date('2020-02-15').valueOf(),
			y: 2,
		},
		{
			x: new Date('2021-04-11').valueOf(),
			y: 3,
		},
		{
			x: new Date('2021-06-23').valueOf(),
			y: 5,
		},
	]

	const data: ChartData<'line'> = {
		// x-axis label values
		// labels: [
		// 	'Monday',
		// 	'Tuesday',
		// 	'Wednesday',
		// 	'Thursday',
		// 	'Friday',
		// 	'Saturday',
		// 	'Sunday',
		// 	'Monday',
		// 	'Tuesday',
		// ],
		datasets: [
			{
				type: 'line',
				label: '# of Calories Lost',
				// y-axis data plotting values

				data: dateTestObj /**dateTestObj */,

				// fill: false,
				// borderWidth: 4,
				// backgroundColor: 'rgb(255, 99, 132)',
				// borderColor: 'green',
			},
			// {
			// 	label: 'First dataset',
			// 	data: ,
			// 	fill: true,
			// 	backgroundColor: 'rgba(75,192,192,0.2)',
			// 	borderColor: 'rgba(75,192,192,1)',
			// },
		],
	}
	// console.log('RENDER')
	return (
		<div>
			<Line
				data={data}
				options={optionsTest2}
				height={window.innerHeight}
				width={window.innerWidth}
			/>
		</div>
	)
}

export default Histogram
