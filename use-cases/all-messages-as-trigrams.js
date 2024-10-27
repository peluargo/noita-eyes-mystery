import MESSAGES_AS_DIRECTIONS from "../data/messages-as-directions.json" assert { type: 'json' }
import { document } from "../utils/document.js"
import { getMessageAsTrigrams } from "../utils/message.js"

export const getAllMessagesAsTrigrams = () => {
    let result = {}

    Object.entries(MESSAGES_AS_DIRECTIONS).map(([messageName, message]) => {
        result[messageName] = getMessageAsTrigrams(message)
    })

    document("all messages as trigrams", result)
}