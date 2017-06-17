var url_img = "https://github.com/miguel-moya/Quotes/blob/master/img/backgrounds",
var quotes = [
        {
            text: "“eExisten tres posibles respuestas ante un diseño: 'Sí', 'No' y '¡Wow!'. Hay que aspirar a Wow.”",
			author: "Milton Glaser",
			img: url_img + "milton_glaser.jpg",
		},
		{
			text: "“eEl diseño es el embajador silencioso de tu marca.”",
			author: "Paul Rand",
			img: url_img + "paul_rand.jpg",
		},
		{
			text: "“eUn buen diseño puede soportar la moda de 10 años.”",
			author: "Yves Saint Laurent",
			img: url_img + "yves_saint_laurent.jpg",
		},
        {
			text: "“eSi no es una marca es una mercancía.”",
			author: "Philip Kotler",
			img: url_img + "philip_kotler.jpg",
		}
    ];
var quote = quotes[Math.floor(Math.random() * quotes.length)];
var image = quote.img;