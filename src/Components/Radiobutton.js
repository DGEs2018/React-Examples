import React from 'react';

const Radiobutton = (props) => {
	const handleRadioVal = (event) => {
		console.log(props); // checked to see what's contained within the props, right before the line where the error is revealed
		props.setRadioVal(event.target.value);
	};
	return (
		<div className="radiobutton" style={{ margin: '50px' }}>
			<div>
				<label htmlFor="radio-id">Choose from</label>
				<input
					id="radio-id"
					type="radio"
					value="Yes"
					name="Pinnochio"
					onChange={handleRadioVal}
					checked={props.radioVal === 'Yes'}
				/>
				<input
					type="radio"
					value="No"
					name="Pinnochio"
					onChange={handleRadioVal}
					checked={props.radioVal === 'No'}
				/>
				<input
					type="radio"
					value="Maybe"
					name="Pinnochio"
					onChange={handleRadioVal}
					checked={props.radioVal === 'Maybe'}
				/>
				<div
					style={{
						display: 'inline-block',
						width: '50px',
						height: '50px',
						backgroundColor: 'ghostWhite',
						border: '1px solid grey'
					}}
				>
					{props.radioVal}
				</div>
			</div>
		</div>
	);
};

export default Radiobutton;
