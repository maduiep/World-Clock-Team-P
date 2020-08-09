
console.log('WeJapa Team P');

fetch("https://world-clock.p.rapidapi.com/json/est/now", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "world-clock.p.rapidapi.com",
		"x-rapidapi-key": "b440e25bf5msh5ac33c2f8f4b475p181cabjsn769b423c581e"
	}
})
.then(response => {
    console.log(response);
    return response.json()
  })
  .then(time => {
    console.log(time.currentDateTime);
    console.log(time.utcOffset);
    let dateTime = time.currentDateTime;
    
    console.log(dateTime);
    document.getElementById("time-display").innerHTML = time.currentDateTime;
  })
  .catch(err => {
    console.log(err);
  });
