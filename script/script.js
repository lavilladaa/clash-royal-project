const srcArray = ["arquero.png", "bruja.png", "caballero.png", "dragon.webp", "goblin.webp", "golem.png", "los-pillos.png", "Miner_info.webp", "montaPuercos.webp", "Pekka.webp", "principe.png"];
const namesArray = ["Arquero", "Bruja", "Caballero", "Dragón", "Goblin", "Golem", "Los Pillos", "Minero", "Monta Puercos", "Pekka", "Principe"];
const infoArray = ["Dispara una flecha mágica que atraviesa y daña a los enemigos que se interponen en su camino. No es ningún truco, ¡es magia! Arquero mágico es una carta de rareza legendaria de Clash Royale que puede obtenerse a partir de la arena 5.",
    "Es una tropa de base constructora que proviene de Clash Royale, junto con el bombardero y el bebé dragón. Sin embargo, dispara el mismo proyectil que la Bruja, a diferencia de su contraparte cuerpo a cuerpo de Clash Royale, a pesar de blandir un hacha.",
    "Se puede utilizar como tanque para tropas más pequeñas como los Duendes. Es una gran carta para usar al frente de un mini-ataque. Tiene una gran sinergia en particular con los mazos de carnada de hechizos, y con el Barril de duendes, además es también común en mazos de Bait junto a la Valquiria.",
    "El dragón es una unidad aérea devastadora que es capaz de atacar a unidades terrestres y aéreas. A diferencia de los globos, su ataque es a distancia y con salpicadura, similar al de los magos.",
    "Es una Súper Tropa basada en el Goblin. Se puede desbloquear aumentando el Goblin cuando el Goblin tiene al menos el nivel 7 y cuando el Ayuntamiento se actualiza al nivel 11 o superior.",
    "Es lento, pero persistente, y solo ataca las estructuras. Cuando se destruye, explota y se convierte en dos golemitas que infligen daño en área. Gólem es una carta de rareza épica de Clash Royale que puede obtenerse a partir de la arena 3.",
    "Está formada por dos \"niñas pillas\" y un \"niño pillo\", el cual tiene la función de defender a sus amigas mientras estas lanzan \"chicles\" a sus enemigos. Por lo tanto, la función de esta carta es muy sencilla: realizar el daño con las niñas pillas mientras distraemos con el niño pillo.",
    "Es una carta legendaria que puede obtenerse de los cofres una vez alcanzamos la arena 6. Cuesta 3 de elixir, una cifra bastante asequible, y puede desplegarse en cualquier parte de la Arena. Tiene bastantes puntos de vida, 1.000 a nivel 1 y de 1.460 a nivel 5, que no está nada mal.",
    "Es una tropa terrestre rápida con puntos de vida medios, poco daño y la capacidad de saltar sobre los muros enemigos. Se desbloquea en el nivel 2 del Cuartel oscuro.",
    "Es una tropa poderosa y puede hacer bastante daño con la colocación y el apoyo correctos. Hace daño masivo a un objetivo a la vez. Sólo a niveles decentes, una P.E.K.K.A puede matar a un Bárbaro de un solo golpe.",
    "Es una tropa muy fuerte, además que tiene una gran velocidad, acompañar esta carta con otras unidades que ataquen con daño en área suele ser un buen combo."]
var character = document.getElementById("img-character");
var btn = document.getElementById("character-name");
var infoCharacter = document.getElementById("imgInfo");
var titleCharacter = document.getElementById("title-info");
var textCharacter = document.getElementById("text-info");

var pos = 0;


function next() {
    document.getElementById("prev-btn").disabled = false;
    document.getElementById("prev-btn").className = "card-btn";

    if (pos === srcArray.length - 2) {
        document.getElementById("next-btn").disabled = true;
        document.getElementById("next-btn").className = "disabled-btn";
    }

    if (pos < srcArray.length - 1) {

        var srcCharacter = document.getElementById("img-character").getAttribute("src");

        srcArray.map((img, index) => {
            srcImgAct = `./clash-royale/images/${img}`;
            if (srcImgAct === srcCharacter) {
                pos = index + 1;
            }
        }
        )
    }
    character.src = `./clash-royale/images/${srcArray[pos]}`;
    // imgName = srcArray[pos];
    // nameCharacter = imgName.split(".")[0];
    btn.innerText = namesArray[pos];
    if (pos === 8) {
        btn.style.fontSize = "18px";
    } else { btn.style.fontSize = "20px"; }
}

function prev() {
    document.getElementById("next-btn").disabled = false;
    document.getElementById("next-btn").className = "card-btn";
    if (pos === 1) {
        document.getElementById("prev-btn").disabled = true;
        document.getElementById("prev-btn").className = "disabled-btn";
    }

    if (pos >= 1) {

        var srcCharacter = document.getElementById("img-character").getAttribute("src");

        srcArray.map((img, index) => {
            srcImgAct = `./clash-royale/images/${img}`;
            if (srcImgAct === srcCharacter) {
                pos = index - 1;
            }
        }
        )
    }
    // imgName = srcArray[pos];
    // nameCharacter = imgName.split(".")[0];
    character.src = `./clash-royale/images/${srcArray[pos]}`;
    btn.innerText = namesArray[pos];
    if (pos === 8) {
        btn.style.fontSize = "18px";
    } else { btn.style.fontSize = "20px"; }
}

function characterInfo() {
    var characterCard = document.getElementById("card");
    characterCard.style.display = "none";

    var nameBtn = document.getElementById("character-name");
    character = nameBtn.innerText;


    namesArray.map((name, index) => {
        if (name === character) {
            infoCharacter.src = `./clash-royale/images/${srcArray[index]}`;
            titleCharacter.innerText = name;
            textCharacter.innerText = infoArray[index];

        }
    })
    var characterInfo = document.getElementById("card-info");
    characterInfo.style.display = "block";
}

function back() {

    // character = textCharacter.innerText;
    // namesArray.map((name, index) => {
    //     if (name === character) {
    //         character.src = `./clash-royale/images/${srcArray[index]}`;

    //     }
    // })

    // var characterInfo = document.getElementById("card-info");
    // characterInfo.style.display = "none";
    // var characterCard = document.getElementById("card");
    // characterCard.style.display = "";
    window.location.reload();




}