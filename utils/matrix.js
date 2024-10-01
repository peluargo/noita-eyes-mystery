export const getMatrix = (width = 5, height = 5) => {
    return Array.from(Array(height), () => new Array(width))
}

export const getMatrixWidth = (matrix = [["A", "B", "C"], ["D", "E", "F"]]) => {
    return Math.max(...matrix.map(line => line.length))
}

export const getMatrixHeight = (matrix = [["A", "B", "C"], ["D", "E", "F"]]) => {
    return matrix.length
}

export const getHighestMatrixWidth = (matrices = [[[0, 1, 2], [3, 1, 1]], [[0, 1, 2]]]) => {
    return Math.max(...matrices.map(matrix => getMatrixWidth(matrix)))
}

export const getHighestMatrixHeight = (matrices = [[[0, 1, 2], [3, 1, 1]], [[0, 1, 2]]]) => {
    return Math.max(...matrices.map(matrix => getMatrixHeight(matrix)))
}

export const getMatrixWithoutEmptyValues = (matrix = [["A", "B", "C"], ["D", "E", "F"]]) => {
    return matrix.map(line => line.filter(column => column !== null && column !== undefined && column !== ""))
}