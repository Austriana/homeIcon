let fetch_data = async () => {
  const url = "https://austriana.github.io/kontakt/data.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    convertData(result);
    console.log(convertData)
  } catch (error) {
    console.error(error.message);
  }
}
const convertData = result => result.PASSWORD;

fetch_data();