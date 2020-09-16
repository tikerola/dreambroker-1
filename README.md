Hey there! This api analyzes text.

Api endpoint: https://dreambroker-1.herokuapp.com/analyze


Usage: POST a body (application/json) with a text property, for instance:

{
  "text":"hello 2 times  "
}

...and get back something like this:

{
  "textLength":{"withSpaces":15,"withoutSpaces":11},
  "wordCount":3,
  "characterCount":[{"e":2},{"h":1},{"i":1},{"l":2},{"m":1},{"o":1},{"s":1},{"t":1}]
}
