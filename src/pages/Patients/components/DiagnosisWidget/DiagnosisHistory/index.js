import DiagnosisChart from '../DiganosisChart';
import PatientMetricBaseCard from '../PatientMetricBaseCard';
import './index.sass';

const DiagnosisHistory = ({ selectedPatient }) => {
	if (!selectedPatient || !selectedPatient.diagnosis_history) {
		return <div>No patient data available</div>;
	}

	const metrics = selectedPatient.diagnosis_history[0];

	return (
		<div className="diagnosis-history">
			<h2 className="section-title">Diagnosis History</h2>
			<DiagnosisChart selectedPatient={selectedPatient} />

			<div className="patient-cards">
				<PatientMetricBaseCard
					iconPath="/images/Diagnosis/respiratoryrate.png"
					title="Respiration Rate"
					description={`${metrics.respiratory_rate.value} bpm`}
					level={metrics.respiratory_rate.levels}
				/>
				<PatientMetricBaseCard
					iconPath="/images/Diagnosis/temperature.png"
					title="Temperature"
					description={`${metrics.temperature.value}°F`}
					level={metrics.temperature.levels}
				/>
				<PatientMetricBaseCard
					iconPath="/images/Diagnosis/HeartBPM.png"
					title="Heart Rate"
					description={`${metrics.heart_rate.value} bpm`}
					level={metrics.heart_rate.levels}
				/>
			</div>
		</div>
	);
};

export default DiagnosisHistory;
