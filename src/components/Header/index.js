import React from 'react';
import './index.sass';
import Ellipsis from '../shared/Ellipsis';

const navLinks = [
	{
		id: 'overview',
		label: 'Overview',
		icon: '/images/Header/home.png',
	},
	{
		id: 'patients',
		label: 'Patients',
		icon: '/images/Header/group.png',
	},
	{
		id: 'schedule',
		label: 'Schedule',
		icon: '/images/Header/calendar.png',
	},
	{ id: 'message', label: 'Message', icon: '/images/Header/chatbubble.png' },
	{
		id: 'transactions',
		label: 'Transactions',
		icon: '/images/Header/creditcard.png',
	},
];

const Header = () => {
	const activeTab = 'patients';

	return (
		<header className="header-bar">
			<div className="logo-section">
				<img src="/images/Header/TestLogo.svg" alt="TechCare Logo" className="logo-image" />
			</div>

			<nav className="nav-tabs">
				{navLinks.map((link) => (
					<div
						key={link.id}
						className={`nav-item ${link.id === activeTab ? 'nav-item--active' : ''}`}
					>
						<img src={link.icon} alt={link.label} className="nav-icon" />
						<span className="nav-label">{link.label}</span>
					</div>
				))}
			</nav>

			<div className="user-controls">
				<div className="profile-info">
					<img
						src="/images/Header/doctor.png"
						alt="Dr. Jose Simmons"
						className="profile-picture"
					/>
					<div className="text-group">
						<span className="profile-name">Dr. Jose Simmons</span>
						<span className="profile-title">General Practitioner</span>
					</div>
				</div>

				<div className="settings-cog">
					<img src="/images/Header/settings.png" alt="Settings" className="cog-icon" />
				</div>

				<div className="more-options">
					<Ellipsis direction="vertical" />
				</div>
			</div>
		</header>
	);
};

export default Header;
