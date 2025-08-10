let fetch_data =  async (res, e) => {
    if (!res) console.log(e);
    let res = await fetch('https://austriana.github.io/kontakt/data.json')).json;
    return res;
}
let obj = fetch_data();
