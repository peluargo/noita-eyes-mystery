import MESSAGES from "../data/1730042233919-all-unique-zigzag-and-180-degrees-rotated-pointing-down-trigrams-by-message.json" assert { type: 'json' }
import { document } from "../utils/document.js"

export const getAllUniqueZigzagAnd180DegreesRotatedPointingDownTrigrams = () => {
    let allMessagesUnited = Object.values(MESSAGES)

    let result = Array.from(new Set(allMessagesUnited.flat())).sort()

    console.log(result.length);
    

    // document("all unique zigzag and rotated 180 degrees pointing down trigrams", result)
}