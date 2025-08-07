import MESSAGES from "../data/1730042116062-all-messages-as-string-zigzag-and-rotated-180-degrees-pointing-down-trigrams.json" assert { type: 'json' }
import { document } from "../utils/document.js"
import { getUniqueTrigramsByMessage } from "../utils/message.js"

export const getAllUniqueZigzagAnd180DegreesRotatedPointingDownTrigramsByMessage = () => {
    let result = {}

    Object.entries(MESSAGES).map(([messageName, message]) => {
        result[messageName] = getUniqueTrigramsByMessage(message)
    })

    document("all unique zigzag and 180 degrees rotated pointing down trigrams by message", result)
}