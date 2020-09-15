import { TextEvaluator } from '../TextEvaluator';

it('should extract characters and sort the response array by object keys', () => {
	const text1 = 'hello 2 times  ';
	const expectedResult1 = [ { e: 2 }, { h: 1 }, { i: 1 }, { l: 2 }, { m: 1 }, { o: 1 }, { s: 1 }, { t: 1 } ];

	expect(TextEvaluator.extractCharacterCount(text1)).toEqual(expectedResult1);

	const text2 = 'HelLo 2 tiMEs  ';
	const expectedResult2 = [ { e: 2 }, { h: 1 }, { i: 1 }, { l: 2 }, { m: 1 }, { o: 1 }, { s: 1 }, { t: 1 } ];

	expect(TextEvaluator.extractCharacterCount(text2)).toEqual(expectedResult2);

	const text3 = ' ';
	const expectedResult3: [] = [];

	expect(TextEvaluator.extractCharacterCount(text3)).toEqual(expectedResult3);
});
