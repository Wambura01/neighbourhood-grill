import React from 'react';

import FOOD_DATA from './food.data';

import CollectionPreview from '../../Components/Collection-Preview/collection-preview.component';

import './shop.scss';

class ShopPage extends React.Component {
	constructor() {
		super();

		this.state = {
			collections: FOOD_DATA,
		};
	}

	render() {
		const { collections } = this.state;
		return (
			<div className="shop-page">
				{collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))}
			</div>
		);
	}
}

export default ShopPage;
