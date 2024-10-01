import MESSAGES_AS_DIRECTIONS from "../data/messages-as-directions.json" assert { type: 'json' }
import EYE_DIRECTIONS from "../data/eye-directions-as-values.json" assert { type: 'json' }
import { getMessageAsPixelImage } from "../utils/message.js"
import { document } from "../utils/document.js"

export const getAllMessagesAsPixelImagesWithCenterEyeBeingOne = () => {
    let allMessagesAsPixelImages = {}

    Object.entries(MESSAGES_AS_DIRECTIONS).map(([messageName, message]) => {
        allMessagesAsPixelImages[messageName] = getMessageAsPixelImage(
            message,
            { 
                valuesToOne: [ EYE_DIRECTIONS.CENTER ],
                valuesToZero: [ EYE_DIRECTIONS.UP, EYE_DIRECTIONS.RIGHT, EYE_DIRECTIONS.DOWN, EYE_DIRECTIONS.LEFT ],
                removeEmptyValues: true,
                one: "██",
                zero: "  "
            }
        )
    })

    document("all messages as pixel images with center eye being one", allMessagesAsPixelImages)
}