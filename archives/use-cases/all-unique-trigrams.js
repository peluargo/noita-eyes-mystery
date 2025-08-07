import ALL_UNIQUE_TRIGRAMS_BY_MESSAGE from "../data/1730037450732-all-unique-trigrams-by-message.json" assert { type: 'json' }
import { document } from "../utils/document.js"

export const getAllUniqueTrigrams = () => {
    let allMessagesUnited = Object.values(ALL_UNIQUE_TRIGRAMS_BY_MESSAGE)

    let result = Array.from(new Set(allMessagesUnited.flat())).sort()

    document("all unique trigrams", result)
}