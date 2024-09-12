// Seleciona o botão e o elemento h1
const changeTextBtn = document.getElementById('changeTextBtn');
const helloElement = document.getElementById('hello');

// Adiciona um evento de clique ao botão
changeTextBtn.addEventListener('click', () => {
    // Altera o texto do elemento h1
    helloElement.textContent = 'Olá, Mundo!';
});
