"use strict";

var React = require("react");

var CardList = React.createClass({
	render: function () {
		var createCard = function (card) {
			return (
				<div className={"col-sm-12 col-md-6 col-lg-4 text-center card-wrapper " + card.cardClass}>
					<div className="row">
						<header className="col-sm-12">
							<h1>{card.cardName}</h1>
						</header>
					</div>

					<div className="row">
						<div className="col-sm-12">
							<p>{card.cardDescription}</p>
						</div>
					</div>
				</div>
			);
		};

		return (
			<div>
				{this.props.cards.map(createCard, this)}
			</div>
		);
	}
});

module.exports = CardList;