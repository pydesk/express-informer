## Express-Informer
[![npm](https://img.shields.io/npm/v/npm.svg)]() [![npm](https://img.shields.io/npm/l/express.svg)]()

An expressjs utility for development . It logs out your app behavior . You can also set it to log your data in a separate file . This npm module is an express middleware . It can be install via npm and yarn .

## NPM
<code> npm i express-informer --save-dev </code>

## YARN
<code> yarn add express-informer </code>

## Usage

Using express-informer is easy . It goes like this :
```javascript
const express = require('express');
const log = require('../index');
const app = express();
app.use(log({
    logFile: true, // If you want to save the logging in a file
}));
app.get('/', (req, res)=>{
    res.send('It works')
});
app.listen(8000);
```
#### Please don't use icons and logfile options together . It may create some issues in the 'logger.log' file .
Using express-informer with icons or emojis . The code looks like this :
```javascript
const express = require('express');
const log = require('../index');
const app = express();
app.use(log({
    icon: true // It enables icons
}));
app.get('/', (req, res)=>{
    res.send('It works')
});
app.listen(8000);
```
#### Colors :
Using express-informer with icons or emojis . The code looks like this :
```javascript
const express = require('express');
const log = require('../index');
const app = express();
app.use(log({
    icon: true, // It enables icons
    colors: true // Enables colors with icons itself
}));
app.get('/', (req, res)=>{
    res.send('It works')
});
app.listen(8000);
```
