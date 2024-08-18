import {BibLatexImportWorker} from "./workers/importer/biblatex.js"

onmessage = function(message) {
    let importer = new BibLatexImportWorker(
        message.data.fileContents,
        response => postMessage(response),
        message.data.csrfToken,
        message.data.domain
    )
    importer.init()
}
