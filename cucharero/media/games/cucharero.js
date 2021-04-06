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
    "<p class='transient'><a href='Escena1'>Mover a escena 1</a></p>"
  ),

  Escena1: new undum.SimpleSituation(
    "<p class='transient'><a href='Escena2'>Mover a escena 2</a></p>",
    {
      actions: {
        ejemplo1: function enter(character, system, action) {},
      },
    }
  ),

  Escena2: new undum.SimpleSituation(
    "<p class='transient'><a href='Escena3'>Mover a escena 3</a></p>\
        <p class='transient'><a href='Escena5'>Mover a escena 5</a></p>",
    {
      actions: {
        ejemplo2: function enter(character, system, action) {},
      },
    }
  ),

  Escena3: new undum.SimpleSituation(
    "<p class='transient'>Estás en el interior del almacén, lo sabes porque antes de entrar viste un bonito rótulo que así lo indicaba. \
        Miras a tu alrededor y observas unas cuantas estanterías repletas de latas de conserva, a juzgar por su aspecto, algo antiguas. Deberán ser \
        las provisiones de los soldados tenedores que están luchando en el frente. Sientes algo de envidia, ya que aquellas <a href='./lata'>latas de conserva</a> \
        se ven mas jugosas y apetecibles que la comida que dan en el frente cucharil. Mas adelante observas que en la pared hay distintos posters con propaganda \
        de tenedores. Entre ellos te fijas en uno en específico que dice así: *¡Uno, grande y libre!*, junto al \
        lema, una fotografía de un gran tenedor ondeando la bandera. No entiendes cómo podrán comer con un tenedor tan grande. \
        Terminas de observar los posters y al agachar un poco la cabeza te encuentras con un muñeco de un sargento tenedor de escala real sentado en el suelo, \
        ¡con su uniforme y todo! Puedes <a href='Escena2'>volver a la sala anterior</a></p>",
    {
      actions: {
        lata: function enter(character, system, action) {
          system.write(
            "<p>Las latas de conserva son de la marca \"Chucara\", una famosa marca de comida enlatada producida \
            por empresas afiliadas al bando cucharil. ¿cómo habrán llegado aquí?</p>"
          );
          system.setCharacterText(
            "<p>De lateo que te veo.</p>"
          );
        },
      },
    }
  ),

  Escena4: new undum.SimpleSituation(
    "<p class='transient'><a href='Escena 5'>Mover a escena 5</a></p>",
    {
      actions: {
        ejemplo4: function enter(character, system, action) {},
      },
    }
  ),

  Escena5: new undum.SimpleSituation(
    "<p class='transient'><a href='Escena6'>Mover a escena 6</a></p>\
        <p class='transient'><a href='Escena7'>Mover a escena 7</a></p>\
        <p class='transient'><a href='Escena9'>Mover a escena 9</a></p>",
    {
      actions: {
        ejemplo1: function enter(character, system, action) {},
      },
    }
  ),

  Escena6: new undum.SimpleSituation(
    "<p class='transient'><a href='Escena 5'>Mover a escena 5</a></p>",
    {
      actions: {
        ejemplo6: function enter(character, system, action) {},
      },
    }
  ),

  Escena7: new undum.SimpleSituation(
    "<p class='transient'><a href='Escena5'>Mover a escena 5</a></p>\
        <p class='transient'><a href='Escena8'>Mover a escena 8</a></p>",
    {
      actions: {
        ejemplo1: function enter(character, system, action) {},
      },
    }
  ),

  Escena8: new undum.SimpleSituation(
    "<p class='transient'><a href='Escena 7'>Mover a escena 7</a></p>",
    {
      actions: {
        ejemplo8: function enter(character, system, action) {},
      },
    }
  ),

  Escena9: new undum.SimpleSituation(
    "<p class='transient'><a href='Escena10'>Mover a escena 10</a></p>",
    {
      actions: {
        ejemplo1: function enter(character, system, action) {},
      },
    }
  ),

  Escena10: new undum.SimpleSituation({
    actions: {
      ejemplo1: function enter(character, system, action) {},
    },
  }),
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
  zapatillas: new undum.OnOffQuality("-Zapatillas de casa", {
    priority: "0001",
    group: "cosas",
  }),
  tiempoEspera: new undum.IntegerNoShow("Tiempo Espera", {
    priority: "0001",
    group: "invisible",
  }),
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
  cosas: new undum.QualityGroup("Cosillas", { priority: "0001" }),
  invisible: new undum.QualityGroup(null, { priority: "0000" }),
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {
  character.qualities.zapatillas = false;
  character.qualities.tiempoEspera = 0;
  system.setCharacterText("<p>---</p>");
};
