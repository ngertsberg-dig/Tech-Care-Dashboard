import PatientSidebarWidget from './components/PatientSidebarWidget';
import DiagnosisWidget from './components/DiagnosisWidget';
import PatientDetailsWidget from './components/PatientDetailsWidget';
import usePatients from './hooks/usePatients';
import './index.sass';
const Patients = () => {
	const { patients, getAge, filterPatients, setSelectedPatient, selectedPatient } = usePatients();
	return (
		<div className="patients-page">
			<PatientSidebarWidget
				patients={patients}
				getAge={getAge}
				filterPatients={filterPatients}
				setSelectedPatient={setSelectedPatient}
				selectedPatient={selectedPatient}
			/>
			<DiagnosisWidget selectedPatient={selectedPatient} />
			<PatientDetailsWidget selectedPatient={selectedPatient} />
		</div>
	);
};

export default Patients;
