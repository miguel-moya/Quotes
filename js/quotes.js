var url_img = "http://www.trabajarlafelicidad.com/wp-content/uploads/test/";
var quotes = [
        {
            text: "“eExisten tres posibles respuestas ante un diseño: 'Sí', 'No' y '¡Wow!'. Hay que aspirar a Wow.”",
			author: "Milton Glaser",
			img: url_img + "milton_glaser.jpg",
		},
		{
			text: "“eEl diseño es el embajador silencioso de tu marca.”",
			author: "Paul Rand",
			img: "img/backgrounds/paul_rand.jpg",
		},
		{
			text: "“2eUn buen diseño puede soportar la moda de 10 años.”",
			author: "Yves Saint Laurent",
			img: "img/backgrounds/yves_saint_laurent.jpg",
		},
        {
			text: "“eSi no es una marca es una mercancía.”",
			author: "Philip Kotler",
			img: "img/backgrounds/philip_kotler.jpg",
		}
    ];
var quote = quotes[Math.floor(Math.random() * quotes.length)];
var image = quote.img;
