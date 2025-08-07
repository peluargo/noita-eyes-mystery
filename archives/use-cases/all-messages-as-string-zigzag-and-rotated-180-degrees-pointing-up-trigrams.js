import MESSAGES from "../data/1730040722030-all-messages-as-zigzag-and-180-degrees-rotated-pointing-up-trigrams.json" assert { type: 'json' }
import { document } from "../utils/document.js"
import { getMessageAsStringTrigrams } from "../utils/message.js"

export const getAllMessagesAsStringZigzagAnd180DegreesRotatedPointingUpTrigrams = () => {
    let result = {}

    Object.entries(MESSAGES).map(([messageName, message]) => {
        result[messageName] = getMessageAsStringTrigrams(message)
    })

    document("all messages as string zigzag and rotated 180 degrees pointing up trigrams", result)
}