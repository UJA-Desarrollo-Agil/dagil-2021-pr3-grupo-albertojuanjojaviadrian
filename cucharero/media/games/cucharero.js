// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

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
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500


/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {

    //ZONA LINEAL INICIO
    start: new undum.SimpleSituation(
        "<h1>Los rayos del Sol te acarician suavemente a través de la ventana...</h1>\
        <p>...mientras tu madre te grita.\n \</p>\
        </br>\
        <p><i>\n<<¡LEVÁNTATE Y VE A COMPRAR EL PAN, YA!>></i>\</p>\
        </br>\
        <p>Te estirazas, te quitas las legañas de los ojos (aunque algunas sobreviven) y te pones en pie. Te da bastante palo ir a por el pan, pero hoy \n\
        toca comer habicholillas con tomate y como no soportas su sabor sueles usar el pan para disimularlo. Así que, por tu propio bien, decides ir a comprar\n\
        con ganas.\</p>\
        </br>\
        <p class='transient'>Ahora sólo necesitas <a class='newsituation' href='habitacion'>buscar algo</a> para vestirte</p>"
    ),

    habitacion: new undum.SimpleSituation(
        "<h1>Exploras tu habitación</h1>\
        <p>Observas con detenimiento tu cuarto, mientras terminas de despertar. Está como siempre: ordenado... pero no demasiado.\</p>\
        </br>\
        <p>Entre otras cosas, encuentras unos <a href='./papeles' class='once'>papeles revueltos</a> \n\
        encima del escritorio, tu <a href='./zapatillas' class='once'>par de zapatillas</a> de casa preferidas al lado de la cama\n\
        y el <a href='./armario' class='once'>armario</a> a medio abrir.\</p>\
        </br>",
        {
            actions: {
                papeles: function enter(character, system, action){
                    system.write("<p>Entre los papeles ves un documento con tu nombre y tu carrera: Javier Camacho, Ing. Informática UJA. El folio tiene garabateados\n\
                    unos esquemas que dibujaste para un juego narrativo que nunca vió la luz. En él, el protagonista eras tú.\n\
                    </p> </br>"
                    );
            
                    system.setCharacterText("<p>Al leer tu nombre algo extraño cruza tu mente: no estás seguro de si esa es tu verdadera identidad, \n\
                    pero sientes que si no lo fuera algo terrible podría pasar...</p>"
                    );
                },
                
                zapatillas: function enter(character, system, action){
                    system.write("<p> Miras fijamente tus zapatillas. Te encantan porque son ridículas. Recuerdas que cuando las compraste \n\
                    estabas buscando las zapatillas más feas de la tienda. En cuanto las viste, supiste que eran las indicadas.\n\
                    </br>\
                    <img src='media/games/zapatillas.jpg' class='float_center'></p>\n\
                    </br>\
                    <p>Puedes <a href='./ponerzapatillas' class='once'>ponértelas</a> para hacer el ridículo durante el resto del día.</p> </br>"               
                    );
                },
                
                ponerzapatillas: function enter(character, system, action){
                    system.write("<p> Te pones las zapatillas. Te sientes un poco más feliz. Más o menos. </p> </br>");
            
                    system.setCharacterText("<p>Las palabras del Profesor Oak resuenan en tu cabeza: ¡Javier, cada cosa en su momento! </p>");
            
                    system.setQuality("zapatillas", true); 
                },
                
                armario: function enter(character, system, action){
                    system.write("<p>No sabes por qué el armario está medio abierto. Quizá un monstruo viva en él, o peor, \n\
                    quizá tu hermano pequeño ha vuelto a rebuscar entre tus cosas. No lo piensas mucho y miras tu ropa.</p> </br>\n\
                    \n\
                    <p class='transient'>Entre tu camiseta básica negra y tu camiseta básica carbón, ves una <a class='newsituation' href='camisetaroja'>camiseta básica azabache</a> y \n\
                    una <a class='newsituation' href='camisetaazul'>camiseta básica azul marino</a>. Te encantan estas trascendentales decisiones, aunque dada su importancia a veces \n\
                    llegas a la parálisis por análisis.</p>"
                    );
            
                    system.setCharacterText("<p>Piensas que la palabra armario es graciosa, porque arma significa arma, y río, río. Te imaginas un arma en un río. Un \n\
                    segundo después te alivias porque nadie esté leyendo tu mente.</p>"
                    );
                }
            }
        }
                
    ),
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = 'start';

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    zapatillas: new undum.OnOffQuality("-Zapatillas de casa", {priority: "0001", group: 'cosas'}),
    tiempoEspera: new undum.IntegerNoShow("Tiempo Espera", {priority: "0001", group: "invisible"}),
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    cosas: new undum.QualityGroup('Cosillas', {priority: "0001"}),
    invisible: new undum.QualityGroup(null, {priority: "0000"}),
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {
    character.qualities.zapatillas = false;
    character.qualities.tiempoEspera = 0;
    system.setCharacterText("<p>---</p>");
};