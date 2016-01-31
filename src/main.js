"use strict";

var React = require("react");
var CardList = require("./components/cardList");

var ContentCard = React.createClass({
	getInitialState: function () {
		return {
			cards: [
				{cardName: "Risnjak", cardClass: "risnjak", cardDescription: "Risnjak bla bla bla bla"},
				{cardName: "Sjeverni Velebit", cardClass: "velebit", cardDescription: "Sjeverni Velebit bla bla bla bla"},
				{cardName: "Plitvicka Jezera", cardClass: "jezera", cardDescription: "Plitvicka Jezera bla bla bla bla"}
			]
		};
	},

	render: function () {
		return (
			<div>
				<CardList cards={this.state.cards} />
			</div>
		);
	}
});

React.render(<ContentCard />, document.getElementById("app"));