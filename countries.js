function countries()
{
  var request = new XMLHttpRequest();
  var country= document.getElementById("temp").value;
  
  //var movie="Pushpa"
   var url="https://restcountries.com/v3.1/name/"+country+"?fullText=true"
   
   request.open('Get',url)
   request.onload=function(){
       var result=JSON.parse(this.response)
       console.log(result);
      document.getElementById("result").value=result[0].currencies.INR.name;
      document.getElementById("result2").value=result[0].borders;
    }
   request.send();
   //console.log("Fetching")
}
