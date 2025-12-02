import Patients from '../Patients';
import Header from '../../components/Header';
import './index.sass';
//default creat-react-app css
import './index.css';
const App = () => {
	return (
		<div id="App">
			<Header />
			<Patients />
		</div>
	);
};

export default App;
