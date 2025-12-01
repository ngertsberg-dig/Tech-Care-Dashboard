import { useState, useEffect, useRef } from 'react';
import './index.sass';
const PatientSidebar = ({ patients, getAge, filterPatients }) => {
	const [searchBarActive, setSearchBarActive] = useState(false);
	const [filteredPatients, setFilteredPatients] = useState(patients);
	const inputRef = useRef(null);

	useEffect(() => {
		setFilteredPatients(patients);
	}, [patients]);

	useEffect(() => {
		searchBarActive ? inputRef?.current?.focus() : setFilteredPatients(patients);
	}, [searchBarActive, patients]);

	const handleFilterPatients = (searchTerm) => {
		const results = filterPatients(searchTerm);
		setFilteredPatients(results);
	};

	return (
		<div className="patient-sidebar">
			<div className="patient-container">
				<div className="patient-sidebar-top">
					<h2>Patients</h2>
					<img
						src="/images/Header/search_icon.svg"
						alt="Search Icon"
						className="search-icon"
						width="20"
						height="20"
						onClick={() => setSearchBarActive(!searchBarActive)}
					/>
					{searchBarActive && (
						<div className="patient-search-bar">
							<input
								type="text"
								placeholder="Search patients..."
								onChange={(e) => handleFilterPatients(e.target.value)}
								ref={inputRef}
							/>
						</div>
					)}
				</div>
				<div className="patient-list">
					{filteredPatients?.map((patient, index) => (
						<div key={index} className="patient-item">
							<div className="single-patient-container">
								<div class="single-patient-info">
									<div className="single-patient-avatar">
										<img
											src={patient.profile_picture}
											alt="Patient Avatar"
											width="48"
											height="48"
										/>
									</div>
									<div className="single-patient-text-info">
										<h3>{patient.name}</h3>
										<div className="patient-details">
											<p>
												{patient.gender}, {getAge(patient.date_of_birth)}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PatientSidebar;
