import ALL_UNIQUE_ZIGZAG_TRIGRAMS_BY_MESSAGE from "../data/1730038475756-all-unique-zigzag-trigrams-by-message.json" assert { type: 'json' }
import { document } from "../utils/document.js"

export const getAllUniqueZigzagTrigrams = () => {
    let allMessagesUnited = Object.values(ALL_UNIQUE_ZIGZAG_TRIGRAMS_BY_MESSAGE)

    let result = Array.from(new Set(allMessagesUnited.flat())).sort()

    document("all unique zigzag trigrams", result)
}