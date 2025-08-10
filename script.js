let fetch_data = async () => {
  const url = "https://austriana.github.io/kontakt/data.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    const name = result.Name;
    const email = result.Email;
    const adresse = result.Adresse;
    const telefon = result.Telefon;
    const passwort = result.PASSWORD;

    console.log(name, email, adresse, telefon, passwort)

  } catch (error) {
    console.error(error.message);
  }
}
fetch_data();