class ReaderFile {
    constructor() {
        this._storedText = "";
    }
    getStoredText() { return this._storedText; }
    setStoreText(text) { this._storedText = text ; }
}

function fileSelected(e) {
    var output = document.getElementById("output");
    var textReader = new ReaderFile();
    console.log(e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
        e.target.files[0].text().then(
            text => {
                textReader.setStoreText(text);
                output.textContent = textReader.getStoredText();}
        )
    }
}