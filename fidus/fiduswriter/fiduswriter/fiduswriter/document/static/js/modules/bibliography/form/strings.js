var gettext = () => undefined

export const BibFieldTitles = {
    "abstract": gettext("Abstract"),
    "addendum": gettext("Addendum"),
    "afterword": gettext("Afterword"),
    "annotation": gettext("Annotation"),
    "annotator": gettext("Annotations author(s)"),
    "author": gettext("Author(s)"),
    "authortype": gettext("Author type"),
    "bookauthor": gettext("Book author(s)"),
    "bookpagination": gettext("Book pagination"),
    "booksubtitle": gettext("Book subtitle"),
    "booktitle": gettext("Book title"),
    "booktitleaddon": gettext("Book title annex"),
    "chapter": gettext("Chapter or section"),
    "commentator": gettext("Author(s) of a commentary"),
    "date": gettext("Publication date"),
    "doi": gettext("Digital Object Identifier"),
    "edition": gettext("Edition"),
    "editor": gettext("Editor(s)"),
    "editora": gettext("Secondary editor"),
    "editorb": gettext("Secondary editor 2"),
    "editorc": gettext("Secondary editor 3"),
    "editortype": gettext("Role of editor(s)"),
    "editoratype": gettext("Role of secondary editor"),
    "editorbtype": gettext("Role of secondary editor 2"),
    "editorctype": gettext("Role of secondary editor 3"),
    "eid": gettext("Electronic identifier of an article"),
    "entrysubtype": gettext("Entry subtype"),
    "eprint": gettext("Electronic identifier of an online publication"),
    "eprintclass": gettext("Additional information to an online publication"),
    "eprinttype": gettext("Eprint identifier type"),
    "eventdate": gettext("Event date"),
    "eventtitle": gettext("Event title"),
    "file": gettext("Local link to the work"),
    "foreword": gettext("Foreword author(s)"),
    "holder": gettext("Patent holder(s)"),
    "howpublished": gettext("Publication notice"),
    "indextitle": gettext("Title for indexing"),
    "institution": gettext("Institution"),
    "introduction": gettext("Author(s) of an introduction to the work"),
    "isan": gettext("ISAN"),
    "isbn": gettext("ISBN"),
    "ismn": gettext("ISMN"),
    "isrn": gettext("ISRN"),
    "issn": gettext("ISSN"),
    "issue": gettext("Issue"),
    "issuesubtitle": gettext("Issue subtitle"),
    "issuetitle": gettext("Issue title"),
    "iswc": gettext("ISWC"),
    "journalsubtitle": gettext("Subtitle of publication"),
    "journaltitle": gettext("Title of publication"),
    "keywords": gettext("Keywords"),
    "label": gettext("Label"),
    "language": gettext("Language(s) of work"),
    "langid": gettext("Language of bibliography item"),
    "library": gettext("Library information"),
    "location": gettext("Location(s) of publication"),
    "mainsubtitle": gettext("Main subtitle"),
    "maintitle": gettext("Maintitle"),
    "maintitleaddon": gettext("Annex to the maintitle"),
    "nameaddon": gettext("author name addon"),
    "note": gettext("Note"),
    "number": gettext("Number of the work in a series"),
    "organization": gettext("Organization(s)"),
    "origdate": gettext("Publication date of the original work"),
    "origlanguage": gettext("Language of the original work"),
    "origlocation": gettext("Publication location of the original edition"),
    "origpublisher": gettext("Publisher of the original edition"),
    "origtitle": gettext("Title of the original work"),
    "pages": gettext("Pages"),
    "pagetotal": gettext("Total number of pages"),
    "pagination": gettext("Pagination"),
    "part": gettext("Number of a partial volume"),
    "publisher": gettext("Publisher(s)"),
    "pubstate": gettext("Publication state of the work"),
    "reprinttitle": gettext("Title of reprint"),
    "series": gettext("Name of series"),
    "shortauthor": gettext("Abbreviated author(s)"),
    "shorteditor": gettext("Abbreviated editor(s)"),
    "shorthand": gettext("Shorthand"),
    "shorthandintro": gettext("Shorthand intro"),
    "shortjournal": gettext("Acronym of the publication's title"),
    "shortseries": gettext("Acronym of the series"),
    "shorttitle": gettext("Abridged title"),
    "subtitle": gettext("Subtitle"),
    "title": gettext("Title"),
    "titleaddon": gettext("Title addon"),
    "translator": gettext("Translator(s)"),
    "type": gettext("Manual type"),
    "url": gettext("URL"),
    "urldate": gettext("Access date"),
    "venue": gettext("Location of a conference"),
    "version": gettext("Version"),
    "volume": gettext("Volume"),
    "volumes": gettext("Total number of volumes")
}

const edtfExplanation = gettext(
    "In <em>Extended Date Time Format</em> (EDTF) 1.0<br>Level 0 or 1"
)
const nameExplanation = gettext(
    "Prefixed is \"used\" when it is used in cases where only the last name is used. \
    For example: \"Ludwig van Beethoven\" turns into \"Beethoven\", so the prefix \"van\" \
    is not used. \"Vincent van Gogh\" turns into \"van Gogh\", so the prefix \"van\" is used."
)

export const BibFieldHelp = {
    "date": edtfExplanation,
    "origdate": edtfExplanation,
    "pages": gettext("Range or single page, column, paragraph, section, line"),
    "author": nameExplanation,
    "editor": nameExplanation,
    "editora": nameExplanation,
    "editorb": nameExplanation,
    "editorc": nameExplanation,
    "translator": nameExplanation
}

