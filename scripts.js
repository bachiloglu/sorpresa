var d = new Date();
    var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
        "Noviembre", "Diciembre"
    ];

    var comoLeDigo = ["bonita", "hermosa", "preciosa", "wachita", "linda", "mi amor", "wawa", "bb"]
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
            smartBackspace: true, // this is a default
            loop: true
          });
        
        document.getElementById('videos').innerHTML= "";
        document.getElementById('carta').innerHTML = "aquí va el texto";

    }

  