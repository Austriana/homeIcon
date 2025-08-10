let fetch_data =  async () => {
    let res = await fetch('https://austriana.github.io/kontakt/data.json');
    let data = await res.json();
    return data;
}
console.log(fetch_data());