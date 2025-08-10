async () => {
  const url = "https://austriana.github.io/kontakt/data.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    convertData(result);
  } catch (error) {
    console.error(error.message);
  }
}

function convertData (result){
    console.log(result)
    let passwort = result.PASSWORD;
    console.log(passwort);
}