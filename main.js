// SEEKING TRUTH, THE WISE FIND INSTEAD ITS PROFOUND ABSENCE

import * as f from "./functions.js"
import fileGenerator from "./file-generator.js"

import EYE_DIRECTIONS from "./data/eye-directions-as-values.json" assert { type: 'json' }

// const messagesAsBinariesWithCenterEyeBeing1 = f.getMessagesAsBinaries([ EYE_DIRECTIONS.CENTER ])

// const messagesAsPixelLinesWithCenterEyeBeing1 = f.getMessagesAsPixelLines(messagesAsBinariesWithCenterEyeBeing1)

// fileGenerator.generate("messages-as-pixel-lines-with-center-eye-being-1", messagesAsPixelLinesWithCenterEyeBeing1)

// 1 2 3 4 6 7 12 14 21 28 37 42 74 84 111 148 222 259 444 518 777 1036 1554 3108
const numberOfLines = 3
const allMessagesJoined = f.getAllMessagesAsBinaryStringAndSplittedIntoLinesAsPixelLines(numberOfLines)
fileGenerator.generate(`all-messages-joined-as-${numberOfLines}-pixel-lines-with-center-eye-being-1`, allMessagesJoined)

