"use strict";

var React = require("react");
var CardOverlay = require("./cardOverlay");
var CardActions = require("../actions/cardActions");

var CardList = React.createClass({
    voteUp: function (cardIndex, heartNumber) {
        CardActions.voteUp(cardIndex, heartNumber);
    },

    render: function () {
        var createCard = function (card, index) {
            var cardStyle = {
                    backgroundImage: "url(" + card.cardBackground + ")"
                },
                heartNumber = this.props.heartNumbers[index];

            return (
                <div className="col-xs-12 col-md-6 col-lg-4 text-center card-wrapper" style={cardStyle}>
                    <header className="row">
                        <div className="col-xs-3">
                            <span className={"card-icon glyphicon glyphicon-" + card.cardIcon}></span>
                        </div>
                        
                        <div className="col-xs-6">
                            <h1>{card.cardName}</h1>
                        </div>
                        
                        <div className="col-xs-3">
                            <span className="glyphicon glyphicon-heart card-heart card-icon" onClick={this.voteUp.bind(this, index, heartNumber)}></span>
                            <span className="card-heart-number">{heartNumber}</span>
                        </div>
                    </header>

                    <div className="row">
                        <div className="col-xs-12 card-description-wrapper">
                            <p className="card-description">{card.cardDescription}</p>
                        </div>
                    </div>

                    <div className="row">
                        <CardOverlay cardOptions={this.props.cardOptions} />
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