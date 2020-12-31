window.addEventListener('load',()=>{

			async function Weather() {

    let response_1 = await fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en");
    let data_1 = await response_1.json();
    let response_2 = await fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en");
    let data_2 = await response_2.json();

webpage(data_1,data_2);
  }

function webpage(data_1,data_2) {
				var x = document.createElement("DIV");
				x.setAttribute("class", "myHeader");
				document.body.appendChild(x);

				var r = document.createElement("IMG");
				r.setAttribute("src","images/reload.png");
				r.setAttribute("class", "reload");
				r.addEventListener('click',()=> {location.reload();});
				x.appendChild(r);


				var y = document.createElement("H1");
				y.innerHTML = "Weather in Hong Kong";
				x.appendChild(y);


				var d = document.createElement("DIV");
				d.setAttribute("class","current-weather");
				x.appendChild(d);

				var weatherIcon = document.createElement("IMG");
				d.appendChild(weatherIcon);


				var h = document.createElement("DIV");
				d.appendChild(h);
				var r = document.createElement("IMG");
				r.setAttribute("src","images/thermometer.png");
				r.setAttribute("class", "icon");
				h.appendChild(r);
				var temperatureDegree = document.createElement("p");
				h.appendChild(temperatureDegree);


				var h = document.createElement("DIV");
				d.appendChild(h);
				var r = document.createElement("IMG");
				r.setAttribute("src","images/drop.png");
				r.setAttribute("class", "icon");
				h.appendChild(r);
				var humidity = document.createElement("p");
				h.appendChild(humidity);


				var h = document.createElement("DIV");
				d.appendChild(h);
				var r = document.createElement("IMG");
				r.setAttribute("src","images/rain.png");
				r.setAttribute("class", "icon");
				h.appendChild(r);
				var rainfall = document.createElement("p");
				rainfall.setAttribute("class", "rainfall-desp");
				h.appendChild(rainfall);

				if (data_1.uvindex != undefined && data_1.uvindex.data != undefined){
				var h = document.createElement("DIV");
				d.appendChild(h);
				var r = document.createElement("IMG");
				r.setAttribute("src","images/UVindex.png");
				r.setAttribute("class", "icon");
				h.appendChild(r);
				var uvlevel = document.createElement("p");
				uvlevel.setAttribute("class", "uvlevel-desp");
				uvlevel.textContent = data_1.uvindex.data[0].value;
				h.appendChild(uvlevel);
			}

				if (data_1.warningMessage[0] != "" && data_1.warningMessage[0] != undefined) {
				var r = document.createElement("DIV");
				r.setAttribute("class", "dropdown");
				x.appendChild(r);
				var button = document.createElement("BUTTON");
				button.setAttribute("class","dropbtn");
				button.textContent = "Warning ";
				var drop_img = document.createElement("IMG");
				drop_img.setAttribute("src","images/arrow.png");
				drop_img.setAttribute("class", "arrow");
				button.appendChild(drop_img);
				r.appendChild(button);
				var drop_con = document.createElement("div");
				drop_con.setAttribute("class", "dropdown-content");
				r.appendChild(drop_con);
				var warning = document.createElement("p");
				warning.setAttribute("class", "warning");
				warning.innerHTML=data_1.warningMessage[0];
				drop_con.appendChild(warning);
			}

				var lastupdate = document.createElement("p");
				lastupdate.setAttribute("class", "lastupdate-desp");
				lastupdate.innerHTML = "Last Update: "+data_1.updateTime.substr(11,5);
				x.appendChild(lastupdate);
				

				weatherIcon.src = `https://www.hko.gov.hk/images/HKOWxIconOutline/pic${data_1.icon[0]}.png`;

				temperatureDegree.textContent= data_1.temperature.data[1].value +"°C";

				humidity.textContent = data_1.humidity.data[0].value + "%";

				rainfall.textContent = data_1.rainfall.data[13].max + "mm";

				
var a = document.createElement("a");
  document.body.appendChild(a);
var buttons = document.createElement("DIV");
buttons.setAttribute("class","buttons")
a.appendChild(buttons);

var temp_button = document.createElement("BUTTON");
temp_button.setAttribute("class", "tablink");
temp_button.setAttribute("class","active");
temp_button.innerHTML = "Temperature";
temp_button.addEventListener("click", () => {
    ford.setAttribute("class","hide");
    city_temp.setAttribute("class","temp_div");
    fore_button.setAttribute("class","tablink");
    temp_button.setAttribute("class","active");
  });
buttons.appendChild(temp_button); 

var fore_button = document.createElement("BUTTON");
fore_button.setAttribute("class", "tablink")
fore_button.innerHTML = "Forecast";
fore_button.addEventListener("click", () => {
    city_temp.setAttribute("class","hide");
    fore_button.setAttribute("class","active");
    ford.setAttribute("class","fordiv");
    temp_button.setAttribute("class","tablink");   
  });
buttons.appendChild(fore_button); 




  city_temp = document.createElement("DIV");
    city_temp.setAttribute("class","temp_div");
    a.appendChild(city_temp);

    data_1.temperature.data.forEach( i => {
      var temp_city = document.createElement("DIV");
      temp_city.setAttribute("class","temp_city");
      city_temp.appendChild(temp_city);

      var c = document.createElement("IMG");
c.setAttribute("src", "images/cancel.ico");
c.setAttribute("class","close");
c.addEventListener("click",()=> {temp_city.setAttribute("class","hide")});
      temp_city.appendChild(c);

      var temp = document.createElement("P");
      var name = document.createElement("H3");
      temp_city.appendChild(name);
      temp_city.appendChild(temp);

      name.innerHTML = i.place;
      temp.innerHTML = i.value +"°C";
    });



    ford = document.createElement("DIV");
    ford.setAttribute("class","fordiv");
    a.appendChild(ford);

    data_2.weatherForecast.forEach( week => {
      var fore_card = document.createElement("DIV");
      var i = document.createElement("IMG");
      var h = document.createElement("P");
      var dy = document.createElement("P");
      var dt = document.createElement("H3");
      var t = document.createElement("P"); 
      
      ford.appendChild(fore_card);
      fore_card.appendChild(i);
      fore_card.appendChild(dt);
      fore_card.appendChild(dy);
      fore_card.appendChild(t);
      fore_card.appendChild(h);

      fore_card.setAttribute("class","fore_card");
      i.src = `https://www.hko.gov.hk/images/HKOWxIconOutline/pic${week.ForecastIcon}.png`;
      dt.innerHTML = week.forecastDate.substr(6,2)+"/"+week.forecastDate.substr(4,2);
      dy.innerHTML = week.week;
      t.innerHTML = week.forecastMintemp.value+"°C"+" | "+ week.forecastMaxtemp.value +"°C";
      h.innerHTML = week.forecastMinrh.value + "% - " + week.forecastMaxrh.value + "%";
    });
ford.setAttribute("class","hide");



if (50 <= data_1.icon[0] && data_1.icon[0] <= 54) {
        		document.body.style.backgroundImage="url('images/morning.jpg')";
        		x.style.background="linear-gradient(to bottom right, #ff9999 0%, #66ccff 100%)";
		        city_temp.style.background="linear-gradient(to bottom right, #ff9999 0%, #66ccff 100%)";
		        ford.style.background="linear-gradient(to bottom right, #ff9999 0%, #66ccff 100%)";

    			}
    			else if (60 <= data_1.icon[0] && data_1.icon[0] <= 65) {
        		document.body.style.backgroundImage="url('images/cloudy.jpg')";
        		x.style.background="linear-gradient(to bottom right, #0099ff 0%, #666699 100%)";
		        city_temp.style.background="linear-gradient(to bottom right, #0099ff 0%, #666699 100%)";
		        ford.style.background="linear-gradient(to bottom right, #0099ff 0%, #666699 100%)";

        	}
    			else {
		        document.body.style.backgroundImage="url('images/night.jpg')";
		        x.style.background="linear-gradient(to right, #3366ff 0%, #660066 100%)";
		        city_temp.style.background="linear-gradient(to right, #3366ff 0%, #660066 100%)";
		        ford.style.background="linear-gradient(to right, #3366ff 0%, #660066 100%)";
		        
		    }


  }
Weather();

			})