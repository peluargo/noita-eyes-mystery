import * as fs from 'fs'
import path from 'path'
import slugify from 'slugify'

const createDirectory = (dirname) => {
    console.log(`Creating directory "${dirname}"...`)

    const __dirname = path.resolve()

    dirname = dirname.replace(/^\.*\/|\/?[^\/]+\.[a-z]+|\/$/g, '')

    fs.mkdirSync(path.resolve(__dirname, dirname), { recursive: true }, e => {
        if (e) {
            console.error(`Something went worng while creating directory "${dirname}": ${e}`)
            throw e
        }

        console.info(`Directory "${dirname}" has been created!`)
    });
}

const createFile = (filename, data, ext) => {
    fs.writeFile(
        `${filename}.${ext}`,
        JSON.stringify(data),
        'utf8',
        (e) => {
            if (e) {
                console.error(`Something went worng while creating file "${filename}": ${e}`)
                throw e
            }

            console.info(`File "${filename}.${ext}" created!`)
        }
    )
}

const getSlugifiedText = (text) => {
    return slugify(text, { lower: true })
}

const directoryDoesNotExist = (dirname) => {
    return !fs.existsSync(dirname)
}

export const document = (description = '', data = 'some data', { ext, dirname } = { ext: 'json', dirname: 'output' }) => {
    const filename = getSlugifiedText(`${String(new Date().getTime())} ${description}`)

    if (directoryDoesNotExist(dirname)) {
        console.warn(`Directory "${dirname}" does not exist!`)
        createDirectory(dirname)
    }

    createFile(`${dirname}/${filename}`, data, ext)
}
