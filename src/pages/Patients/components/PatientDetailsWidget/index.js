import PatientInfo from './components/PatientInfo';
import PatientLabResults from './components/PatientLabResults';
import './index.sass';
const PatientDetailsWidget = ({ selectedPatient }) => {
	return (
		<div className="patient-details-widget-container">
			<PatientInfo selectedPatient={selectedPatient} />
			<PatientLabResults selectedPatient={selectedPatient} />
		</div>
	);
};

export default PatientDetailsWidget;
