let fetch_data = async () => {
    let token = prompt();
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
        console.log(name, email, adresse, telefon, passwort)
    }
  } catch (error) {
    console.error(error.message);
  }
}
fetch_data();