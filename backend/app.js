require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World'));

// paystack request
app.get('/paystack', (req, res) => {
	const https = require('https');

	const params = JSON.stringify({
		email: 'customer@email.com',
		amount: '20000',
	});

	const options = {
		hostname: 'api.paystack.co',
		port: 443,
		path: '/transaction/initialize',
		method: 'POST',
		headers: {
			Authorization:
				'Bearer sk_test_f290f0862eada518ff85df44dfe8a65d81101c16',
			'Content-Type': 'application/json',
		},
	};

	const reqpaystack = https
		.request(options, (respaystack) => {
			let data = '';

			respaystack.on('data', (chunk) => {
				data += chunk;
			});

			respaystack.on('end', () => {
				res.send(data);
				console.log(JSON.parse(data));
			});
		})
		.on('error', (error) => {
			console.error(error);
		});

	reqpaystack.write(params);
	reqpaystack.end();
});

app.use(express.static('./public'));

const port = 5000;

const start = async () => {
	try {
		app.listen(port, console.log(`Server is running on ${port}`));
	} catch (error) {
		console.log(error);
	}
};
start();
