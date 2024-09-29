import * as fs from 'fs'
import path from 'path'

const createDirectory = (dirname) => {
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

export default {

    generate(filename = String(new Date().getTime()), data = 'some data', { ext, dirname } = { ext: 'json', dirname: 'output' }) {
        if (!fs.existsSync(dirname)) {
            console.warn(`Directory "${dirname}" does not exist!`)
            console.log(`Creating directory "${dirname}"...`)
            
            fs.mkdirSync(dirname, { recursive: true })
        }

        createFile(`${dirname}/${filename}`, data, ext)
    }

}