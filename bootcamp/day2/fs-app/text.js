const fs = require('fs');

var fetchFiles = () => {
    try {
        var textString = fs.readFileSync('best_things_ever.txt', 'utf-8');
        textString = textString.split(', ');
        textString.forEach((string) => console.log(string))
        // return JSON.parse(textString);
        
    } catch(e) {
        return [];
    }
}
fetchFiles();