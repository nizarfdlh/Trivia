function getContact() {
    let jsonData = FileSystem.readFileSync('./data');
    let data = JSON.parse(jsonData);
    return data;
}

module.exports = getContact();