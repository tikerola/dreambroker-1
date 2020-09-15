import request from 'supertest';
import { app } from '../../app';

describe('testing analyze route', () => {
	it('should send status code of 400 if missing text', async () => {
		return request(app).post('/analyze').send({}).expect(400);
	});

	it('should send status code of 200 if text is present', async () => {
		return request(app).post('/analyze').send({ text: 'Hello' }).expect(200);
	});

	it('should send a proper response if text is present', async () => {
		const response = await request(app).post('/analyze').send({ text: 'Hello World' });

		expect(response.body.hasOwnProperty('textLength')).toBe(true);
		expect(response.body.hasOwnProperty('wordCount')).toBe(true);
		expect(response.body.hasOwnProperty('characterCount')).toBe(true);

		expect(response.body.textLength.hasOwnProperty('withSpaces')).toBe(true);
		expect(response.body.textLength.hasOwnProperty('withoutSpaces')).toBe(true);
	});
});

it('should send proper response if text is empty string', async () => {
	const expectedResult = {
		textLength: {
			withSpaces: 0,
			withoutSpaces: 0
		},
		wordCount: 0,
		characterCount: []
	};

	const response = await request(app).post('/analyze').send({ text: '' });

	expect(response.body).toEqual(expectedResult);
});
