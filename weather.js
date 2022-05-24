function fetchWeather()
{
  var request = new XMLHttpRequest();
  var city = document.getElementById("temp").value;
  //var city="delhi"
   var url="http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=2f3922f624b398016c174f13d2f7b7a1&units=metric"
   request.open('Get',url)
   request.onload=function(){
       var result=JSON.parse(this.response)
       console.log(result);
       document.getElementById("result").value=result.main.temp
   }
   request.send();
   //console.log("Fetching")
}
