function  movie(){
    var request= new XMLHttpRequest();
    var moviename=document.getElementById("temp").value;
    var url="https://imdb-api.com/en/API/IMDbList/k_9vcy2qoj/ls004285275";
    request.open('GET',url,true)
    request.onload=function(){
        var result=JSON.parse(this.response)
        //console.log(result)
        for(i=0;i<120;i++){
            if(moviename==result.items[i].title){
            console.log(result.items[i].imDbRating);
            var rating=result.items[i].imDbRating;
            document.getElementById("t").value=rating; 
           }
        }
        
    }
    request.send()

}