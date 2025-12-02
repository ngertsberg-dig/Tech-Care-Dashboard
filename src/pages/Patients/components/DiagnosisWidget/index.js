import DiagnosisHistory from './DiagnosisHistory';
import DiagnosisList from './DiagnosisList';
import './index.sass';
const DiagnosisWidget = ({ selectedPatient }) => {
	return (
		<div className="diagnosis-widget">
			<DiagnosisHistory selectedPatient={selectedPatient} />
			<DiagnosisList selectedPatient={selectedPatient} />
		</div>
	);
};

export default DiagnosisWidget;
