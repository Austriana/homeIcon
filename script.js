async function fetch_data(){
    let res = await fetch('https://austriana.github.io/kontakt/data.json');
    let data = await res.json();
    let jsonData = JSON.parse(data);
    return jsonData;
}
console.log(fetch_data());