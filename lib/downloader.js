const axios = require('axios')
const cheerio = require('cheerio')
const fetch = require('node-fetch')

function zippyDownloader(urls) {
    return new Promise((resolve, reject) => {
        axios.get(urls).then(({ data }) => {
            const $ = cheerio.load(data)
            const li = $.html()
            const po = $('#dlbutton').next().html()
            const le = po.split(';')[0]
            const lo = le.split("document.getElementById('dlbutton').href =")[1]
            const result = `${urls.split('/v')[0]}${eval(lo)}`
            const ho = $('#lrbox').text().replace(/\n/g, '')
			const ext = ho.split('Name:')[1].split('Size:')[0].split('.')[1]
            const hasil = {
                title: ho.split('Name:')[1].split('Size:')[0].trim(),
				extension: ext,
                filesize: ho.split('Size:')[1].split('Uploaded:')[0].trim(),
                upload: ho.split('Uploaded:')[1].split('          ')[0].trim(),
                link: result
            }
            resolve(hasil)
        })
    })
}

function mediafireDownloader(url) {
    return new Promise(async (resolve, reject) => {
        axios.get(url).then(({ data }) => {
            const $ = cheerio.load(data)
            link = $('a#downloadButton').attr('href')
            filesize = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '')
            seplit = link.split('/')
            title = seplit[5]
            mime = title.split('.')[1]
            resolve({ title, filesize, mime, link })
        })
    })
}

module.exports = {  zippyDownloader, mediafireDownloader }
