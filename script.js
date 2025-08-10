let fetch_data = async () => {
  const url = "https://austriana.github.io/kontakt/data.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(convertData(result));
  } catch (error) {
    console.error(error.message);
  }
}
const convertData = result => {
    const name = result.Name;
    const email = result.Email;
    const adresse = result.Adresse;
    const telefon = result.Telefon;
    const passwort = result.PASSWORD;
    return name, adresse, email, telefon, passwort;
}

fetch_data();