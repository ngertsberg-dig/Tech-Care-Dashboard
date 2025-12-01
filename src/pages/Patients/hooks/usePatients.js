import { useState, useEffect } from 'react';

const usePatients = () => {
	const [patients, setPatients] = useState([]);

	useEffect(() => {
		const loadPatients = async () => {
			await fetchPatients();
		};
		loadPatients();
	}, []);

	const fetchPatients = async () => {
		try {
			const username = 'coalition';
			const password = 'skills-test';
			const url = 'https://fedskillstest.coalitiontechnologies.workers.dev';

			const res = await fetch(url, {
				method: 'GET',
				headers: {
					Authorization: 'Basic ' + btoa(`${username}:${password}`),
				},
			});

			const body = await res.json();
			setPatients(body);
		} catch (error) {
			console.log(error);
		}
	};

	const getAge = (birthDate) => {
		const today = new Date();
		const birth = new Date(birthDate);
		let age = today.getFullYear() - birth.getFullYear();

		const monthDiff = today.getMonth() - birth.getMonth();
		const dayDiff = today.getDate() - birth.getDate();

		if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
			age--;
		}

		return age;
	};

	const filterPatients = (searchTerm) => {
		if (!searchTerm) {
			return patients;
		}
		return patients.filter((patient) =>
			patient.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
	};

	return {
		filterPatients,
		patients,
		getAge,
	};
};

export default usePatients;
