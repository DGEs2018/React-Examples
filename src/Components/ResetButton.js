import React from 'react';
// import App from '../App';

const Resetbutton = (props) => {
	const handleClearInputs = () => {
		console.log(props);
		props.setTextVal('');
		console.log(props.setTextVal);
		props.setCheckBoxVal('');
		props.setRadioVal('');
		props.setSelectVal('');
	};
	return (
		<div>
			<button onClick={handleClearInputs}>Reset</button>
		</div>
	);
};
export default Resetbutton;
