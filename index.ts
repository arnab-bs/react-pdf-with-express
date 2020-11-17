const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const fs = require('fs');
var path = require('path');
const ejs = require('ejs');
const pdf = require('html-pdf');
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));
const port = process.env.PORT || 5000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, './')));

app.get('/', async (req: any, res: any) => {
	const { map, building, road, total } = req.body;
	const data = {
		font: {
			color: 'green',
			include: 'https://api.****.com/parser/v3/css/combined?face=Kruti%20Dev%20010,Calibri,DevLys%20010,Arial,Times%20New%20Roman',
		},
		map,
		building,
		road,
		total,
	};

	try {
		const filePathName = path.resolve(__dirname, './views/flood.ejs');
		let options = { format: 'A4' };
		const ejsData = (await ejs.renderFile(filePathName, data)).toString();

		// const htmlString = fs.readFileSync(filePathName).toString();

		await pdf.create(ejsData, options).toFile('generatedfile.pdf', (err: any, response: any) => {
			if (err) return console.log(err);
			console.log(response, '11111111');
		});
		res.render(filePathName, data);
	} catch (err) {
		console.log('Error processing request: ' + err);
	}

});

app.listen(port, () => console.log(`Listening on port ${port}`));
