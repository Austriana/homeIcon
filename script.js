let fetch_data =  async (res, e) => {
    let response = await fetch('https://austriana.github.io/kontakt/data.json')).json;
    return response;
}
let obj = fetch_data();
