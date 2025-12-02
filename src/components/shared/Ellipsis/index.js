import React from 'react';
import './index.sass';

const Ellipsis = ({ direction = 'horizontal' }) => {
	const classNames =
		direction === 'vertical' ? 'ellipsis ellipsis--vertical' : 'ellipsis ellipsis--horizontal';

	return (
		<div className={classNames}>
			<span className="dot"></span>
			<span className="dot"></span>
			<span className="dot"></span>
		</div>
	);
};

export default Ellipsis;
