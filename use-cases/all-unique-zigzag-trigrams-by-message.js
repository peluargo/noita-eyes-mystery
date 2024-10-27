import MESSAGES_AS_STRING_ZIGZAG_TRIGRAMS from "../data/1730038315092-all-messages-as-string-zigzag-trigrams.json" assert { type: 'json' }
import { document } from "../utils/document.js"
import { getUniqueTrigramsByMessage } from "../utils/message.js"

export const getAllUniqueZigzagTrigramsByMessage = () => {
    let result = {}

    Object.entries(MESSAGES_AS_STRING_ZIGZAG_TRIGRAMS).map(([messageName, message]) => {
        result[messageName] = getUniqueTrigramsByMessage(message)
    })

    document("all unique zigzag trigrams by message", result)
}