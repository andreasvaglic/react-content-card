"use strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");

var CardActions = {
        voteUp: function (card) {
            card.heartNumber = card.heartNumber + 1;

            Dispatcher.dispatch({
                actionType: ActionTypes.VOTE_UP,
                card: card
            });
        }
};

module.exports = CardActions;
