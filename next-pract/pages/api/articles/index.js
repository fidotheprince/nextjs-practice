/**
 * Data store of your choice can be used for
 * the API
 */

import{ articles } from '../../../data'

export default function handler(req, res) {
    res.status(200).json(articles);
}