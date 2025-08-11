let permission = false;
let fetch_data = async (token) => {
    const url = `https://austriana.github.io/kontakt/${token}.json`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    if(response.ok){
        const result = await response.json();
        const name = result.name;
        const email = result.email;
        const adresse = result.adresse;
        const telefon = result.telefon;
        const passwort = result.passwort;
        if(token === result.passwort){
            permission = true;
        }
        console.log(name, email, adresse, telefon, passwort)
        console.log(permission);
    }
  } catch (error) {
    console.error(error.message);
  }
}

let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    let input = document.getElementById('input');
    fetch_data(input.value);
})