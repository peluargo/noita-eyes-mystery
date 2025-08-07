import GUN_NAMES from "../data/gun-names.json" assert { type: 'json' }

export const getLettersOfName = (name = "John Doe") => {
    return name.split("")
}

export const getBase10TrigramAsName = (trigram = 33) => {
    return GUN_NAMES[trigram]
}

export const getBase10TrigramAsLetters = (trigram = 33) => {
    const base10TrigramAsName = getBase10TrigramAsName(trigram)
    return getLettersOfName(base10TrigramAsName)
}

