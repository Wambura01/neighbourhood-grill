import React from 'react';

import MenuItem from '../Menu-Item/menu-item.component';

import './directory.scss';

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: 'starters',
					imageUrl: 'https://i.ibb.co/YT9tV40/sausages.jpg',
					id: 1,
					linkUrl: 'starters',
				},
				{
					title: 'sides',
					imageUrl: 'https://i.ibb.co/hCmKQSM/fries.jpg',
					id: 2,
					linkUrl: 'sides',
				},
				{
					title: 'platters',
					imageUrl: 'https://i.ibb.co/pwPx5Cq/platter.jpg',
					id: 3,
					linkUrl: 'platters',
				},
				{
					title: 'chicken',
					imageUrl: 'https://i.ibb.co/rsVGdqX/fried-chicken.jpg',
					size: 'large',
					id: 4,
					linkUrl: 'chicken',
				},
				{
					title: 'pork',
					imageUrl: 'https://i.ibb.co/xjkcKk0/pork-ribs.jpg',
					size: 'large',
					id: 5,
					linkUrl: 'pork',
				},
			],
		};
	}

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}

export default Directory;
