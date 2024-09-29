import fs from 'fs'

import MESSAGES_AS_DIRECTIONS from "./data/messages-as-directions.json" assert { type: 'json' }
import MESSAGES_IN_TRIGRAMS_AS_BASE_10 from "./data/messages-in-trigrams-as-base-10.json" assert { type: 'json' }
import GUN_NAMES from "./data/gun-names.json" assert { type: 'json' }
import EYE_DIRECTIONS from "./data/eye-directions-as-values.json" assert { type: 'json' }

export const getMessagesAsGunNameTrigrams = (messages = MESSAGES_IN_TRIGRAMS_AS_BASE_10) => {
    let messagesAsGunNameTrigrams = {}

    Object.entries(messages).forEach(([messageName, messageLines]) => {
        messagesAsGunNameTrigrams[messageName] = messageLines.map(() => messageLines.map(line => line.map(trigram => GUN_NAMES[trigram])))
    })

    return messagesAsGunNameTrigrams
}

export const getGunNamesInAlphabeticalOrder = (gunNames = GUN_NAMES) => {
    return gunNames.sort()
}

export const getMessageAsDirectionsConvertedIntoMessageAsBinaries = (
    message = [],
    directionsRepresentingTheValueOne = [ EYE_DIRECTIONS.CENTER ]
) => {
    return message.map(line => line.map(direction => directionsRepresentingTheValueOne.includes(direction) ? "1" : "0"))
}

export const getMessagesAsBinaries = (directionsRepresentingTheValueOne = [ EYE_DIRECTIONS.CENTER ], messages = MESSAGES_AS_DIRECTIONS) => {
    let messagesAsBinary = {}

    Object.entries(messages).forEach(([messageName, message]) => {
        messagesAsBinary[messageName] = getMessageAsDirectionsConvertedIntoMessageAsBinaries(message, directionsRepresentingTheValueOne)
    })

    return messagesAsBinary
}

export const getMessagesAsPixels = (messages = {}, characterRepresentingTheValueOne = "█", characterRepresentingTheValueZero = " ") => {
    let messagesAsPixels = {}

    Object.entries(messages).forEach(([messageName, messageLines]) => {
        messagesAsPixels[messageName] = messageLines.map(line => line.map(eye => eye === "1" ? characterRepresentingTheValueOne : characterRepresentingTheValueZero))
    })

    return messagesAsPixels
}

export const getMessageAsPixelLines = (message = [], characterRepresentingTheValueOne = "██", characterRepresentingTheValueZero = "  ") => {
    return message.map(line => line.map(eye => eye === "1" ? characterRepresentingTheValueOne : characterRepresentingTheValueZero).join(""))
}

export const getMessagesAsPixelLines = (messages = {}, characterRepresentingTheValueOne = "██", characterRepresentingTheValueZero = "  ") => {
    let messagesAsPixels = {}

    Object.entries(messages).forEach(([messageName, message]) => {
        messagesAsPixels[messageName] = getMessageAsPixelLines(message, characterRepresentingTheValueOne, characterRepresentingTheValueZero)
    })

    return messagesAsPixels
}

export const xor = (a, b) => a === b ? "0" : "1"

export const getXorResult = (firstMessage, secondMessage) => {
    let xorResult = Array.from(Array(12), () => new Array(39))

    for (let line = 0; line < 12; line++) {
        for (let eye = 0; eye < 39; eye++) {
            xorResult[line][eye] = xor(
                firstMessage[line] ? firstMessage[line][eye] : "0",
                secondMessage[line] ? secondMessage[line][eye] : "0"
            )   
        }
    }
    
    const xorResultWithoutUndefinedValues = xorResult.map(line => line.filter(eye => eye)).filter(line => line.length)

    return xorResultWithoutUndefinedValues
}

export const getXorResultFromMessages = (messages = {}, firstMessageName, secondMessageName) => {
    const firstMessage = messages[firstMessageName]
    const secondMessage = messages[secondMessageName]

    return getXorResult(firstMessage, secondMessage) 
}

export const getXorResultFromAllMessages = (messages = {}) => {
    let xorResultFromAllMessages = Array.from(Array(12), () => new Array(39))

    Object.values(messages).forEach(message => {
        message.forEach((line, lineIndex) => {
            line.forEach((eye, eyeIndex) => {
                xorResultFromAllMessages[lineIndex][eyeIndex] = xor(xorResultFromAllMessages[lineIndex][eyeIndex], eye)
            })
        })
    })

    const xorWithoutUndefinedValues = xorResultFromAllMessages.map(line => line.filter(eye => eye))

    return xorWithoutUndefinedValues
}

export const getMessageFromFile = (fileName) => {
    return JSON.parse(fs.readFileSync(fileName, "utf8"))
}