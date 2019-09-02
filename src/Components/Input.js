import React from 'react';

const Input = (props) => {
	const handleTextVal = (event) => {
		props.setTextVal(event.target.value);
	};

	return (
		<div>
			<div className="input" style={{ margin: '50px' }}>
				<h2>Play with functional components in ReactJS!</h2>
				<label htmlFor="input">label</label>
				<input id="input" type="text" value={props.textVal} onChange={handleTextVal} />
			</div>
		</div>
	);
};

export default Input;
