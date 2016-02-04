/* eslint-disable */ //Disabling check because we can't run strict mode. Need global vars.

var React = require("react");
var CardList = require("./components/cardList");
var CardStore = require("./stores/cardStore");
$ = jQuery = require("jquery");

var ContentCard = React.createClass({
    getInitialState: function () {
        var i,
            states = { heartNumbers: [] },
            cardsNumber = this.props.cards.length;

        for (i = 0; i < cardsNumber; i++) {
            states.heartNumbers[i] = 0;
        }
        return states;
    },

    componentWillMount: function () {
        CardStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        CardStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        var updatedCard = CardStore.getUpdatedCard(),
            cardIndex = updatedCard.cardIndex,
            heartNumber = updatedCard.heartNumber,
            heartNumbersCopy = this.state.heartNumbers.slice();

        heartNumbersCopy[cardIndex] = heartNumber;

        this.setState({
            heartNumbers: heartNumbersCopy
        });
    },

    render: function () {
        return (
            <div>
                <CardList cards={this.props.cards} cardOptions={this.props.cardOptions} heartNumbers={this.state.heartNumbers} />
            </div>
        );
    }
});

// jQuery Plugin
if (typeof jQuery !== "undefined") {
    (function ($){
        var pluginName = "contentCard",
            defaults = {
                cards: [{
                    cardName: "Risnjak",
                    cardBackground: "../images/risnjak.jpg",
                    cardDescription: "Located in Gorski kotar, the most mountainous and heavily forested region of the country.",
                    cardIcon: "leaf"
                }, {
                    cardName: "Sjeverni Velebit",
                    cardBackground: "../images/svelebit.jpg",
                    cardDescription: "Covers 109 km2 of the northern section of the Velebit mountain, the largest mountain in Croatia.",
                    cardIcon: "tree-deciduous"
                }, {
                    cardName: "Plitvicka Jezera",
                    cardBackground: "../images/pjezera.jpg",
                    cardDescription: "In 1979, it was added to the UNESCO World Heritage register.",
                    cardIcon: "tree-conifer"
                }],
                cardOptions: [{
                    optionName: "Delete"
                }, {
                    optionName: "Open"
                }, {
                    optionName: "Share"
                }]
            };

        function Plugin (element, options) {
            this.element = element;
            this.settings = $.extend({}, defaults, options);
            this._defaults = defaults;
            this._name = pluginName;
            this.init();
        }

        $.extend(Plugin.prototype, {
            init: function () {
                this.component = React.render(
                    <ContentCard cards={this.settings.cards} cardOptions={this.settings.cardOptions} />,
                    this.element
                );

                return this;
            }
        });

        $.fn[pluginName] = function (options) {
            return this.map(function () {
                if (!$.data(this, "plugin_" + pluginName)) {
                    $.data(this, "plugin_" + pluginName, new Plugin(this, options));
                }
                return $.data(this, "plugin_" + pluginName);
            });
        };

    })(jQuery);
}