function whereAmI(lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
        if (!response.ok) {
            throw new Error("You might request too much")
        }
        return response.json();
    })
    .then((data) => {
      return console.log(`You are in ${data.city}, ${data.country}`);
    })
    .catch((err) => console.log(`Something went wrong ${err.message}`));
}


atitude1 = [-33.933, 18.474]
atitude2 = [19.037, 72.873]
atitude3 = [52.508, 13.381]


const generateContent = () => {
  let randomNumber = Math.floor(Math.random() * 2) + 1
  let atitude = eval("atitude" + randomNumber)
  whereAmI(atitude);
}


whereAmI(-33.933, 18.474)