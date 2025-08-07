import MESSAGES_AS_STRING_TRIGRAMS from "../data/1730036522469-all-messages-as-string-trigrams.json" assert { type: 'json' }
import { document } from "../utils/document.js"
import { getUniqueTrigramsByMessage } from "../utils/message.js"

export const getAllUniqueTrigramsByMessage = () => {
    let result = {}

    Object.entries(MESSAGES_AS_STRING_TRIGRAMS).map(([messageName, message]) => {
        result[messageName] = getUniqueTrigramsByMessage(message)
    })

    document("all unique trigrams by message", result)
}