// scripts.js
document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

const topics = document.querySelectorAll('.topic');
const platforms = document.getElementById('platforms');

topics.forEach(topic => {
  topic.addEventListener('click', () => {
    platforms.classList.remove('hidden');
  });
});

document.getElementById('search').addEventListener('input', function() {
  // Aqui podes meter uma função para filtrar os jogos por nome
});
