"use strict";

var React = require("react");
var CardList = require("./components/cardList");

var ContentCard = React.createClass({
	getInitialState: function () {
		return {
			cards: [{
				cardName: "Risnjak",
				cardClass: "risnjak",
				cardDescription: "Located in Gorski kotar, the most mountainous and heavily forested region of the country.",
				cardIcon: "leaf",
				heartNumber: 12
			},{
				cardName: "Sjeverni Velebit",
				cardClass: "velebit",
				cardDescription: "Covers 109 km2 of the northern section of the Velebit mountain, the largest mountain in Croatia.",
				cardIcon: "tree-deciduous",
				heartNumber: 10
			},{
				cardName: "Plitvicka Jezera",
				cardClass: "jezera",
				cardDescription: "In 1979, it was added to the UNESCO World Heritage register.",
				cardIcon: "tree-conifer",
				heartNumber: 11
			}

			],
			cardOptions: [
				{optionName: "Delete"},
				{optionName: "Open"},
				{optionName: "Print"},
				{optionName: "Share"}
			]
		};
	},

	render: function () {
		return (
			<div>
				<CardList cards={this.state.cards} cardOptions={this.state.cardOptions} />
			</div>
		);
	}
});

React.render(<ContentCard />, document.getElementById("app"));