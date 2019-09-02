import React, { useState } from 'react';
import Input from './Components/Input';
import Checkbox from './Components/Checkbox';
import Radiobutton from './Components/Radiobutton';
import Selectoption from './Components/Selectoption';
import ResetButton from './Components/ResetButton';
import InputDisplayer from './Components/InputDisplayer';

const App = () => {
	const [ textVal, setTextVal ] = useState('');
	const [ radioVal, setRadioVal ] = useState('');
	const [ checkBoxVal, setCheckBoxVal ] = useState('');
	const [ selectVal, setSelectVal ] = useState('');

	const handleClearInputs = () => {
		// console.log(props);
		setTextVal('');
		console.log(setTextVal);
		setCheckBoxVal('');
		setRadioVal('');
		setSelectVal('');
	};

	return (
		<div className="app">
			<Input textVal={textVal} setTextVal={setTextVal} />
			<Checkbox checkBoxVal={checkBoxVal} setCheckBoxVal={setCheckBoxVal} />
			<Radiobutton radioVal={radioVal} setRadioVal={setRadioVal} />
			<Selectoption selectVal={selectVal} setSelectVal={setSelectVal} />
			<button
				onClick={handleClearInputs}
				// setTextVal={setTextVal}
				// setCheckBoxVal={setCheckBoxVal}
				// setRadioVal={setRadioVal}
				// setSelectVal={setSelectVal}
			>
				Reset
			</button>
			<InputDisplayer
				textVal={textVal}
				setTextVal={setTextVal}
				radioVal={radioVal}
				setRadioVal={setRadioVal}
				checkBoxVal={checkBoxVal}
				setCheckBoxVal={setCheckBoxVal}
				selectVal={selectVal}
				setSelectVal={setSelectVal}
			/>
		</div>
	);
};

export default App;

// let x = 5

// <p>x</p>

// <button onClick={x+=1}></button>
