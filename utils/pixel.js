export const getBitAsPixel = (value = 1, { one, zero } = { one: "██", zero: "  " }) => {
    return String(value) === "0" ? zero : one
}

export const getBitsAsPixelString = (value = 1010, { one, zero } = { one: "██", zero: "  " }) => {
    return String(value)
        .split("")
        .map(v => getBitAsPixel(v, { one, zero }))
        .join("")
}
