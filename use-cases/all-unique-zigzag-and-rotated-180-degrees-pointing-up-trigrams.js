import MESSAGES from "../data/1730041353788-all-unique-zigzag-and-180-degrees-rotated-pointing-up-trigrams-by-message.json" assert { type: 'json' }
import { document } from "../utils/document.js"

export const getAllUniqueZigzagAnd180DegreesRotatedPointingUpTrigrams = () => {
    let allMessagesUnited = Object.values(MESSAGES)

    let result = Array.from(new Set(allMessagesUnited.flat())).sort()

    document("all unique zigzag and rotated 180 degrees pointing up trigrams", result)
}