import React from 'react';
import ReactPDF, { pdf, BlobProvider, Page, Text, View, Document, Image, StyleSheet } from '@react-pdf/renderer';

const Template: React.FC = () => {
	return (
		<Page size='A4'>
			<View>
				<Text>asdadasdasdasdasdas</Text>
			</View>
		</Page>
	);
};

export default Template;
