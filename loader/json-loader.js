function loader(source) {
    let temp = JSON.parse(source)
    console.log(temp, 'temp')
    temp["added"] = "b"
    return JSON.stringify(temp, null, 4)
}

module.exports = loader;
