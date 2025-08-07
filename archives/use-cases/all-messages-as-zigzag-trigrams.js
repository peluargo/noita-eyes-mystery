import MESSAGES_AS_DIRECTIONS from "../data/messages-as-directions.json" assert { type: 'json' }
import { document } from "../utils/document.js"
import { getMessageAsZigZagTrigrams } from "../utils/message.js"

export const getAllMessagesAsZigzagTrigrams = () => {
    let result = {}

    Object.entries(MESSAGES_AS_DIRECTIONS).map(([messageName, message]) => {
        result[messageName] = getMessageAsZigZagTrigrams(message)
    })

    document("all messages as zigzag trigrams", result)
}