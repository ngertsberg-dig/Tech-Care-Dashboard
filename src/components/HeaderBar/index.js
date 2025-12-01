import TestLogo from './TestLogo.svg';
import './index.sass';
const HeaderBar = () => {
	return (
		<header className="header-bar">
			<div className="header-container">
				<div className="header-logo">
					<img src={TestLogo} alt="App Logo" className="logo" width="210" height="48px" />
				</div>
			</div>
		</header>
	);
};

export default HeaderBar;
