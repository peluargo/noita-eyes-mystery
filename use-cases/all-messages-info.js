import MESSAGES_AS_DIRECTIONS from "../data/messages-as-directions.json" assert { type: 'json' }
import { document } from "../utils/document.js"
import { getMessageInfo } from "../utils/message.js"

export const getAllMessagesInfo = () => {
    let result = {}

    Object.entries(MESSAGES_AS_DIRECTIONS).map(([messageName, message]) => {
        result[messageName] = getMessageInfo(message)
    })

    const generalInfo = {
        totalQuantityOfEyes: Object.values(result).reduce((total, messageInfo) => total + messageInfo.quantityOfEyes, 0),
        totalQuantityOfMessages: Object.keys(result).length,
        totalQuantityOfTrigrams: Object.values(result).reduce((total, messageInfo) => total + messageInfo.quantityOfTrigrams, 0),
        totalQuantityOfUniqueTrigrams: 83,
        oddMessages: Object.entries(result).filter(([messageName, messageInfo]) => messageInfo.quantityOfEyes % 2 === 1).map(([messageName, messageInfo]) => messageName),
        evenMessages: Object.entries(result).filter(([messageName, messageInfo]) => messageInfo.quantityOfEyes % 2 === 0).map(([messageName, messageInfo]) => messageName),
        messageWithMostEyes: Object.entries(result).reduce((a, b) => a[1].quantityOfEyes > b[1].quantityOfEyes ? a : b)[0],
        messageWithLeastEyes: Object.entries(result).reduce((a, b) => a[1].quantityOfEyes < b[1].quantityOfEyes ? a : b)[0],
    }

    const info = {
        generalInfo,
        result
    }

    document("general and specific info about the messages", info)
}