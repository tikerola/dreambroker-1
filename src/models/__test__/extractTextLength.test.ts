import { TextEvaluator } from '../TextEvaluator';

it('should count length of a text with and without whitespaces', () => {
	const text1 = 'this is sparta';
	const expectedResult1 = {
		withSpaces: 14,
		withoutSpaces: 12
	};

	expect(TextEvaluator.extractTextLength(text1)).toEqual(expectedResult1);

	const text2 = ' Show Me    The  Money ';
	const expectedResult2 = {
		withSpaces: 23,
		withoutSpaces: 14
	};

	expect(TextEvaluator.extractTextLength(text2)).toEqual(expectedResult2);

	const text3 = 'IamAnElephant';
	const expectedResult3 = {
		withSpaces: 13,
		withoutSpaces: 13
	};

	expect(TextEvaluator.extractTextLength(text3)).toEqual(expectedResult3);

	const text4 = ' ';
	const expectedResult4 = {
		withSpaces: 1,
		withoutSpaces: 0
	};

	expect(TextEvaluator.extractTextLength(text4)).toEqual(expectedResult4);

	const text5 = '';
	const expectedResult5 = {
		withSpaces: 0,
		withoutSpaces: 0
	};

	expect(TextEvaluator.extractTextLength(text5)).toEqual(expectedResult5);
});
