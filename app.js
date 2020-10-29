window.addEventListener('load',()=>{
let temperatureDescription = document.querySelector(".temperature-description");
let temperatureDegree = document.querySelector(".temperature-degree");
let locationTimezone = document.querySelector(".location-timezone");
let weatherIcon = document.querySelector(".weather-icon");
			const api= `https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en`;

			fetch(api)
			.then(response => {
			return response.json();
		})
			.then(data=>{
				let weathicon = data.icon[0]
				weatherIcon.src = `https://www.hko.gov.hk/images/HKOWxIconOutline/pic${weathicon}.png`;
				temperatureDegree.textContent= data.temperature.data[1].value +"°C";
				temperatureDescription.textContent = data.humidity.data[0].value;
				document.querySelector(".warning-msg").textContent = data.warningMessage[0];
			})

		})