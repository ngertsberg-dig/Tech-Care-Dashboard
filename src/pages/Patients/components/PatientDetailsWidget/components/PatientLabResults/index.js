import './index.sass';
const PatientLabResults = ({ selectedPatient }) => {
	if (!selectedPatient || !selectedPatient.lab_results) {
		return <div>No patient data available</div>;
	}

	const data = selectedPatient.lab_results;
	return (
		<div className="results-list">
			<div className="results-container">
				<h2 className="section-title">Diagnosis List</h2>
				{data.map((item, index) => (
					<div key={index} className={`result-item `}>
						<div className="result-name">{item}</div>
						<div className="download-icon">
							<img src="/images/shared/download.svg" alt="Download Icon" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PatientLabResults;
