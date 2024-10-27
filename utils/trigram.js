/**
 * creates the trigram using the wiki's approach
 * https://docs.google.com/document/d/1s6gxrc1iLJ78iFfqC2d4qpB9_r_c5U5KwoHVYFFrjy0/edit#heading=h.3hedcv723b4p
 * 
 * <1> <2>
 *   <3>
 */
export const wikiPointingDownTrigram = (message, line, column) => {
    let trigram = []

    if (message[line] != undefined && message[line][column] != undefined)
        trigram.push(message[line][column])

    if (message[line] != undefined && message[line][column + 1] != undefined)
        trigram.push(message[line][column + 1])

    if (message[line + 1] != undefined && message[line + 1][column] != undefined)
        trigram.push(message[line + 1][column])

    return trigram
}

/**
 * creates the trigram using the wiki's approach
 * https://docs.google.com/document/d/1s6gxrc1iLJ78iFfqC2d4qpB9_r_c5U5KwoHVYFFrjy0/edit#heading=h.3hedcv723b4p
 * 
 *    <6>
 *  <5> <4>
 */
export const wikiPointingUpTrigram = (message, line, column) => {
    let trigram = []

    if (message[line + 1] != undefined && message[line + 1][column + 2] != undefined) 
        trigram.push(message[line + 1][column + 2])

    if (message[line + 1] != undefined && message[line + 1][column + 1] != undefined) 
        trigram.push(message[line + 1][column + 1])

    if (message[line] != undefined && message[line][column + 2] != undefined)
        trigram.push(message[line][column + 2])

    return trigram
}

/**
 * creates the trigram using a zigzag approach
 * 
 * <1> <3>
 *   <2>
 */
export const zigzagPointingDownTrigram = (message, line, column) => {
    let trigram = []

    if (message[line] != undefined && message[line][column] != undefined)
        trigram.push(message[line][column])

    if (message[line] != undefined && message[line + 1][column] != undefined)
        trigram.push(message[line + 1][column])

    if (message[line] != undefined && message[line][column + 1] != undefined)
        trigram.push(message[line][column + 1])

    return trigram
}

/**
 * creates the trigram using a zigzag approach
 * 
 *    <5>
 *  <4> <6>
 */
export const zigzagPointingUpTrigram = (message, line, column) => {
    let trigram = []

    if (message[line + 1] != undefined && message[line + 1][column + 1] != undefined) 
        trigram.push(message[line + 1][column + 1])

    if (message[line] != undefined && message[line][column + 2] != undefined) 
        trigram.push(message[line][column + 2])

    if (message[line + 1] != undefined && message[line + 1][column + 2] != undefined)
        trigram.push(message[line + 1][column + 2])

    return trigram
}

export const groupTrigramsAsPairs = (message) => {
    let trigramPairedMessage = []

    for (let trigramIndex = 0; trigramIndex < message.length; trigramIndex += 2) {

        let pairedTrigrams = []

        pairedTrigrams.push(message[trigramIndex])

        if (message[trigramIndex + 1]) pairedTrigrams.push(message[trigramIndex + 1])

        trigramPairedMessage.push(pairedTrigrams)

    }

    return trigramPairedMessage
}

export const getTrigramAsString = (trigram) => {
    return trigram.join("")
}

export const rotated180DegreesTrigram = (trigram) => {
    return trigram.map(eye => {
        switch(eye) {
            case "0":
                return "0";
            case "1":
                return "3";
            case "2":
                return "4";
            case "3":
                return "1";
            case "4":
                return "2";
        }
    })
}