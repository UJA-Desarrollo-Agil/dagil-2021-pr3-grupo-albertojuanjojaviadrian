// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------
var SUMA = 100 / 14;
var intentaPasar = false;
var Escena1Visitada = false;
var Escena2Visitada = false;
var Escena3Visitada = false;
var Escena4Visitada = false;
var Escena5Visitada = false;
var Escena6Visitada = false;
var Escena7Visitada = false;
var Escena8Visitada = false;
var Escena9Visitada = false;
var Escena10Visitada = false;
var EscenaDialogo = false;
var EscenaPluma=false;
var EscenaDedazo=false;
var combinacionCorrecta = false;
var colores = [];


/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000;

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500;

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500;

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {

    start: new undum.SimpleSituation(
        "<p><h1>La Gran Guerra</h1>\
      <i>Año 2188. La humanidad ha alcanzado un conocimiento casi completo del universo y niveles tecnológicos inimaginables.\
      Sin embargo, una última gran guerra ha paralizado al mundo entero durante 50 años: la guerra del arroz.</i></p>\
      <br><center><img src='media/img/escena0.png' width='180' height='auto'></center><br>\
      <p><i>El mundo se dividió en dos grandes facciones:\
      aquellos que creían que el arroz debía comerse con cuchara, y aquellos que proclamaban que había que hacerlo con tenedor.\
      Ciudades fueron invadidas en nombre de las Cucharas, bombas surcaron los aires por parte de los Tenedores. La humanidad\
      estaba lidiando con mucho dolor para decidir cómo se come el arroz. Pero ahora, es tu momento. Tú, un valeroso Cuchara,\
      pondrás fin a este conflicto en una misión final, peligrosa pero decisiva. Te acabas de infiltrar en el cuartel general de los líderes Tenedores.</p>\
      <br>\
      <p class='transient'></i><a href='escena1'>¡Adelante!</a></p>"
    ),

    escena1: new undum.SimpleSituation(
        "<p><h1>Sala de basuras</h1>\
    Te encuentras en la sala de basuras del cuartel general. Te has infiltrado escondido en un camión automático recogebasuras, que te ha llevado\
     directamente hasta allí. Eres un genio estratega, por eso te escogieron para esta misión. Aunque un genio estratega que ahora huele un poco mal.</p>\
     <br><center><img src='media/img/escena1.png' width='200' height='auto'></center><br>\
     <p class='transient'>Delante de ti tienes una única puerta que parece dar al interior del cuartel general. <a href='escena2'>Puedes cruzarla.</a></p>", {
            actions: {},
            enter: function(character, system, action) {
                if (!Escena1Visitada) {
                    system.setQuality(
                        "puntuacion",
                        character.qualities.puntuacion + SUMA
                    );
                    Escena1Visitada = true;
                }
            },
        }
    ),

    escena2: new undum.SimpleSituation(
        "<p><h1>Sala de los Cuadros</h1>\
    Cruzas la puerta de la sala de basuras. Te encuentras en una habitación más grande, adornada con unos impresionantes cuadros de los líderes Tenedores.\
    Parece que los Tenedores no escatiman en gastos, al contrario que los Cucharas, que son austeros a más no poder. Terciopelo, estatuas de marfil... la decoración es impresionante.</p>\
    <br><center><img src='media/img/escena2.png' width='500' height='auto'></center><br>\
    <p class='transient'>A tu izquierda hay una puerta con un rótulo que dice <a href='escena3'>\"Almacén\"</a>. A tu derecha hay otra puerta que parece llevar a\
    la <a href='escena4'>sala principal</a> del cuartel general </p>", {
            actions: {
                ejemplo2: function enter(character, system, action) {},
            },
            enter: function(character, system, action) {
                if (!Escena2Visitada) {
                    system.setQuality(
                        "puntuacion",
                        character.qualities.puntuacion + SUMA
                    );
                    Escena2Visitada = true;
                }
            },
        }
    ),

    escena3: new undum.SimpleSituation(
        "<h1>Almacén</h1>\
    <p>Estás en el interior del almacén, lo sabes porque antes de entrar viste un bonito rótulo que así lo indicaba. \
        Miras a tu alrededor y observas unas cuantas estanterías repletas de latas de conserva, a juzgar por su aspecto, algo antiguas.Deberán ser \
        las provisiones de los soldados tenedores que están luchando en el frente.Sientes algo de envidia, ya que aquellas <a class='once' href='./lata'>latas de conserva</a> se \
        ven mas jugosas y apetecibles que la comida que dan en el frente cucharil.</p>\
        <br><center><img src='media/img/escena3.png' width='500' height='auto'></center><br>\
    <p>Mas adelante observas que en la pared hay distintos posters con propaganda \
    de tenedores. Entre ellos te fijas en uno en específico que dice así: <b>¡Uno, grande y libre!</b>, junto al \
    lema, una fotografía de un gran tenedor ondeando la bandera. No entiendes cómo podrán comer con un tenedor tan grande.</p>\
    <br>\
    <p class='transient'>Terminas de observar los posters y al agachar un poco la cabeza te encuentras con un <a class='once' href='./sargento'>muñeco de un sargento tenedor</a> de escala \
    real sentado en el suelo, ¡con su uniforme y todo! Puedes <a href='escena2'>volver a la sala anterior</a>.</p></br>", {
            actions: {
                lata: function(character, system, action) {
                    system.write("<p>Las latas de conserva son de la marca \"Chucara\", una famosa marca de comida enlatada producida\
                        por empresas afiliadas al bando cucharil. ¿cómo habrán llegado aquí?</p></br>");
                },

                sargento: function(character, system, action) {
                    system.write(
                        "<p>Mirando mas de cerca al muñeco parece que no es tan... muñeco, pero realmente esta muy buenas condiciones.\
            Parece que esta conservado en escabeche.</p>"
                    );

                    if (intentaPasar === true && character.qualities.tarjeta === false) {
                        system.setQuality("tarjeta", true);
                        system.setQuality(
                            "puntuacion",
                            character.qualities.puntuacion + SUMA
                        );
                        system.write(
                            "</br><p>¡Anda! Parece que el señor sargento tenía la llave que necesitas. La cogerás prestada, aunque te sientes algo mal por quitarsela.</p>"
                        );

                    }
                },
            },
            enter: function(character, system, action) {
                if (!Escena3Visitada) {
                    system.setQuality(
                        "puntuacion",
                        character.qualities.puntuacion + SUMA
                    );
                    Escena3Visitada = true;
                }
            },
        }
    ),

    escena4: new undum.SimpleSituation(
        "<p><h1>Pasillo a Sala Principal</h1>\Cruzas la puerta y llegas a un pasillo que está aparentemente vacío, con otra puerta al fondo. No entiendes qué sentido tiene esta construcción,\
    pero seguro que los arquitectos tenían un motivo para hacerlo. Cruzas el pasillo, observando con curiosidad las paredes de este.</p>\
    <br><center><img src='media/img/escena4.png' width='500' height='auto'></center><br>\
    <p class='transient'>Llegas a la puerta de salida y estás seguro de que esta puerta sí lleva a la sala principal.\
    Intentas <a class='once' href='./cruzar'>cruzarla</a>.</p>", {
            actions: {
                cruzar: function enter(character, system, action) {
                    if (character.qualities.tarjeta === false) {
                        system.write(
                            "</br><p>Te acercas a la puerta que lleva a la sala principal y esperas a que se abra, ya que es automática. \
                    Tras unos segundos, nada ocurre. Empiezas a pensar que no tienes alma y por eso la puerta no te detecta. \
                    Luego se te ocurre una teoría más plausible; quizás debas buscar una llave electrónica para poder pasar. Decides <a href='escena2'>volver atrás</a> y buscarla.</p>"
                        );

                        intentaPasar = true;
                    } else {
                        system.write(
                            "</br><p class='transient'>Te acercas a la puerta que lleva a la sala principal una vez mas, esta vez con la tarjeta del señor sargento. \
                    La puerta se abre sin que tu hagas nada. Resulta que si era automática, sólo tenías que acercarte un poquito más. Puedes \
                    <a href='escenadialogo'>pasar.</a></p>"
                        );
                    }
                },
            },
            enter: function(character, system, action) {
                if (!Escena4Visitada) {
                    system.setQuality(
                        "puntuacion",
                        character.qualities.puntuacion + SUMA
                    );
                    Escena4Visitada = true;
                }
            },
        }
    ),

    escenadialogo: new undum.SimpleSituation(
        "<p><h1>Sala dialogo</h1> Te encuentras con un cuchillo en mal estado el cual te pide ayuda.</p>\
        <p class='transient'><a class='once' href='./dialogo'>Dedices hablarle</a> ya que te da pena verlo así.</p>", {
            actions: {
                dialogo: function enter(character, system, action) {
                    system.write(
                        "</br><p>Te dice que le gustaría tener un peso de protagonismo en la\
                        historia, pero debido a que se ha creado su existencia tarde y la historia ya está completa\
                        ya nunca podrá ser relevante y estará condenado a ser una misión secundaria.</p>\
                        <p><a class='once' href='./dialogo2'> Decides ignorarlo ya que no tiene que ver nada contigo.</a></p>\
                        <p><a class='once' href='./dialogo3'> <p>Decides seguir escuchando</a></p>");
                },
                dialogo2: function enter(character, system, action) {
                    system.write(
                        "</br><p>Te agarra  mientras te suplica que hables con el un momento, tras intentar soltarte sin resultado. </p>\
                        <p><a class='once' href='./dialogo3'> <p>Decides ayudarlo/a></p>");
                },
                dialogo3: function enter(character, system, action) {
                    system.write(
                        "</br><p>Le contestas que como puedes ayudarlo</p>\
                        <p>Responde que el no tiene salvación ya que es muy tarde para que tenga un protagonismo en la historia, pero le gustaría antes de morir\
                        darte una tarea para que incluyas más trabajo al proyecto y así tener mas posibilidades de tener una buena nota</p>\
                        <p><a class='once' href='escena5'> Le contestas que no tienes interés en sacar buena nota y continúas la historia.</a></p>\
                        <p><a class='once' href='./dialogo4'> <p>Te muestras interesado por sacar buena nota y le preguntas que debes hacer</a></p>");
                },
                dialogo4: function enter(character, system, action) {
                    system.write(
                        "</br><p>Tras preguntarle, te dice que debes de ganarle al gran Dedazo que es invicto en el lazamiento de dados para ganarle, te aconseja que deberías de ir \
                        a por la pluma de la suerte</p>\
                        <p><a class='once' href='escenadedazo'> Tras decirle que no necesitas ayuda procedes a ir a jugar contra el gran Dedáfono.</a></p>\
                        <p><a class='once' href='./dialogo5'> <p>Tras pensarlo decides decirle que tiene razón y le dices que irás primero a por la pluma de la suerte</a></p>");
                },
                dialogo5: function enter(character, system, action) {
                    system.write(
                        "</br><p>Antes de irte a por la pluma te aconseja que deberás de tener mucha paciencia ya que solo el gran Dedazo y su hermano Dicephoon han conseguido \
                        obtener el 7 necesario para conseguir la pluma tras muchísimos intentos.</p> \
                        <p>Le contestas que no tiene nada de que preocuparse, que no saldrás de la sala hasta que no la consigas</p>\
                        <p>El cuchillo te desea mucha suerte en tu aventura.</p>\
                        <p><a class='once' href='escenapluma'> <p>Te vas a la sala de la pluma.</a></p>");
                }
            },
            enter: function(character, system, action) {
                if (!EscenaDialogo) {
                    system.setQuality(
                        "puntuacion",
                        character.qualities.puntuacion + SUMA
                    );
                    EscenaDialogo = true;
                }
            },
        }
    ),


    escenapluma: new undum.SimpleSituation(
        "<p><h1>Escena pluma de la suerte</h1>\
        Estás en la sala donde se dice que se encuentra la pluma legendaria de la suerte, se dice que se entrega a aquellos que consiguen sacar el número 7 en un dado de 6 caras</p>\
        <p><a href='./lanzamiento'> <p>Te dispones a tirar el dado esperando a que salga un 7 mágicamente.</a></p>", {
            actions: {
                lanzamiento: function(character, system, action) {


                    if (system.rnd.randomInt(1, 7) == 7) {
                        system.write(
                            "</br><p>Tras lanzar ese dado te das cuenta de que mágicamente ha a parecido un 7, no crees lo que esta pasando, \
                            revisas de nuevo las caras y al volver a la cara del 7 te das cuenta de que ese 7 ha desaparecido y aparece un uno en su lugar</p>. \
                            </br><p>Ves que algo te ha rozado la frente, tras tocartela para ver que es, es una pluma plateada extremadamente brillante, \
                            has encontrado la pluma de la suerte.</p>")
                        system.setQuality("pluma", true);
                        system.setQuality(
                            "puntuacion",
                            character.qualities.puntuacion + SUMA
                        );
                        system.write(
                            "<p><a class='once' href='escenadedazo'> <p>Te vas a la sala del jefe ahora que estas totalmente preparado.</a></p>");

                    }

                },
            },
            enter: function(character, system, action) {
                if (!EscenaPluma) {
                    system.setQuality(
                        "puntuacion",
                        character.qualities.puntuacion + SUMA
                    );
                    EscenaPluma = true;
                }
            },
        }

    ),

    escenadedazo: new undum.SimpleSituation(
        "<h1>Escena del Jefazo DEDAZO</h1>\
        Estás en la sala donde se encuentra el gran lanzador de dados, comenzará una batalla épica en la que tendrás que vencer</p>\
        <p><a href='./ejemplo2'> <p>Te dispones a lanzar los dados</a></p>",
        
        {
            actions: {
                ejemplo2: function enter(character, system, action) {
                    
                    var dado1;
                    var dado2;
                    var dado3;
                    var sumaPersonaje;
                    var sumaDedazo;

                    if (!character.qualities.pluma) {
                        dado1 = system.rnd.randomInt( 1, 3 );
                        dado2 = system.rnd.randomInt( 1, 3 );
                        dado3 = system.rnd.randomInt( 1, 3 );
                    } else {
                        dado1 = system.rnd.randomInt( 4, 6 );
                        dado2 = system.rnd.randomInt( 4, 6 );
                        dado3 = system.rnd.randomInt( 4, 6 );
                    }

                    dado1Dedazo = system.rnd.randomInt(4, 6 );
                    dado2Dedazo = system.rnd.randomInt( 4, 6 );
                    dado3Dedazo = system.rnd.randomInt( 4, 6 );

                    system.write("<center><h3><b>Tus dados</b></h3></center>")
                    system.write("<p>Dado 1: " + dado1 + "</p>")
                    system.write("<p>Dado 2: " + dado2 + "</p>")
                    system.write("<p>Dado 3: " + dado3 + "</p>")

                    system.write("<center><h3><b>Dados del Jefazo DEDAZO</b></h3></center>")
                    system.write("<p>Dado 1 jefazo: " + dado1Dedazo + "</p>")
                    system.write("<p>Dado 2 jefazo: " + dado2Dedazo + "</p>")
                    system.write("<p>Dado 3 jefazo: " + dado3Dedazo + "</p>")


                    sumaPersonaje = dado1 + dado2 + dado3;
                    sumaDedazo = dado1Dedazo + dado2Dedazo + dado3Dedazo;

                    system.write("<center><h3><b>Puntuaciones</b></h3></center>")
                    system.write("<p>Tu puntuación es de: " + sumaPersonaje + "</p>")
                    system.write("<p>La puntuación del JEFAZO DEDAZO es de: " + sumaDedazo + "</p>")
                    
                    if (sumaDedazo < sumaPersonaje) {
                        system.write("<h3><b>Bravoooo!!!! HAS GANADO AL JEFAZO DEDAZO</b></h3>")
                        system.write("<p>Una vez que ya has derrotado al jefazo puedes volver a <a  href='escena5'>la sala principal</a></p>")
                    } else {
                        system.write("<p>Has perdido gran F</p>")
                        system.write("<a href='./ejemplo2'> <p>Volver a lanzar</a>")
                        if(!character.qualities.pluma){
                            system.write("<p><a href='escenapluma'> <p>Buscar pluma</a> </p>")
                        }
                    }

                },
            },
            enter: function (character, system, action) {
                if (!EscenaDedazo) {
                    system.setQuality(
                        "puntuacion",
                        character.qualities.puntuacion + SUMA
                    );
                    EscenaDedazo = true;
                }
            },
        }
    ),

    escena5: new undum.SimpleSituation(
        "<p><h1>Sala Principal</h1>\Tras cruzar la puerta con la llave electrónica, sientes un cosquilleo que te recorre el cuerpo. \
    Piensas que es la adrenalina que tienes al introducirte en la sala principal de los Tenedores, como cuando mueves una tarjeta en Trello.</p>\
    \
    <p>Observando la habitación encuentras pedestales con bustos de los generalísimos Tenedores al mando durante los últimos 50 años de guerra. \
    Hechos en mármol de Carraca. Tus conocimientos viendo documentales del canal Historia te hacen cuestionar que tan caros podrían ser esos pedestales.</p>\
    <br><center><img src='media/img/escena5.png' width='500' height='auto'></center><br>\
    <p>Frente de ti se situan 3 puertas de diferentes tamaños. La mas grande posee un gran rótulo que pone \
    <a href='./salajefe'><i>\"Tridente Dorado, generalísimo de los ejércitos tenedores\"</i></a>, por lo que puedes suponer que es la sala donde se encuentran \
    los mayores exponentes Tenedores. La siguiente puerta posee un rótulo esta vez menos llamativo que dice <a href='escena6'><i>\"Biblioteca\"</i></a>, por \
    el nombre supones que es una biblioteca. Por último la puerta mas pequeñita posee un rótulo escrito sobre una tabla de madera \
    sujeta por dos finos clavos que dice <a href='escena7'><i>\"WC\"</i></a>, tu intelecto como estratega te sugiere que es el cuarto de baño.</p>\
    <p class='transient'>A juzgar por el aspecto de esos clavos que sujetan el tablón de madera presientes que pueden caerse de un momento a otro,\
    por lo que puedes <a href='./esperar'>esperar</a>.</p>", {
            actions: {
                salajefe: function(character, system, action) {
                    if (character.qualities.traje === false) {
                        system.write("</br><p>Tienes que buscar traje.</p>")
                    } else {
                        system.write("<p>Puedes pasar (rellenar texto) a <a href='escena9'> Sala Jefe </a>.</p></br>")
                    }
                },
            },
            enter: function(character, system, action) {
                if (!Escena5Visitada) {
                    system.setQuality("puntuacion", character.qualities.puntuacion + SUMA);
                    Escena5Visitada = true;
                }
            },
        }
    ),

    escena6: new undum.SimpleSituation(
        "<p><h1>Biblioteca</h1>\
        Decides entrar por la puerta de la biblioteca, y nada mas pasar recibes una bofetada de polvo y olor a libros viejos. \
            Los tenedores a pesar de parecer ostentosos y adinerados, no parece que tengan mucho interés por la literatura. \
    Esperas encontrar <i>\"El Cucharoncito\"</i>, un libro que quisiste leer desde pequeño, pero nunca pudiste por la guerra que atormenta al mundo.</p>\
    \
    <p>Mas adelante encuentras varios pasillos con estanterías repletas de libros, te sorprende que todos los tomos tengan la cubierta de un tono grisaceo.</p>\
    <br><center><img src='media/img/escena6.png' width='500' height='auto'></center><br>\
    <p>Entre la multitud de libros, encuentras tres brillantes tomos que destacan de entre el mar de libros grisáceos. El primer libro es de color <a class='once' href='./verde'>verde esmeralda</a>, \
    el segundo libro es <a class='once' href='./rojo'>rojo escarlata</a> y el último es <a class='once' href='./azul'>azul cobalto</a>.</p>\
    \
    <p class='transient'>También puedes volver a <a href='escena5'>sala principal</a>.</p>", {
            actions: {
                rojo: function enter(character, system, action) {
                    colores.push("rojo");

                    system.write("<p>El libro rojo se titula: \"Cartas para Cuchaura\", de Blue Tenedorils. Oyes un clic.</p></br>")
                    if (colores.length === 3) {
                        if (colores[0] === "rojo" && colores[1] === "verde" && colores[2] === "azul") {
                            combinacionCorrecta = true;

                            system.write("<p>Oyes a lo lejos un sonido que te recuerda a una cadena de váter. También oyes un ligero \"Noooooooo...\" \
                      Parece que en algun lugar ha cambiado algo.</p></br>")
                        } else {
                            colores = []
                        }
                    }
                },
                verde: function enter(character, system, action) {
                    colores.push("verde");

                    system.write("<p>El libro verde se titula: \"El Chanquete\", de Platón. Oyes un clic.</p></br>")
                    if (colores.length === 3) {
                        if (colores[0] === "rojo" && colores[1] === "verde" && colores[2] === "azul") {
                            combinacionCorrecta = true;

                            system.write("<p>Oyes a lo lejos un sonido que te recuerda a una cadena de váter. También oyes un ligero \"Noooooooo...\" \
                      Parece que en algun lugar ha cambiado algo.</p></br>")
                        } else {
                            colores = []
                        }
                    }
                },
                azul: function enter(character, system, action) {
                    colores.push("azul");

                    system.write("<p>El libro azul se titula: \"El libro troll\", de Rubius. Veo que son hombres de cultura. Oyes un clic.</p></br>")
                    if (colores.length === 3) {
                        if (colores[0] === "rojo" && colores[1] === "verde" && colores[2] === "azul") {
                            combinacionCorrecta = true;

                            system.write("<p>Oyes a lo lejos un sonido que te recuerda a una cadena de váter. También oyes un ligero \"Noooooooo...\" \
                      Parece que en algun lugar ha cambiado algo.</p></br>")
                        } else {
                            colores = []
                        }
                    }
                },
            },
            enter: function(character, system, action) {
                if (!Escena6Visitada) {
                    system.setQuality("puntuacion", character.qualities.puntuacion + SUMA);
                    Escena6Visitada = true;
                }
            }
        }
    ),

    escena7: new undum.SimpleSituation(
        "<p><h1>Cuarto de baño</h1>\Entras al cuarto de baño, es bastante grande, comparado con el tamaño de la puerta. Te sorprende ver un cuarto de baño tan reluciente, \
            puesto que no viste uno tan limpio desde que tu madre se fue a comprar leche y no volvió nunca... Esperas que no se haya perdido, \
    el camino hacia la tienda es algo rebuscado.</p>\
    <br><center><img src='media/img/escena7.png' width='500' height='auto'></center><br>\
        <p> Hay un lavabo con un espejo, al verte reflejado, te llena de orgullo saber que estas a punto de acabar con esta interminable guerra. \
        También hay 3 de cepillos de dientes de diferentes colores: uno rojo, otro verde y otro azul. Están sin usar, te planteas si los tenedores se limpiaran entre las puntas, \
    debe de ser muy anti-higiénico.</p>\
    </br >\
        <p> También hay tres vateres, aunque te extraña que solo uno de ellos esté <a class='once' href='./vater'>cubierto</a> para proteger la intimidad.</p>\
    </br >\
        <p class='transient'>También puedes volver a <a href='escena5'>sala principal</a>.</p>", {
            actions: {
                vater: function enter(character, system, action) {
                    if (combinacionCorrecta) {
                        system.write("<p>Entras al habitáculo. Te esperabas un váter, pero sólo hay una puerta en la pared. Está oscuro y te da algo de cague, pero decides <a href='escena8'>entrar</a>.</p>")
                    } else {
                        system.write("</br><p>Está ocupado.</p>");
                    }
                },
            },
            enter: function(character, system, action) {
                if (!Escena7Visitada) {
                    system.setQuality("puntuacion", character.qualities.puntuacion + SUMA);
                    Escena7Visitada = true;
                }
            }
        }
    ),

    escena8: new undum.SimpleSituation(
        "<p><h1>Sala secreta</h1>\Entras a la sala secreta. Es una habitación pequeña, llena de pósteres de Don Tenedón\
    y otras celebridades.</p>\
    </br>\
    <p>En una esquina ves a un Tenedor tirado en el suelo, aparentemente muerto. Parece que se quedó\
    encerrado en la sala y nunca pudo salir. Esperas que no te pase lo mismo. Te acercas para observarle pero, de repente,\
    despierta.</p>\
    </br>\
    <p><i> Por fin... ¡Por fin soy libre! Entré hace 30 años en esta sala y me quedé encerrado para siempre. El arquitecto quería probar su eficacia\
    Supongo que funcionó. Imagino que estás aquí para acabar con todos los Tenedores. A mí déjame, yo voy a desertar. Llevo 30 años alimentándome de moho y\
    estoy harto de esta guerra. De hecho, te ayudaré a ponerle fin.</p></br>\
    <p>Vamos a jugar a Piedra, Papel y Tijeras Modo Difícil. Tú sólo tienes piedra y yo tengo piedra, papel y tijera. Si me ganas te daré mi traje y podrás infiltrarte en la sala de los jefes. ¡Vamos!</i></p>\
    </br>\
    <p>Selecciona tu ataque: </p></br>\
    <p>- <a class='once' href='./piedra'>Piedra</a> -</p></br>", {
            actions: {
                piedra: function enter(character, system, action) {

                    //1 == piedra, 2 == papel, 3 == tijera
                    var ataqueOtro = system.rnd.dice(1, 3);
                    var ganado = false;

                    if (ataqueOtro === 1) {
                        system.write("<p>Tu ataque: <b>Piedra</b> -- Ataque del rival: <b>Piedra</b></p></br>");
                        system.write("<p>¡Ah, empate! ¿Me has leído la mente?</p>");
                    } else if (ataqueOtro === 2) {
                        system.write("<p>Tu ataque: <b>Piedra</b> -- Ataque del rival: <b>Papel</b></p></br>");
                        system.write("<p>Jeje, ¡te gané! Esto se me da bien.</p>");
                    } else if (ataqueOtro === 3) {
                        system.write("<p>Tu ataque: <b>Piedra</b> -- Ataque del rival: <b>Tijera</b></p></br>");
                        system.write("<p>Pero, cómo es posible... He.. ¿He perdido?</p>");
                        ganado = true;
                    }

                    if (!ganado) {
                        system.write("<p>Selecciona tu ataque: </p></br>\
                        <p>- <a class='once' href='./piedra'>Piedra</a> -</p></br>");
                    } else {
                        system.write("<p>Ganado. Ahora vuelve a <a href='escena7'>baño</a>.</p></br>");

                        if (character.qualities.traje == false) {
                            system.setQuality("traje", true);
                            system.setQuality(
                                "puntuacion",
                                character.qualities.puntuacion + SUMA
                            );
                        }
                    }
                }
            },
            enter: function(character, system, action) {
                if (!Escena8Visitada) {
                    system.setQuality("puntuacion", character.qualities.puntuacion + SUMA);
                    Escena8Visitada = true;
                }
            }
        }
    ),

    escena9: new undum.SimpleSituation(
        "<p><h1>Sala del Líder</h1>\Consigues entrar en la sala del líder Tenedor, pasando desapercibido con tu flagrante nuevo traje. Esperas ver a un líder imponente en un trono con forma de cubierto,\
        o a un consejo de guerra planeando el próximo ataque tenedoril. Pero lo que ves te deja totalmente confuso.</p>\
        </br>\
        <p>La sala del líder es una sala enorme, llena de pequeñas mesas con pocos metros de separación entre sí. Encima de esas mesas hay muchos platos, con una paellera gigante en\
        el centro de cada una, llena de un arroz con pinta deliciosa. Pero lo que más te confunde es ver que alrededor de esas mesas hay decenas de agentes Tenedor mezclados con agentes Cuchara.\
        Todos están comiendo el arroz sin preocupación, charlando y riendo entre ellos. Incluso llegas a ver a algunos Cucharas comiendo con tenedor, y viceversa.<p>\
        <br><center><img src='media/img/escena7.png' width='500' height='auto'></center><br>\
        <p>Te habían engañado. Os habían engañado a todos. Los altos mandos Tenedores y Cucharas siempre habían estado aliados, incentivando esta guerra entre\
        la gente de a pie por algún motivo. Ahora sólo tienes dos opciones:<p>\
        </br>\
        <p class='transient'><a href='escena10lucha'>Lucha por tus ideas</a> o <a href='escena10union'> únete a ellos</a>.</p>", {
            actions: {
                ejemplo1: function enter(character, system, action) {},
            },
            enter: function(character, system, action) {
                if (!Escena9Visitada) {
                    system.setQuality("puntuacion", character.qualities.puntuacion + SUMA);
                    Escena9Visitada = true;
                }
            }
        }
    ),

    escena10lucha: new undum.SimpleSituation(
        "<p><h1>Lucha por tus ideas</h1>\No puedes tolerar esto. Decides luchar por las ideas que siempre has defendido hasta el final. Miras alrededor y agarras lo primero que ves para usarlo como arma. Te dispones a atacar.</p>\
        </br>\
        <p>Tras esta valerosa actuación, todos los agentes allí presentes empiezan a reírse a carcajadas. Uno de ellos hace un gesto y pocos segundos después estás atado de manos y pies. Te levantan fácilmente y te llevan como si fueras un saco de patatas.</p>\
        </br>\
        <p>Poco después te encuentras en una sala casi totalmente oscura. Oyes cómo una puerta se cierra tras de ti. Te sientes totalmente desesperanzado. De repente, oyes un ligero ruido y miras a tu alrededor con atención. Ves un par de ojos brillar en la oscuridad. Otro par de pares aparecen alrededor. Pocos segundos después, cientos de ojos te miran fijamente.</p>\
        </br>\
        <p><i>Bienvenido. Eres el número 420...</i></p>", {
            actions: {
                ejemplo1: function enter(character, system, action) {},
            },
            enter: function(character, system, action) {
                if (!Escena10Visitada) {
                    system.setQuality("puntuacion", character.qualities.puntuacion + SUMA);
                    Escena10Visitada = true;
                }
            }
        }
    ),

    escena10union: new undum.SimpleSituation(
        "<p><h1>Únete a ellos</h1>\Rápidamente comprendes lo que está ocurriendo. Todo era una mentira, todo por lo que habías luchado no tenía ningún sentido. Decides que lo más inteligente es unirte a ellos.</p>\
        </br>\
        <p>Levantas las manos sobre tu cabeza y les explicas que quieres ser parte de la Unión. Se miran entre sí y un Tenedor habla:</p>\
        </br>\
        <p><i>Pareces inteligente. De acuerdo, te aceptaremos. Debes saber que esta absurda guerra que expandimos durante años tiene un motivo, y este es evitar que la gente se planté la verdadera gran pregunta: ¿la tortilla, con o sin cebolla?</i></p>\
        </br>\
        <p>Ahora entiendes la verdad. Una lágrima recorre tu mejilla mientras piensas en todos tus compañeros caídos y en todos los que siguen luchando. Ahora podrás protegerlos del verdadero mal.</p>,\
        </br>\
        <p>Miras a los grandes líderes y sonríes. Sabes qué, a partir de ahora, harás lo mejor para la humanidad. </p>", {
            actions: {
                ejemplo1: function enter(character, system, action) {},
            },
            enter: function(character, system, action) {
                if (!Escena10Visitada) {
                    system.setQuality("puntuacion", character.qualities.puntuacion + SUMA);
                    Escena10Visitada = true;
                }
            }
        }
    )
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    tarjeta: new undum.OnOffQuality("Tarjeta de seguridad", {
        priority: "0001",
        group: "inventario",
    }),
    traje: new undum.OnOffQuality("Traje cucharero", {
        priority: "0002",
        group: "inventario",
    }),
    pluma: new undum.OnOffQuality("Pluma plateada de la suerte", {
        priority: "0003",
        group: "inventario",
    }),
    puntuacion: new undum.IntegerQuality("Puntuación", {
        priority: "0001",
        group: "porcentaje",
    }),
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    inventario: new undum.QualityGroup("Inventario", { priority: "0001" }),
    porcentaje: new undum.QualityGroup("Porcentaje Completado", {
        priority: "0001",
    }),
    variables: new undum.QualityGroup(null, { priority: "0001" }),
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.puntuacion = 0;
    character.qualities.tarjeta = false;
    character.qualities.traje = false;
};