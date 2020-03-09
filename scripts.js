var d = new Date();
    var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
        "Noviembre", "Diciembre"
    ];
    var dia = d.getDate();
    var mes = d.getMonth();
    var horas = [];
    console.log(d.getHours());
    console.log(d.getMonth());
    console.log(dia);

    var today = "Hoy, en Chile, es " + dias[d.getDay()] + ' ' + d.getDate() + ' de ' + meses[d.getMonth()] + ' del ' + d
    .getFullYear() + '. Son las  ' + d.getHours() + ':' + (d.getMinutes()<10?'0':'') + d.getMinutes() + '.';
    $("#date").append(today);


   
    if (dia === 9 && mes === 2 ) {
        var typed3 = new Typed('#frase', {
            strings: ["¡Feliz aniversario, bonita!", "¡Feliz aniversario, hermosa!", "¡Feliz aniversario, preciosa!", "¡Feliz aniversario, wachita!", "¡Feliz aniversario, linda!", "¡Feliz aniversario, mi amor!", "¡Feliz aniversario, wawa!", "¡Feliz aniversario, bb!"],
            typeSpeed: 50,
            backSpeed: 40,
            cursorChar: ' ',
            smartBackspace: true,
          });
        document.getElementById("fraseInicial").innerHTML = "";
        document.getElementById('carta').innerHTML = "Hola, mira lo de arriba. Eso es lo que aprendí a hacer jajksa. Se que no se ve como mucho, pero al menos ahora cambia sin que tengas que refrescar la página :(. <br><br> Ya son 7 años oficial amor, es mucho tiempo. Aunque antes de que se cumpliera esta fecha yo ya decía que llevábamos 7 años, ah. Para que veas que estaba seguro de que íbamos a llegar acá. <br><br> Bueno, que más decirte que no te haya dicho en todos estos años. No quiero repetir lo mismo de siempre, pero sí puedo estar seguro de que todo este tiempo ha valido la pena porque estamos cumpliendo nuestros sueños paso a pasito. Me emociona pensar que estamos viejos y que todo lo que hemos vivido nos ha servido como experiencia para poder llegar acá y para lo que se viene, que, esperando que sea pronto, sea vivir juntos y tener perritos y un gato gris. No quiero que te alejes por nada en el mundo, quiero seguir estando contigo y acompañandote en todo lo que te queda por vivir. Quiero que salgamos, que viajemos, que cocinemos, que durmamos, veamos series, películas y que seamos felices mucho tiempo. <br><br> A pesar de que estés lejos, quiero que sepas que lo que siento por tí, ahora mismo, es más fuerte que nunca. Estoy convencidísimo de que quiero estar contigo y de que no quiero a nadie tan cerca mío como lo estás tú. Eres la persona más especial y más linda que conozco, tanto por dentro como por fuera. <br><br> Te extraño demasiado y quiero puro volver a verte, la verdad. Pero estoy tranquilo porque a pesar de todo, sé que allá estás bien y que estás siendo terrible feliz. Ojalá te acuerdes de todos los lugares bonitos para que después me lleves y podamos conocer allá. Me encanta estarme proyectando en ese sentido y también en el que vivamos juntos. Siento que son metas difíciles pero que estan mucho más cerca.<br><br> Te amo mucho mi amorrrsss, eris mi vida entera, no quiero que nunca te vayas lejos (amorosamente hablando) y que seamos felices mucho tiempo más. Te amo con todo mi corazón y desde la luna a Praga milquinientas veces. Vamos por 7 o muchos más años. Te estaré apañando en todo para que sigamos por este camino. Eres un sol. Te mando muchos besos y muchos abrazos a la distancia. Te amo un montón <3. <br><br> PD: Te debo un regalo. Cuando vuelvas te lo doy.";

        
    }
