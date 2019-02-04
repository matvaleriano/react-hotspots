module.exports = {
  "extends": "airbnb",
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
    "jest": true
  },
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ]
  },
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true,
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  }
};