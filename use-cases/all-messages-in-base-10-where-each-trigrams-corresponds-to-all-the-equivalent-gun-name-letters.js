import MESSAGES_IN_TRIGRAMS_AS_BASE_10 from "../data/messages-in-trigrams-as-base-10.json" assert { type: 'json' }
import { document } from "../utils/document.js"
import { getBase10TrigramMessageAsLetters } from "../utils/message.js"

export const allMessagesInBase10TrigramsAsGunNamesLetters = () => {
    const result = {}
    
    Object.entries(MESSAGES_IN_TRIGRAMS_AS_BASE_10).forEach(([messageName, message]) => {
        result[messageName] = getBase10TrigramMessageAsLetters(message)
    })
    
    document("all messages in base 10 trigrams as gun names letters", result)
}