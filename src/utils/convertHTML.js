import parse from "html-react-parser";

const htmlToString = (string) => {
    if(!string) return ''
    const htmlToString = parse(JSON.stringify(string))

    if(!Array.isArray(htmlToString)) return ''

    const filteredHtmlToString = htmlToString.slice(1, htmlToString.length - 1)
    return filteredHtmlToString
}

export default htmlToString