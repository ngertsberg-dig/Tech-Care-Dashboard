import './index.sass';
const DiagnosisList = ({ selectedPatient }) => {
	if (!selectedPatient || !selectedPatient.diagnostic_list) {
		return <div>No patient data available</div>;
	}
	const { diagnostic_list } = selectedPatient;
	return (
		<div className="diagnosis-list">
			<h2 className="section-title">Diagnosis List</h2>

			<div className="diagnosis-table">
				<div className="table-header">
					<div>Problem/Diagnosis</div>
					<div>Description</div>
					<div>Status</div>
				</div>
				<div className="table-body">
					{diagnostic_list.map((item, index) => (
						<div key={index} className="table-row">
							<div>{item.name}</div>
							<div>{item.description}</div>
							<div className={`status`}>{item.status}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default DiagnosisList;
