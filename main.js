// SEEKING TRUTH, THE WISE FIND INSTEAD ITS PROFOUND ABSENCE

import { document } from "./utils/document.js"
import { getAllMessagesAsPixelImages } from "./utils/use-case.js"

const result = getAllMessagesAsPixelImages()

document("all messages as pixel images", result)
