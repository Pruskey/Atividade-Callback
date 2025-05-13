function prepararMacarrao(callback) {
    console.log("Preparando macarrão...")
    setTimeout(() => {
        console.log("Macarrão preparado");
        callback();
    }, 1000);
}

function ferverAgua(callback) {
    console.log("Fervendo água...")
    setTimeout(() => {
        console.log("Água fervida");
        callback();
    }, 2000);
}

function cozinharMacarrao(callback) {
    console.log("Cozinhando macarrão...")
    setTimeout(() => {
        console.log("Macarrão cozido");
        callback();
    }, 3000);
}

function escorrerAgua(callback) {
    console.log("Escorrendo água...")
    setTimeout(() => {
        console.log("Água escorrida");
        callback();
    }, 4000);
}

function servirPrato(callback) {
    console.log("Servindo prato...")
    setTimeout(() => {
        console.log("Prato servido");
        callback();
    }, 5000);
}

prepararMacarrao(() => {
    ferverAgua(() => {
        cozinharMacarrao(() => {
            escorrerAgua(() => {
                servirPrato(() => {
                });
            });
        });
    });
});
