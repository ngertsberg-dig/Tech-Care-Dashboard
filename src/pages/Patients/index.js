import PatientSidebar from './components/PatientSidebar';
import usePatients from './hooks/usePatients';
import './index.sass';
const Patients = () => {
	const { patients, getAge, filterPatients } = usePatients();
	return (
		<div className="patients-page">
			<PatientSidebar patients={patients} getAge={getAge} filterPatients={filterPatients} />
		</div>
	);
};

export default Patients;
