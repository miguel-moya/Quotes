getScript('https://cdn.rawgit.com/miguel-moya/test/37cc0b98/quotes.js', function(){
    document.getElementById("quote").innerHTML =
    '<p class="quote">' + quote.text + '</p>' +
    '<footer class="author">' + quote.author + '</footer>'
    $('main').append($('<img>', { 
        src : image,  
        class : "bg", 
        alt : "quote.author"
    }));
});

function getScript(url, callback) {
   var script = document.createElement('script');
   script.type = 'text/javascript';
   script.src = url;
   script.onreadystatechange = callback;
   script.onload = callback;
   document.getElementsByTagName('head')[0].appendChild(script);
}

