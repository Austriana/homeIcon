async function fetch_data(){
    let res = await fetch('https://austriana.github.io/kontakt/data.json');
    let data = await res.json();
    return data.PASSWORT;
}
console.log(fetch_data());