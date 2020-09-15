/* Types */

type TextLength = {
	withSpaces: number;
	withoutSpaces: number;
};

type CharacterCount = { [key: string]: number }[];

type Response = {
	textLength: TextLength;
	wordCount: number;
	characterCount: CharacterCount;
};

/* Class TextEvaluator takes care of processing and serializing the text */

export class TextEvaluator {
	/* Returns the length of a text and the number of characters other than whitespaces */

	static extractTextLength(text: string): TextLength {
		return {
			withSpaces: text.length,
			withoutSpaces: text.replace(/\s/g, '').length
		};
	}

	/* Cleans text from whitespaces and counts the number of splitted array elements aka words */

	static extractWordCount(text: string): number {
		const cleanedFromExtraWhitespaces = text.replace(/\s{2,}/g, ' ').trim();

		return cleanedFromExtraWhitespaces ? cleanedFromExtraWhitespaces.split(' ').length : 0;
	}

	/* Returns a sorted array of objects: [{ a: 2 }, { b: 1}, { h: 1 }, ...] from text letters */

	static extractCharacterCount(text: string): CharacterCount {
		const letterFrequencyObject: { [key: string]: number } = {};
		const letterFrequencyArray: { [key: string]: number }[] = [];

		// Let's construct frequency object --> { a: 3, d: 7, ...}

		for (let letter of text) {
			letter = letter.toLowerCase();

			if (letter.match(/[a-z]/)) {
				letterFrequencyObject[letter] = (letterFrequencyObject[letter] || 0) + 1;
			}
		}

		// Let's go through the object and make an array of object properties and values

		for (let letter in letterFrequencyObject) {
			letterFrequencyArray.push({ [letter]: letterFrequencyObject[letter] });
		}

		// Return an array sorted by object keys

		return letterFrequencyArray.sort((a, b) => Object.keys(a)[0].charCodeAt(0) - Object.keys(b)[0].charCodeAt(0));
	}

	/* This is what we want to respond from our api */

	static serializeResponse(text: string): Response {
		return {
			textLength: this.extractTextLength(text),
			wordCount: this.extractWordCount(text),
			characterCount: this.extractCharacterCount(text)
		};
	}
}
