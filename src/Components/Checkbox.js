import React from 'react';

const Checkbox = (props) => {
	const handleCheckBoxVal = () => {
		props.setCheckBoxVal(!props.checkBoxVal);
	};
	return (
		<div className="checkbox" id="check-id" style={{ margin: '50px' }}>
			<label htmlFor="check-id">Are you checked ?</label>
			<input id="check-id" type="checkbox" checked={props.checkBoxVal} onChange={handleCheckBoxVal} />
		</div>
	);
};

export default Checkbox;
