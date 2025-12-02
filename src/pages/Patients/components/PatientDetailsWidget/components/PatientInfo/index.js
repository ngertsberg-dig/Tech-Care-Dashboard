import React from 'react';
import './index.sass';

const DetailItem = ({ iconSrc, label, value }) => (
	<div className="detail-item">
		<div className="icon-container">
			<img src={iconSrc} alt={`${label} icon`} />
		</div>
		<div className="detail-info">
			<p className="detail-label">{label}</p>
			<p className="detail-value">{value}</p>
		</div>
	</div>
);

const PatientDetailsWidget = ({ selectedPatient }) => {
	if (!selectedPatient) return null;

	const {
		name,
		date_of_birth,
		gender,
		phone_number,
		emergency_contact,
		insurance_type,
		profile_picture,
	} = selectedPatient;

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
		});
	};

	return (
		<div className="patient-details-widget">
			<div className="widget-header">
				<img src={profile_picture} alt={name} className="profile-picture" />
				<h2 className="patient-name">{name}</h2>
			</div>

			<div className="details-list">
				<DetailItem
					label="Date Of Birth"
					value={formatDate(date_of_birth)}
					iconSrc="/images/shared/BirthIcon.png"
				/>

				<DetailItem label="Gender" value={gender} iconSrc="/images/shared/FemaleIcon.png" />

				<DetailItem
					label="Contact Info."
					value={phone_number}
					iconSrc="/images/shared/PhoneIcon.png"
				/>

				<DetailItem
					label="Emergency Contacts"
					value={emergency_contact}
					iconSrc="/images/shared/PhoneIcon.png"
				/>

				<DetailItem
					label="Insurance Provider"
					value={insurance_type}
					iconSrc="/images/shared/InsuranceIcon.png"
				/>
			</div>

			<div className="widget-footer">
				<button className="show-info-btn">Show All Information</button>
			</div>
		</div>
	);
};

export default PatientDetailsWidget;
