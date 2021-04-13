// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------
var SUMA = 100 / 12;
var Escena1Visitada = false;
var Escena2Visitada = false;
var Escena3Visitada = false;
var Escena4Visitada = false;
var Escena5Visitada = false;

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

    //ZONA LINEAL INICIO
    start: new undum.SimpleSituation(
        "<p class='transient'><a href='escena1'>Mover a escena 1</a></p>"
    ),


    escena1: new undum.SimpleSituation(
        "<p class='transient'>Te encuentras en la sala de basuras del cuartel general. Te has infiltrado escondido en un camión automático recogebasuras, que te ha llevado\
     directamente hasta allí. Eres un genio estratega, por eso te escogieron para esta misión. Aunque un genio estratega que ahora huele un poco mal.</p>\
     <br>\
     <p class='transient'>Delante de ti tienes una única puerta que parece dar al interior del cuartel general. <a href='escena2'>Puedes cruzarla.</a></p>",
        {
            actions: {
                ejemplo1: function enter(character, system, action) { },
            },
            enter: function (character, system, action) {
                if (!Escena1Visitada) {
                    system.setQuality("puntuacion", character.qualities.puntuacion + SUMA);
                    Escena1Visitada = true;
                }
            }
        }
    ),

    escena2: new undum.SimpleSituation(
        "<p class='transient'>Cruzas la puerta de la sala de basuras. Te encuentras en una habitación más grande, adornada con unos impresionantes cuadros de los líderes Tenedores.\
    Parece que los Tenedores no escatiman en gastos, al contrario que los Cucharas, que son austeros a más no poder. Terciopelo, estatuas de marfil... la decoración es impresionante.</p>\
    <br>\
    <p class='transient'>A tu izquierda hay una puerta con un rótulo que dice <a href='escena3'>\"Almacén\"</a>. A tu derecha hay otra puerta que parece llevar a\
    la <a href='escena4'>sala principal</a> del cuartel general </p>",
        {
            actions: {
                ejemplo2: function enter(character, system, action) { },
            },
            enter: function (character, system, action) {
                if (!Escena2Visitada) {
                    system.setQuality("puntuacion", character.qualities.puntuacion + SUMA);
                    Escena2Visitada = true;
                }
            }
        }
    ),

    escena3: new undum.SimpleSituation(
        "<p class='transient'>Estás en el interior del almacén, lo sabes porque antes de entrar viste un bonito rótulo que así lo indicaba. \
        Miras a tu alrededor y observas unas cuantas estanterías repletas de latas de conserva, a juzgar por su aspecto, algo antiguas.Deberán ser \
        las provisiones de los soldados tenedores que están luchando en el frente.Sientes algo de envidia, ya que aquellas < a href = './lata' > latas de conserva</a > \
        se ven mas jugosas y apetecibles que la comida que dan en el frente cucharil.</p >\
        <br>\
    <p class='transient'>Mas adelante observas que en la pared hay distintos posters con propaganda \
    de tenedores. Entre ellos te fijas en uno en específico que dice así: <b>¡Uno, grande y libre!</b>, junto al \
    lema, una fotografía de un gran tenedor ondeando la bandera. No entiendes cómo podrán comer con un tenedor tan grande.</p>\
    <br>\
    <p class='transient'>Terminas de observar los posters y al agachar un poco la cabeza te encuentras con un muñeco de un sargento tenedor de escala \
    real sentado en el suelo, ¡con su uniforme y todo! Puedes <a href='escena2'>volver a la sala anterior</a>.</p>",
        {
            actions: {
                lata: function enter(character, system, action) {
                    system.write(
                        '<p>Las latas de conserva son de la marca "Chucara", una famosa marca de comida enlatada producida \
            por empresas afiliadas al bando cucharil. ¿cómo habrán llegado aquí?</p>'

                    );
                    system.setCharacterText("<p>De lateo que te veo.</p>");
                },
            },
            enter: function (character, system, action) {
                if (!Escena3Visitada) {
                    system.setQuality("puntuacion", character.qualities.puntuacion + SUMA);
                    Escena3Visitada = true;
                }
            }
        }
    ),

    escena4: new undum.SimpleSituation(
        "<p class='transient'>Cruzas la puerta y llegas a un pasillo que está aparentemente vacío, con otra puerta al fondo. No entiendes qué sentido tiene esta construcción,\
    pero seguro que los arquitectos tenían un motivo para hacerlo. Cruzas el pasillo, observando con curiosidad las paredes de este.</p>\
    </br>\
    <p class='transient'>Llegas a la puerta de salida y estás seguro de que esta puerta sí lleva a la sala principal.\
    Intentas <a href='escena5'>cruzarla</a>.</p>",
        {
            actions: {
                ejemplo4: function enter(character, system, action) { },
            },
            enter: function (character, system, action) {
                if (!Escena4Visitada) {
                    system.setQuality("puntuacion", character.qualities.puntuacion + SUMA);
                    Escena4Visitada = true;
                }
            }
        }
    ),

    escena5: new undum.SimpleSituation(
        "<p class='transient'>Tras cruzar la puerta con la llave electrónica, sientes un cosquilleo que te recorre el cuerpo. \
    Piensas que es la adrenalina que tienes al introducirte en la sala principal de los Tenedores, como cuando mueves una tarjeta en Trello.</p>\
    \
    <p class='transient'>Observando la habitación encuentras pedestales con bustos de los generalísimos Tenedores al mando durante los últimos 50 años de guerra. \
    Hechos en mármol de Carraca. Tus conocimientos viendo documentales del canal Historia te hacen cuestionar que tan caros podrían ser esos pedestales.</p>\
    \
    <p class='transient'>Frente de ti se situan 3 puertas de diferentes tamaños. La mas grande posee un gran rótulo que pone \
    <a href='escena9'><i>\"Tridente Dorado, generalísimo de los ejércitos tenedores\"</i></a>, por lo que puedes suponer que es la sala donde se encuentran \
    los mayores exponentes Tenedores. La siguiente puerta posee un rótulo esta vez menos llamativo que dice <a href='escena6'><i>\"Biblioteca\"</i></a>, por \
    el nombre supones que es una biblioteca. Por último la puerta mas pequeñita posee un rótulo escrito sobre una tabla de madera \
    sujeta por dos finos clavos que dice <a href='escena7'><i>\"WC\"</i></a>, tu intelecto como estratega te sugiere que es el cuarto de baño.</p>\
    \
    <p class='transient'>A juzgar por el aspecto de esos clavos que sujetan el tablón de madera presientes que pueden caerse de un momento a otro,\
    por lo que puedes <a href='./esperar'>esperar</a>.</p>",
        {
            actions: {
                esperar: function enter(character, system, action) { },
            },
            enter: function (character, system, action) {
                if (!Escena5Visitada) {
                    system.setQuality("puntuacion", character.qualities.puntuacion + SUMA);
                    Escena5Visitada = true;
                }
            }
        }
    ),

    Escena6: new undum.SimpleSituation(
        "<p class='transient'>Decides entrar por la puerta de la biblioteca, y nada mas pasar recibes una bofetada de polvo y olor a libros viejos. \
            Los tenedores a pesar de parecer ostentosos y adinerados, no parece que tengan mucho interés por la literatura. \
    Esperas encontrar <i>\"El Cucharoncito\"</i>, un libro que quisiste leer desde pequeño, pero nunca pudiste por la guerra que atormenta al mundo.</p>\
    \
    <p class='transient'>Mas adelante encuentras varios pasillos con estanterías repletas de libros, te sorprende que todos los tomos tengan la cubierta de un tono grisaceo.</p>\
    \
    <p class='transient'>Entre la multitud de libros, encuentras tres brillantes tomos que destacan de entre el mar de libros grisáceos. El primer libro es de color rojo escarlata, \
    el segundo libro es verde esmeralda y el último es azul cobalto.</p>\
    \
    <p class='transient'>También puedes volver a <a href='escena5'>sala principal</a>.</p>",
        {
            actions: {
                ejemplo6: function enter(character, system, action) { },
            },
        }
    ),

    escena7: new undum.SimpleSituation(
        "<p class='transient'> Entras al cuarto de baño, es bastante grande, comparado con el tamaño de la puerta. Te sorprende ver un cuarto de baño tan reluciente, \
            puesto que no viste uno tan limpio desde que tu madre se fue a comprar leche y no volvió nunca... Esperas que no se haya perdido, \
    el camino hacia la tienda es algo rebuscado.</p>\
    </br>\
        <p class='transient'> Hay un lavabo con un espejo, al verte reflejado, te llena de orgullo saber que estas apunto de acabar con esta interminable guerra. \
        También hay 3 de cepillos de dientes de diferentes colores sin usar, te planteas si los tenedores se limpiaran entre las puntas, \
    debe de ser muy anti-higiénico.</p>\
    </br >\
        <p class='transient'> También hay tres vateres, aunque te extraña que solo uno de ellos esté <a href='escena8'>cubierto</a> para proteger la intimidad.</p>\
    </br >\
        <p class='transient'>También puedes volver a <a href='escena5'>sala principal</a>.</p>",
        {
            actions: {
                ejemplo1: function enter(character, system, action) { },
            },
        }
    ),

    escena8: new undum.SimpleSituation(
        "<p class='transient'>Entras a la sala secreta. Es un habitáculo pequeño, lleno de pósteres de Don Tenedón\
    y otras celebridades.</p>\
    </br>\
    <p class='transient'>En una esquina ves a un Tenedor tirado en el suelo, aparentemente muerto. Parece que se quedó\
    encerrado en la sala y nunca pudo salir. Esperas que no te pase lo mismo. Te acercas para observarle pero, de repente,\
    despierta.</p>\
    </br>\
    <p class='transient'><i> Por fin... ¡Por fin soy libre! Entré hace 30 años en esta sala y me quedé encerrado para siempre. El arquitecto quería probar su eficacia.\
    Supongo que funcionó. Imagino que estás aquí para acabar con todos los Tenedores. A mí déjame, yo voy a desertar. Llevo 30 años alimentándome de moho y\
    estoy harto de esta guerra. De hecho, te ayudaré a ponerle fin. Si me ganas a piedra, papel, tijeras te daré mi traje y podrás infiltrarte en la sala de los jefes. ¡Vamos! </i>\
    </br>\
    <p class='transient'><a href='escena7'>Mover a escena 7</a></p>",
        {
            actions: {
                ejemplo8: function enter(character, system, action) { },
            },
        }
    ),

    escena9: new undum.SimpleSituation(
        "<p class='transient'>RELLENAR<a href='escena10'>Mover a escena 10</a></p>",
        {
            actions: {
                ejemplo1: function enter(character, system, action) { },
            },
        }
    ),

    escena10: new undum.SimpleSituation(
        "<p class='transient'>AAA</p>",
        {
            actions: {
                ejemplo1: function enter(character, system, action) { },
            },
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
    puntuacion: new undum.IntegerQuality(
        "Puntuación", { priority: "0001", group: 'porcentaje' }
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    inventario: new undum.QualityGroup("Inventario", { priority: "0001" }),
    porcentaje: new undum.QualityGroup('Porcentaje Completado', { priority: "0001" }),
    variables: new undum.QualityGroup(null, { priority: "0001" })
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {
    character.qualities.puntuacion = 0;
    character.qualities.tarjeta = false;
    character.qualities.traje = false;
};

