/**
 * Data store of your choice can be used for
 * the API
 */

import{ articles } from '../../../data'

export default function handler({ query: {id} }, res) {
    //filter out the id that is passed in the request;
    const filtered = articles.filter(article => article.id === id)
    //make sure provide only one response per request;
    if(filtered.length > 0){
        res.status(200).json(filtered[0])
    } else {
        res.status(400).json({ message: `Article with the id of ${id} is not found`})
    }
}