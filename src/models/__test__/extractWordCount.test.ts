import { TextEvaluator } from '../TextEvaluator';

it('should return word count of a text', () => {
	const text1 = '  This     Is    Sparta     ';
	expect(TextEvaluator.extractWordCount(text1)).toBe(3);

	const text2 = 'ThisIsSparta';
	expect(TextEvaluator.extractWordCount(text2)).toBe(1);

	const text3 = ' ';
	expect(TextEvaluator.extractWordCount(text3)).toBe(0);

	const text4 = '';
	expect(TextEvaluator.extractWordCount(text4)).toBe(0);
});
