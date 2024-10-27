import MESSAGES_AS_TRIGRAMS from "../data/1730035200304-all-messages-as-trigrams.json" assert { type: 'json' }
import { document } from "../utils/document.js"
import { getMessageAsStringTrigrams } from "../utils/message.js"

export const getAllMessagesAsStringTrigrams = () => {
    let result = {}

    Object.entries(MESSAGES_AS_TRIGRAMS).map(([messageName, message]) => {
        result[messageName] = getMessageAsStringTrigrams(message)
    })

    document("all messages as string trigrams", result)
}