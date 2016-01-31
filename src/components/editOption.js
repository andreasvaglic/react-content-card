"use strict";

var React = require("react");

var EditOption = React.createClass({
	render: function () {
		return (
			<div className={"overlay-option col-sm-" + this.props.numberOfOptions}>
				{this.props.optionName}
			</div>
		);
	}
});

module.exports = EditOption;