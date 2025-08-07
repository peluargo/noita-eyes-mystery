import MESSAGES_AS_ZIGZAG_TRIGRAMS from "../data/1730038219379-all-messages-as-zigzag-trigrams.json" assert { type: 'json' }
import { document } from "../utils/document.js"
import { getMessageAsStringTrigrams } from "../utils/message.js"

export const getAllMessagesAsStringZigzagTrigrams = () => {
    let result = {}

    Object.entries(MESSAGES_AS_ZIGZAG_TRIGRAMS).map(([messageName, message]) => {
        result[messageName] = getMessageAsStringTrigrams(message)
    })

    document("all messages as string zigzag trigrams", result)
}