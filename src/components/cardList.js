"use strict";

var React = require("react");
var CardOverlay = require("./cardOverlay");
var CardActions = require("../actions/cardActions");

var CardList = React.createClass({
    voteUp: function (card) {
        CardActions.voteUp(card);
    },

    render: function () {
        var createCard = function (card) {
            return (
                <div className={"col-sm-12 col-md-6 col-lg-4 text-center card-wrapper " + card.cardClass}>
                        
                    <header className="row">
                        <div className="col-sm-2">
                            <span className={"card-icon glyphicon glyphicon-" + card.cardIcon}></span>
                        </div>
                        
                        <div className="col-sm-8">
                            <h1>{card.cardName}</h1>
                        </div>
                        
                        <div className="col-sm-2">
                            <span className="glyphicon glyphicon-heart card-heart card-icon" onClick={this.voteUp.bind(this, card)}></span>
                            <span className="card-heart-number">{card.heartNumber}</span>
                        </div>
                    </header>

                    <div className="row">
                        <div className="col-sm-12 card-description-wrapper">
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