"use strict";

var React = require("react");
var CardList = require("./components/cardList");
var CardStore = require("./stores/cardStore");

var ContentCard = React.createClass({
    getInitialState: function () {
        return {
            cards: [{
                cardId: 1,
                cardName: "Risnjak",
                cardClass: "risnjak",
                cardDescription: "Located in Gorski kotar, the most mountainous and heavily forested region of the country.",
                cardIcon: "leaf",
                heartNumber: 12
            }, {
                cardId: 2,
                cardName: "Sjeverni Velebit",
                cardClass: "velebit",
                cardDescription: "Covers 109 km2 of the northern section of the Velebit mountain, the largest mountain in Croatia.",
                cardIcon: "tree-deciduous",
                heartNumber: 10
            }, {
                cardId: 3,
                cardName: "Plitvicka Jezera",
                cardClass: "jezera",
                cardDescription: "In 1979, it was added to the UNESCO World Heritage register.",
                cardIcon: "tree-conifer",
                heartNumber: 11
            }],
            cardOptions: [
                {optionName: "Delete"},
                {optionName: "Open"},
                {optionName: "Print"},
                {optionName: "Share"}
            ]
        };
    },

    componentWillMount: function () {
        CardStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        CardStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        var cardsCopy = this.state.cards.slice(),
            cardToUpdate = CardStore.getUpdatedCard(),
            id = cardToUpdate.cardId - 1;

         cardsCopy[id] = cardToUpdate;

         this.setState({
            cards: cardsCopy
         });
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