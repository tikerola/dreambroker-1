import express, { Request, Response } from 'express';
import { TextEvaluator } from '../models/TextEvaluator';

const router = express.Router();

router.post('/analyze', (req: Request, res: Response) => {
	const { text } = req.body;

	if (text === undefined) {
		res.status(400).send({});
	}

	res.status(200).send(TextEvaluator.serializeResponse(text));
});

export { router as analyzerRouter };
