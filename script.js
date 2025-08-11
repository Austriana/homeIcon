let fetch_data = async (token) => {
    const url = `https://austriana.github.io/kontakt/${token}.json`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    if(response.ok){
        const result = await response.json();
        if(token === result.token){
            window.location.replace("http://www.w3schools.com");
        }
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