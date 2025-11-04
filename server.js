'use strict';

const express = require('express')
const expresshbs = require('express-handlebars')
const port = 3001

const app = express();
app.engine('handlebars', expresshbs.engine( { defaultLayout:"main"} ))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({
	extended: true
}));


app.get('/', (req, res) => {
	res.render('home', {
		username: "test"
	});
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