export const BibTypeTitles = {
    "article": gettext("Article"),
    "book": gettext("Book"),
    "mvbook": gettext("Multi-volume book"),
    "inbook": gettext("In book"),
    "bookinbook": gettext("Book in book"),
    "suppbook": gettext("Supplemental material in a book"),
    "booklet": gettext("Booklet"),
    "collection": gettext("Collection"),
    "mvcollection": gettext("Multi-volume collection"),
    "incollection": gettext("In collection"),
    "suppcollection": gettext("Supplemental material in a collection"),
    "manual": gettext("Manual"),
    "misc": gettext("Miscellany"),
    "online": gettext("Online resource"),
    "patent": gettext("Patent"),
    "periodical": gettext("Periodical"),
    "suppperiodical": gettext("Supplemental material in a periodical"),
    "proceedings": gettext("Proceedings"),
    "mvproceedings": gettext("Multi-volume proceedings"),
    "inproceedings": gettext("Article in a proceedings"),
    "reference": gettext("Reference"),
    "mvreference": gettext("Multi-volume work of reference"),
    "inreference": gettext("Article in a work of reference"),
    "report": gettext("Report"),
    "thesis": gettext("Thesis"),
    "unpublished": gettext("Unpublished"),
    "article-magazine": gettext("Magazine article"),
    "article-newspaper": gettext("Newspaper article"),
    "article-journal": gettext("Journal article"),
    "entry-encyclopedia": gettext("Encyclopedia entry"),
    "entry-dictionary": gettext("Dictionary entry"),
    "post-weblog": gettext("Blog post"),
    "post": gettext("Forum post")
}

export const BibOptionTitles = {
    "manual": gettext("Manual"),
    "patent": gettext("Patent"),
    "report": gettext("Report"),
    "thesis": gettext("Thesis"),
    "editor": gettext("Editor"),
    "compiler": gettext("Compiler"),
    "founder": gettext("Founder"),
    "continuator": gettext("Continuator"),
    "redactor": gettext("Redactor"),
    "reviser": gettext("Reviser"),
    "collaborator": gettext("Collaborator"),
    "page": gettext("Page"),
    "column": gettext("Column"),
    "section": gettext("Section"),
    "paragraph": gettext("Paragraph"),
    "verse": gettext("Verse"),
    "line": gettext("Line"),
    "inpreparation": gettext("In preparation"),
    "submitted": gettext("Submitted"),
    "forthcoming": gettext("Forthcoming"),
    "inpress": gettext("In press"),
    "prepublished": gettext("Pre-published"),
    "mathesis": gettext("M.A. thesis"),
    "phdthesis": gettext("Ph.D. thesis"),
    "candthesis": gettext("Candidate thesis"),
    "techreport": gettext("Technical report"),
    "resreport": gettext("Research report"),
    "software": gettext("Computer software"),
    "datacd": gettext("Data CD"),
    "audiocd": gettext("Audio CD"),
    "acadian": gettext("Acadian"),
    "afrikaans": gettext("Afrikaans"),
    "arabic": gettext("Arabic"),
    "basque": gettext("Basque"),
    "bulgarian": gettext("Bulgarian"),
    "catalan": gettext("Catalan"),
    "chinese": gettext("Chinese"),
    "pinyin": gettext("Chinese"),
    "croatian": gettext("Croatian"),
    "czech": gettext("Czech"),
    "danish": gettext("Danish"),
    "dutch": gettext("Dutch"),
    "auenglish": gettext("Australian English"),
    "caenglish": gettext("Canadian English"),
    "nzenglish": gettext("New Zealand English"),
    "ukenglish": gettext("UK English"),
    "english": gettext("UK English"),
    "american": gettext("US English"),
    "usenglish": gettext("US English"),
    "estonian": gettext("Estonian"),
    "farsi": gettext("Farsi"),
    "finnish": gettext("Finnish"),
    "french": gettext("French"),
    "cafrench": gettext("Canadian French"),
    "german": gettext("German"),
    "atgerman": gettext("Austrian German"),
    "greek": gettext("Greek"),
    "hebrew": gettext("Hebrew"),
    "hungarian": gettext("Hungarian"),
    "icelandic": gettext("Icelandic"),
    "italian": gettext("Italian"),
    "japanese": gettext("Japanese"),
    "latin": gettext("Latin"),
    "latvian": gettext("Latvian"),
    "lithuanian": gettext("Lithuanian"),
    "magyar": gettext("Magyar"),
    "mongolian": gettext("Mongolian"),
    "norwegian": gettext("Norwegian"),
    "newnorwegian": gettext("New Norwegian"),
    "polish": gettext("Polish"),
    "portuguese": gettext("Portuguese"),
    "brazilian": gettext("Brazilian Portuguese"),
    "brportuguese": gettext("Brazilian Portuguese"),
    "romanian": gettext("Romanian"),
    "russian": gettext("Russian"),
    "serbian": gettext("Serbian"),
    "cyrillicserbian": gettext("Cyrillic Serbian"),
    "slovak": gettext("Slovak"),
    "slovene": gettext("Slovene"),
    "spanish": gettext("Spanish"),
    "swedish": gettext("Swedish"),
    "thai": gettext("Thai"),
    "turkish": gettext("Turkish"),
    "ukrainian": gettext("Ukrainian"),
    "vietnamese": gettext("Vietnamese")
}
