import Patients from '../Patients';
import HeaderBar from '../../components/HeaderBar';
import './index.sass';
//default creat-react-app css
import './index.css';
const App = () => {
	return (
		<div id="App">
			<HeaderBar />
			<Patients />
		</div>
	);
};

export default App;
