import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './index.sass';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DiagnosisChart = ({ selectedPatient }) => {
	const historyData = selectedPatient.diagnosis_history.slice(0, 6).reverse();

	const data = {
		labels: historyData.map((entry) => `${entry.month.slice(0, 3)}, ${entry.year}`),
		datasets: [
			{
				label: 'Systolic',
				data: historyData.map((entry) => entry.blood_pressure.systolic.value),
				borderColor: '#C26EB4',
				backgroundColor: '#C26EB4',
				pointBackgroundColor: '#C26EB4',
				pointBorderColor: '#fff',
				pointBorderWidth: 1,
				pointRadius: 5,
				tension: 0.4,
			},
			{
				label: 'Diastolic',
				data: historyData.map((entry) => entry.blood_pressure.diastolic.value),
				borderColor: '#7E6CAB',
				backgroundColor: '#7E6CAB',
				pointBackgroundColor: '#7E6CAB',
				pointBorderColor: '#fff',
				pointBorderWidth: 1,
				pointRadius: 5,
				tension: 0.4,
			},
		],
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: false,
			},
		},
		scales: {
			y: {
				min: 60,
				max: 180,
				ticks: {
					stepSize: 20,
				},
				grid: {
					color: '#CBC8D4',
				},
			},
			x: {
				grid: {
					display: false,
				},
			},
		},
	};

	const latestReading = historyData[historyData.length - 1];

	return (
		<div className="chart-container">
			<div className="chart-main">
				<div className="chart-header">
					<h3>Blood Pressure</h3>
					<div className="timeframe-selector">
						<span>Last 6 months</span>
						<img src="/images/shared/expand.png" alt="expand" />{' '}
					</div>
				</div>

				<div className="chart-wrapper">
					<Line data={data} options={options} />
				</div>
			</div>

			<div className="chart-summary">
				<div className="stat-group">
					<div className="stat-header">
						<span className="dot systolic-dot"></span>
						<span className="stat-label">Systolic</span>
					</div>
					<div className="stat-value">{latestReading.blood_pressure.systolic.value}</div>
					<div className="stat-status">
						{latestReading.blood_pressure.systolic.levels === 'Higher than Average'
							? '▲'
							: '▼'}{' '}
						{latestReading.blood_pressure.systolic.levels}
					</div>
				</div>

				<hr className="divider" />

				<div className="stat-group">
					<div className="stat-header">
						<span className="dot diastolic-dot"></span>
						<span className="stat-label">Diastolic</span>
					</div>
					<div className="stat-value">{latestReading.blood_pressure.diastolic.value}</div>
					<div className="stat-status">
						{latestReading.blood_pressure.diastolic.levels === 'Lower than Average'
							? '▼'
							: '▲'}{' '}
						{latestReading.blood_pressure.diastolic.levels}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DiagnosisChart;
