import MESSAGES_AS_DIRECTIONS from "../data/messages-as-directions.json" assert { type: 'json' }
import { document } from "../utils/document.js"
import { getMessageInfo } from "../utils/message.js"

export const getAllMessagesInfo = () => {
    let allMessagesInfo = {}

    Object.entries(MESSAGES_AS_DIRECTIONS).map(([messageName, message]) => {
        allMessagesInfo[messageName] = getMessageInfo(message)
    })

    const generalInfo = {
        totalQuantityOfEyes: Object.values(allMessagesInfo).reduce((total, messageInfo) => total + messageInfo.quantityOfEyes, 0),
        totalQuantityOfMessages: Object.keys(allMessagesInfo).length,
        totalQuantityOfTrigrams: Object.values(allMessagesInfo).reduce((total, messageInfo) => total + messageInfo.quantityOfTrigrams, 0),
        totalQuantityOfUniqueTrigrams: 83,
        oddMessages: Object.entries(allMessagesInfo).filter(([messageName, messageInfo]) => messageInfo.quantityOfEyes % 2 === 1).map(([messageName, messageInfo]) => messageName),
        evenMessages: Object.entries(allMessagesInfo).filter(([messageName, messageInfo]) => messageInfo.quantityOfEyes % 2 === 0).map(([messageName, messageInfo]) => messageName),
        messageWithMostEyes: Object.entries(allMessagesInfo).reduce((a, b) => a[1].quantityOfEyes > b[1].quantityOfEyes ? a : b)[0],
        messageWithLeastEyes: Object.entries(allMessagesInfo).reduce((a, b) => a[1].quantityOfEyes < b[1].quantityOfEyes ? a : b)[0],
    }

    const info = {
        generalInfo,
        allMessagesInfo
    }

    document("general and specific info about the messages", info)
}