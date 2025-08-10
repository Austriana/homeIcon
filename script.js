let fetch_data =  async () => {
    let response = await fetch('https://austriana.github.io/kontakt/data.json').json;
    return response;
}

let myData = async () => {
    let myObj = await fetch_data();
    console.log(myObj['PASSWORD']);
}
myData();