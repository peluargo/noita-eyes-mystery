import MESSAGES from "../data/1730038219379-all-messages-as-zigzag-trigrams.json" assert { type: 'json' }
import { document } from "../utils/document.js"
import { getMessageAsZigZagAnd180DegreesRotatedPointingUpTrigrams } from "../utils/message.js"

export const getAllMessagesAsZigzagAnd180DegreesRotatedPointingUpTrigrams = () => {
    let result = {}

    Object.entries(MESSAGES).map(([messageName, message]) => {
        result[messageName] = getMessageAsZigZagAnd180DegreesRotatedPointingUpTrigrams(message)
    })

    document("all messages as zigzag and 180 degrees rotated pointing up trigrams", result)
}