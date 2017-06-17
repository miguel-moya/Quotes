var url_img = "https://github.com/miguel-moya/Quotes/blob/master/img/backgrounds",
var quotes = [
        {
            text: "“3Existen tres posibles respuestas ante un diseño: 'Sí', 'No' y '¡Wow!'. Hay que aspirar a Wow.”",
			author: "Milton Glaser",
			img: url_img + "https://github.com/miguel-moya/Quotes/blob/master/img/backgrounds/milton_glaser.jpg",
		},
		{
			text: "“3El diseño es el embajador silencioso de tu marca.”",
			author: "Paul Rand",
			img: url_img + "https://github.com/miguel-moya/Quotes/blob/master/img/backgrounds/paul_rand.jpg",
		},
		{
			text: "“3Un buen diseño puede soportar la moda de 10 años.”",
			author: "Yves Saint Laurent",
			img: url_img + "https://github.com/miguel-moya/Quotes/blob/master/img/backgrounds/yves_saint_laurent.jpg",
		},
        {
			text: "“3Si no es una marca es una mercancía.”",
			author: "Philip Kotler",
			img: url_img + "https://github.com/miguel-moya/Quotes/blob/master/img/backgrounds/philip_kotler.jpg",
		}
    ];
var quote = quotes[Math.floor(Math.random() * quotes.length)];
var image = quote.img;