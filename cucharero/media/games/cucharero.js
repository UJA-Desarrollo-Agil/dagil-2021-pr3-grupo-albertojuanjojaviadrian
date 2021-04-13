// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------
var SUMA = 100 / 12;
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
       
        "<p class='transient'><a href='escena1'>Mover a escena 1</a></p>"
    ),

    escena1: new undum.SimpleSituation(
        "<p class='transient'><a href='escena2'>Mover a escena 2</a></p>",
        {
            actions: {
                ejemplo1: function enter(character, system, action){
                   
                },
            },
            enter: function (character, system, action) {
                system.setQuality("puntuacion", character.qualities.puntuacion + SUMA);
            }
            
        }
                
    ),

    escena2: new undum.SimpleSituation(
        "<p class='transient'><a href='escena3'>Mover a escena 3</a></p>\
        <p class='transient'><a href='Escena5'>Mover a escena 5</a></p>",
        {
            actions: {
                ejemplo2: function enter(character, system, action){
                   
                },
            },
            enter: function (character, system, action) {
                system.setQuality("puntuacion", character.qualities.puntuacion + SUMA);
            }
        }
                
    ),

    escena3: new undum.SimpleSituation(
        "<p class='transient'><a href='Escena2'>Mover a escena 2</a></p>",
        {
            actions: {
                ejemplo1: function enter(character, system, action){
                   
                },
            },
            enter: function (character, system, action) {
                system.setQuality("puntuacion", character.qualities.puntuacion + SUMA);
            }
        }
                
    ),

    Escena4: new undum.SimpleSituation(
        "<p class='transient'><a href='Escena 5'>Mover a escena 5</a></p>",
        {
            actions: {
                ejemplo4: function enter(character, system, action){
                   
                },
            },
            enter: function (character, system, action) {
                system.setQuality("puntuacion", character.qualities.puntuacion + SUMA);
            }
        }
                
    ),

    Escena5: new undum.SimpleSituation(
        "<p class='transient'><a href='Escena6'>Mover a escena 6</a></p>\
        <p class='transient'><a href='Escena7'>Mover a escena 7</a></p>\
        <p class='transient'><a href='Escena9'>Mover a escena 9</a></p>",
        {
            actions: {
                ejemplo1: function enter(character, system, action){
                   
                },
            },
            enter: function (character, system, action) {
                system.setQuality("puntuacion", character.qualities.puntuacion + SUMA);
            }
        }
                
    ),

    Escena6: new undum.SimpleSituation(
        "<p class='transient'><a href='Escena 5'>Mover a escena 5</a></p>",
        {
            actions: {
                ejemplo6: function enter(character, system, action){
                   
                },
            }
        }
                
    ),

    Escena7: new undum.SimpleSituation(
        "<p class='transient'><a href='Escena5'>Mover a escena 5</a></p>\
        <p class='transient'><a href='Escena8'>Mover a escena 8</a></p>",
        {
            actions: {
                ejemplo1: function enter(character, system, action){
                   
                },
            }
        }
                
    ),

    Escena8: new undum.SimpleSituation(
        "<p class='transient'><a href='Escena 7'>Mover a escena 7</a></p>",
        {
            actions: {
                ejemplo8: function enter(character, system, action){
                   
                },
            }
        }
                
    ),

    Escena9: new undum.SimpleSituation(
        "<p class='transient'><a href='Escena10'>Mover a escena 10</a></p>",
        {
            actions: {
                ejemplo1: function enter(character, system, action){
                   
                },
            }
        }
                
    ),

    Escena10: new undum.SimpleSituation(
        {
            actions: {
                ejemplo1: function enter(character, system, action){
                   
                },
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
    porcentaje: new undum.QualityGroup('Porcentaje Completado', {priority: "0001"}),
    variables: new undum.QualityGroup(null, {priority: "0001"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {
    character.qualities.puntuacion = 0;

    system.setCharacterText("<p>---</p>");
};