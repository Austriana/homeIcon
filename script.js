let fetch_data = async () => {
    let fetch = await fetch('https://austriana.github.io/kontakt/data.json');
    let data = JSON.parse(fetch);
    console.log(data);
}