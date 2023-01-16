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

import { Line } from 'react-chartjs-2'

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

	// const scales = {
	// 	x: {
	// 		position: 'bottom',
	// 		type: 'time',
	// 		ticks: {
	// 			autoSkip: true,
	// 			autoSkipPadding: 50,
	// 			maxRotation: 0,
	// 		},
	// 		time: {
	// 			displayFormats: {
	// 				hour: 'HH:mm',
	// 				minute: 'HH:mm',
	// 				second: 'HH:mm:ss',
	// 			},
	// 		},
	// 	},
	// 	y: {
	// 		position: 'left',
	// 		ticks: {
	// 			callback: (val: any, index: any, ticks: any) =>
	// 				index === 0 || index === ticks.length - 1 ? null : val,
	// 		},
	// 		grid: {
	// 			borderColor: 'blue',
	// 			color: 'rgba( 0, 0, 0, 0.1)',
	// 		},
	// 		title: {
	// 			display: true,
	// 			text: (ctx: any) => ctx.scale.axis + ' axis',
	// 		},
	// 	},
	// }

	const optionsTest2: ChartOptions<'line'> = {
		responsive: true,
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
					//
					x: {
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
				position: 'left',
				ticks: {
					callback: (val: any, index: any, ticks: any) => {
						//yAxis level
						return index === 0 || index === ticks.length - 1 ? null : val
					},
				},
				grid: {
					color: 'none',
					display: false,
				},
				// grid: {
				// 	borderColor: 'blue',
				// 	color: 'rgba( 0, 0, 0, 0.1)',
				// },
				title: {
					display: true,
					// text: (ctx: any) => ctx.scale.axis + ' axis',
					text: 'yAxis',
				},
				// ticks: {
				// 	autoSkip: true,
				// 	// maxTicksLimit: 10,
				// 	//   beginAtZero: true,
				// },
				// grid: {
				// 	display: true,
				// },
				// gridLines: {
				//   display: false,
				// },
			},
			x: {
				position: 'bottom',
				type: 'timeseries',
				ticks: {
					autoSkip: true,
					autoSkipPadding: 50,
					maxRotation: 0,
					major: {
						enabled: true,
					},
					mirror: true,
				},
				time: {
					displayFormats: {
						hour: 'HH:mm',
						minute: 'HH:mm',
						// second: 'HH:mm:ss',
					},
					// unit: 'year',
					// parser: 'yyyy-MM-dd',
					// unit: 'month',
				},

				// grid: {
				// 	display: false,
				// },
				// adapters: {
				// 	date: { locale: enGB },
				// },
				// type: 'time',
				// adapters: {
				// 	date: { locale: enGB },
				// },
				// time: {
				// 	parser: 'yyyy-MM-dd',
				// 	unit: 'month',
				// },
				// title: {
				// 	display: true,
				// 	text: 'Date xAxes',
				// },
			},
			x1: {
				position: 'top',
				type: 'timeseries',
				ticks: {
					autoSkip: true,
					autoSkipPadding: 50,
					maxRotation: 0,
					major: {
						enabled: true,
					},
					mirror: true,
				},
				time: {
					displayFormats: {
						hour: 'HH:mm',
						minute: 'HH:mm',
						// second: 'HH:mm:ss',
					},
					// unit: 'year',
					// parser: 'yyyy-MM-dd',
					// unit: 'month',
				},

				// grid: {
				// 	display: false,
				// },
				// adapters: {
				// 	date: { locale: enGB },
				// },
				// type: 'time',
				// adapters: {
				// 	date: { locale: enGB },
				// },
				// time: {
				// 	parser: 'yyyy-MM-dd',
				// 	unit: 'month',
				// },
				// title: {
				// 	display: true,
				// 	text: 'Date xAxes',
				// },
			},
		},
	}

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
				label: '# of Calories Lost',
				// y-axis data plotting values
				data: funcClosure()(),
				fill: false,
				borderWidth: 4,
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'green',
				//   responsive:true
			},
			{
				label: 'First dataset',
				data: funcClosure()(),
				fill: true,
				backgroundColor: 'rgba(75,192,192,0.2)',
				borderColor: 'rgba(75,192,192,1)',
			},
		],
	}
	console.log('RENDER')
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
