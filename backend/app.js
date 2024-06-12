require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World'));

const port = 5000;

const start = async () => {
	try {
		app.listen(port, console.log(`Server is running on ${port}`));
	} catch (error) {
		console.log(error);
	}
};
start();
