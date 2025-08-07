import MESSAGES from "../data/1730041302104-all-messages-as-string-zigzag-and-rotated-180-degrees-pointing-up-trigrams.json" assert { type: 'json' }
import { document } from "../utils/document.js"
import { getUniqueTrigramsByMessage } from "../utils/message.js"

export const getAllUniqueZigzagAnd180DegreesRotatedPointingUpTrigramsByMessage = () => {
    let result = {}

    Object.entries(MESSAGES).map(([messageName, message]) => {
        result[messageName] = getUniqueTrigramsByMessage(message)
    })

    document("all unique zigzag and 180 degrees rotated pointing up trigrams by message", result)
}