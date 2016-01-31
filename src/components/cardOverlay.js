"use strict";

var React = require("react");
var EditOption = require("./editOption");

var CardOverlay = React.createClass({
	render: function () {
		var createOption = function (option) {
			var numberOfOptions = 12 / this.props.cardOptions.length;
			
			return (
				<EditOption numberOfOptions={numberOfOptions} optionName={option.optionName} />
			);
		};

		return (
			<div className="card-overlay">
				{this.props.cardOptions.map(createOption, this)}
			</div>
		);
	}
});

module.exports = CardOverlay;