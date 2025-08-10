let fetch_data =  async () => {
    let response = await fetch('https://austriana.github.io/kontakt/data.json').json;
    return response;
}