var url_img = "http://www.trabajarlafelicidad.com/wp-content/uploads/test/";
var quotes = [
        {
            text: "“Existen tres posibles respuestas ante un diseño: 'Sí', 'No' y '¡Wow!'. Hay que aspirar a Wow.”",
			author: "Milton Glaser",
			img: url_img + "milton_glaser.jpg",
		},
		{
			text: "“El diseño es el embajador silencioso de tu marca.”",
			author: "Paul Rand",
			img: url_img + "paul_rand.jpg",
		},
		{
			text: "“Un buen diseño puede soportar la moda de 10 años.”",
			author: "Yves Saint Laurent",
			img: url_img + "yves_saint_laurent.jpg",
		},
        	{
			text: "“Si no es una marca es una mercancía.”",
			author: "Philip Kotler",
			img: url_img + "philip_kotler.jpg",
		},
		{
			text: "“Una marca no es un producto, es la fuente del producto, su significado y su dirección”",
			author: "Jean-Nöel Kapferer",
			img: url_img + "jn_kapferer.jpg",
		}
    ];
var quote = quotes[Math.floor(Math.random() * quotes.length)];
var image = quote.img;
