import MESSAGES from "../data/1730042042626-all-messages-as-zigzag-and-180-degrees-rotated-pointing-down-trigrams.json" assert { type: 'json' }
import { document } from "../utils/document.js"
import { getMessageAsStringTrigrams } from "../utils/message.js"

export const getAllMessagesAsStringZigzagAnd180DegreesRotatedPointingDownTrigrams = () => {
    let result = {}

    Object.entries(MESSAGES).map(([messageName, message]) => {
        result[messageName] = getMessageAsStringTrigrams(message)
    })

    document("all messages as string zigzag and rotated 180 degrees pointing down trigrams", result)
}