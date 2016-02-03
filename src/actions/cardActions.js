"use strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");

var CardActions = {
    voteUp: function (cardIndex, heartNumber) {
        heartNumber = heartNumber + 1;

        Dispatcher.dispatch({
            actionType: ActionTypes.VOTE_UP,
            data: {
                cardIndex: cardIndex,
                heartNumber: heartNumber
            }
        });
    }
};

module.exports = CardActions;
