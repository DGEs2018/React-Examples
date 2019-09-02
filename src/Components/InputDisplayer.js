import React from 'react';
import Input from './Input';
import Checkbox from './Checkbox';
import Radiobutton from './Radiobutton';
import Selectoption from './Selectoption';

const InputDisplayer = (props) => {
	const inputConsoleLogger = () => {
		console.log(props.textVal);
		console.log(props.checkBoxVal);
		console.log(props.radioVal);
		console.log(props.selectVal);
	};
	return (
		<div className="Input-displayer-btn">
			<button onClick={inputConsoleLogger}>Show All Vals in console</button>
		</div>
	);
};

export default InputDisplayer;
