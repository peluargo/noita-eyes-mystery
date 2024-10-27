import MESSAGES_AS_STRING_TRIGRAMS from "../data/1730036522469-all-messages-as-string-trigrams.json" assert { type: 'json' }
import { document } from "../utils/document.js"
import { getMessageAsStringTrigrams } from "../utils/message.js"

export const getAllUniqueTrigrams = () => {
    let result = {}

    Object.entries(MESSAGES_AS_STRING_TRIGRAMS).map(([messageName, message]) => {
        result[messageName] = getMessageAsStringTrigrams(message)
    })

    document("all unique trigrams by message", result)
}