function skiftHundKnap() {
    // Hent elementet med id "hundKnap"
    var hundKnap = document.getElementById("hundKnap");
    // Tjekker om billedkilden matcher "img/hund_knap.png"
    if (hundKnap.src.match("img/hund_knap.png")) {
        // Ændre billedkilden til det andet billede
        hundKnap.src = "img/hund_knap2.png"; 
    } else {
        // Skift tilbage til det første billede, hvis det allerede er det andet billede
        hundKnap.src = "img/hund_knap.png"; 
    }
}

function skiftKatKnap() {
    // Hent elementet med id "katKnap"
    var katKnap = document.getElementById("katKnap");
    // Tjek om billedkilden matcher "img/kat_knap.png"
    if (katKnap.src.match("img/kat_knap.png")) {
        // Ændre billedkilden til det andet billede
        katKnap.src = "img/kat_knap2.png"; 
    } else {
        // Skift tilbage til det første billede, hvis det allerede er det andet billede
        katKnap.src = "img/kat_knap.png"; 
    }
}

function skiftGnaverKnap() {
    // Hent elementet med id "gnaverKnap"
    var gnaverKnap = document.getElementById("gnaverKnap");
    // Tjek om billedkilden matcher "img/gnaver_knap.png"
    if (gnaverKnap.src.match("img/gnaver_knap.png")) {
        // Ændre billedkilden til det andet billede
        gnaverKnap.src = "img/gnaver_knap2.png"; 
    } else {
        // Skift tilbage til det første billede, hvis det allerede er det andet billede
        gnaverKnap.src = "img/gnaver_knap.png"; 
    }
}

function skiftKrybdyrKnap() {
    // Hent elementet med id "krybdyrKnap"
    var krybdyrKnap = document.getElementById("krybdyrKnap");
    // Tjek om billedkilden matcher "img/krybdyr_knap.png"
    if (krybdyrKnap.src.match("img/krybdyr_knap.png")) {
        // Ændre billedkilden til det andet billede
        krybdyrKnap.src = "img/krybdyr_knap2.png"; 
    } else {
        // Skift tilbage til det første billede, hvis det allerede er det andet billede
        krybdyrKnap.src = "img/krybdyr_knap.png"; 
    }
}