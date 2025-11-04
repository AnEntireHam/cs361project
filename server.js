'use strict';

const express = require('express');
const fs = require('fs').promises;
const expresshbs = require('express-handlebars');
const port = 3001

const app = express(); app.engine('handlebars', expresshbs.engine( { defaultLayout:"main"} ));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(express.urlencoded({
	extended: true
}));


app.get('/', (_, res) => {
	res.render('home', {
		username: "test"
	});
})

app.get('/add', (_, res) => {
	res.render('add', {});
})

app.post('/add', (req, res) => {

	})

app.get('/cards', async (_, res) => {
	try {

		let data = await fs.readFile("./data.json", "utf-8");
		data = JSON.parse(data)
		data = data["cards"]
		console.log("Loaded data: " + data)
		res.render('cards', {
			cards: data
		});

	} catch (err) {
		res.status(500).send("Server error");
		console.log(err)
	}
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

