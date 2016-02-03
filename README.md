# react-content-card
Content card component in React.js, can be used as a jQuery plugin too.

## Install packages
```
npm install
```

## Run the app
```
gulp
```

## Using jQuery plugin

```javascript
$(selector).contentCard(configuration);
```

### Configuration

```javascript
cards: [{
  cardName: "",
  cardBackground: "",
  cardDescription: "",
  cardIcon: ""
}],
cardOptions: [
  optionName: "",
  optionName: ""
]
```
You can add as many cards as you want. Same for options, although they are meant to fit in one row.
