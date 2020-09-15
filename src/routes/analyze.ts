import express, { Request, Response } from 'express';
import { TextEvaluator } from '../models/TextEvaluator';
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.post('/analyze', [ body('text').not().isEmpty() ], (req: Request, res: Response) => {
	const { text } = req.body;
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		res.status(400).send({});
	}

	res.status(200).send(TextEvaluator.serializeResponse(text));
});

export { router as analyzerRouter };
