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
// import 'chartjs-adapter-date-fns'
import 'chartjs-adapter-luxon'

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
		// spanGaps: true,
		// animation: false,

		plugins: {
			// legend: {
			// 	display: true,
			// 	labels: {
			// 		// color: 'red',

			// 	},
			// },
			zoom: {
				zoom: {
					// zoom options and/or events
					wheel: {
						enabled: true,
					},
					pinch: {
						// enabled: true,
					},

					mode: 'xy',
				},
				pan: {
					enabled: true,
					mode: 'xy',
				},
				limits: {
					x: {
						min: new Date('2001-04-15').valueOf(),
						max: new Date().valueOf(),
						minRange: 3600000,
					},
					x1: {
						min: new Date('2001-04-15').valueOf(),
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
					// mirror: true,
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
				// offsetAfterAutoskip: true,
				// offset: true,
				// bounds: 'data',
				adapters: {
					date: {
						locale: 'en-emodeng',
						minUnit: 'minute',
					},
				},
				// suggestedMin: '2022',
				position: 'top',
				type: 'time',
				ticks: {
					// stepSize: 10,
					maxTicksLimit: 10,

					// source: 'labels',
					// maxTicksLimit: 10,
					// callback(tickValue, index, ticks) {
					// 	console.log('tickValue', tickValue)
					// 	console.log('index', index)
					// 	console.log('ticks', ticks)
					// 	return tickValue
					// },
					autoSkip: true,
					autoSkipPadding: 50,
					maxRotation: 0,
					sampleSize: 0,
					// stepSize: 10,
					major: {
						enabled: true,
					},
				},
				time: {
					// isoWeekday: true,
					displayFormats: {
						// day: 'DD',
						hour: 'HH:mm',
						minute: 'HH:mm',
						second: 'HH:mm:ss',
					},
					// unit: 'hour',
					// parser: 'yyyy-MM-dd',
					// unit: 'year÷',
				},

				grid: { display: true },
			},
			// x1: {
			// 	adapters: {
			// 		date: {
			// 			locale: 'en-emodeng',
			// 			minUnit: 'minute',
			// 		},
			// 	},

			// 	position: 'bottom',
			// 	type: 'time',
			// 	ticks: {
			// 		source: 'auto',

			// 		autoSkip: true,
			// 		autoSkipPadding: 50,
			// 		maxRotation: 0,

			// 		major: {
			// 			enabled: true,
			// 		},
			// 	},
			// 	time: {
			// 		displayFormats: {
			// 			hour: 'HH:mm',
			// 			minute: 'HH:mm',
			// 			// second: 'HH:mm:ss',
			// 		},
			// 	},

			// 	grid: { display: false },
			// },
		},
	}

	const dateTestObj = [
		{
			x: new Date('2020-01-11T13:30:00').valueOf(),
			y: 1,
		},
		{
			x: new Date('2020-01-11T15:30:00').valueOf(),
			y: 1.2,
		},
		{
			x: new Date('2020-02-14T04:30:00').valueOf(),
			y: 2,
		},
		{
			x: new Date('2021-04-02T22:14:00').valueOf(),
			y: 3,
		},
		{
			x: new Date('2021-05-02T10:14:00').valueOf(),
			y: 4,
		},
		{
			x: new Date('2021-06-23T07:30:00').valueOf(),
			y: 5,
		},
	]
	const dateTestObj2 = [
		{
			x: new Date('2019-01-11T13:30:00').valueOf(),
			y: 1,
		},
		{
			x: new Date('2019-02-14T04:30:00').valueOf(),
			y: 2,
		},
		{
			x: new Date('2019-04-02T22:14:00').valueOf(),
			y: 3,
		},
		{
			x: new Date('2019-06-23T07:30:00').valueOf(),
			y: 5,
		},
	]

	const dateTestObj3 = [
		{
			x: new Date('2020-03-02T04:30:00').valueOf(),
			y: 6,
		},
		{
			x: new Date('2020-03-03T11:30:00').valueOf(),
			y: 6.1,
		},
		{
			x: new Date('2020-03-05T19:30:00').valueOf(),
			y: 6.2,
		},
		{
			x: new Date('2020-03-06T10:30:00').valueOf(),
			y: 6.3,
		},
		{
			x: new Date('2020-03-06T11:30:00').valueOf(),
			y: 6.3,
		},
		{
			x: new Date('2020-03-06T12:30:00').valueOf(),
			y: 6.3,
		},
		{
			x: new Date('2020-03-06T13:30:00').valueOf(),
			y: 6.3,
		},
		{
			x: new Date('2020-03-09T22:30:00').valueOf(),
			y: 6,
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
				// xAxisID: 'top-x-axis',
				// indexAxis: 'x',
				// fill: false,
				// borderWidth: 4,
				// backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'green',
				borderDash: [5, 5],
				// indexAxis: 'x',
				parsing: false,
				normalized: true,
				indexAxis: 'x',
				// showLine: false,
			},
			{
				type: 'line',

				label: 'First dataset',
				data: dateTestObj2,
				// indexAxis: '7',

				// fill: true,
				// backgroundColor: 'rgba(75,192,192,0.2)',
				borderColor: 'rgba(75,192,192,1)',
				parsing: false,
				normalized: true,
				indexAxis: 'x',
			},
			{
				type: 'line',

				label: 'First dataset',
				data: dateTestObj3,
				// indexAxis: '7',

				// fill: true,
				// backgroundColor: 'rgba(75,192,192,0.2)',
				borderColor: 'red',
				borderWidth: 1,
				parsing: false,
				normalized: true,
				indexAxis: 'x',
				// stepped(ctx, options) {
				// 	console.log('options', options)
				// 	console.log('ctx', ctx)
				// 	return undefined
				// },
			},
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
