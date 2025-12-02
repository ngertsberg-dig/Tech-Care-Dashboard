import './index.sass';
const PatientMetricBaseCard = ({ iconPath, title, description, level }) => {
	return (
		<div className="single-metric-card">
			<div className="top-logo">
				<img src={iconPath} alt="metric-icon" width="96" />
			</div>
			<div className="middle">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div className="bottom">
				<div className="stat-status">
					{level === 'Lower than Average' ? '▼' : ''}
					{level === 'Higher than Average' ? '▲' : ''}
					<p>{level}</p>
				</div>
			</div>
		</div>
	);
};

export default PatientMetricBaseCard;
