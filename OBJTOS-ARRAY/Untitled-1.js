const minhasFerramentas = {
    martelo: "Para pregar",
    chaveDeFenda: "Para apertar parafusos",
    serra: "Para cortar madeira"
};

// Usando for...in (lendo as etiquetas/propriedades)
for (let ferramenta in minhasFerramentas) {
    console.log(ferramenta); // Saída: martelo, chaveDeFenda, serra
}

// Usando for...of (usando as ferramentas/valores)
for (let ferramenta of Object.values(minhasFerramentas)) {
    console.log(ferramenta); // Saída: Para pregar, Para apertar parafusos, Para cortar madeira
}