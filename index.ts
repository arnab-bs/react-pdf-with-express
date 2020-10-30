const express = require('express');
const bodyParser = require('body-parser');
const React = require('react');
import Template from './test';
const dotenv = require('dotenv');
const morgan = require('morgan');
import { Document, pdf } from '@react-pdf/renderer';
dotenv.config();

const app = express();
app.use(morgan('dev'));
const port = process.env.PORT || 5000;

app.use('/api', async (req: any, res: any) => {
	const template = React.createElement(Document, { title: 'mypfs' }, null);
	const template2 = React.createElement(Template, null, null);

	try {
		let blobPDF = await pdf(template);
		// let data = await blobPDF.toBlob();
		console.log(blobPDF, 'blobPDF');
	} catch (error) {
		console.log(error, 'error');
	}
});

app.listen(port, () => console.log(`Listening on port ${port}`));
