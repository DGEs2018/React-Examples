import React from 'react';

const Selectoption = (props) => {
	const handleSelectVal = (event) => {
		props.setSelectVal(event.target.value);
	};

	return (
		<div className="select-option" style={{ margin: '50px' }}>
			<label htmlFor="select-id" />
			<select id="select-id" type="text" value={props.selectVal} onChange={handleSelectVal}>
				<option value="firstOption">First</option>
				<option value="secondOption">Second</option>
				<option value="thirdOption">Third</option>
				<option value="fourthOption">Fourth</option>
			</select>
		</div>
	);
};

export default Selectoption;
