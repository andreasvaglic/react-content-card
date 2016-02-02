"use strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");
var EventEmitter = require("events").EventEmitter;
var assign = require("Object-assign");

var CLICK_EVENT = "click",
    card = {};

var CardStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on(CLICK_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CLICK_EVENT, callback);
    },

    emitChange: function () {
        this.emit(CLICK_EVENT);
    },

    getUpdatedCard: function () {
        return card;
    }
});

Dispatcher.register(function (action) {
    switch (action.actionType) {
        case ActionTypes.VOTE_UP:
                card = action.card;
                CardStore.emitChange();
                break;
        default:
        // no op
    }
});

module.exports = CardStore;
