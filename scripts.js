let totalScore = 0;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login').style.display = 'block';
});

function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = '12345'; // Defina sua senha aqui

    if (password === correctPassword) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('start-course').style.display = 'block';
    } else {
        alert('Senha incorreta. Tente novamente.');
    }
}

function startCourse() {
    document.getElementById('start-course').style.display = 'none';
    document.getElementById('score').style.display = 'block';
    loadLesson('lição1');
}

function loadLesson(lesson) {
    fetch(`lições/${lesson}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar a lição:', error));
}

function loadCertificate() {
    fetch('certificate.html')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o certificado:', error));
}

function loadFinalPage() {
    fetch('final.html')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar a página final:', error));
}

function completeLesson(points, nextLesson) {
    updateScore(points);
    loadLesson(nextLesson);
}

function updateScore(points) {
    totalScore += points;
    document.getElementById('total-score').textContent = totalScore;
    localStorage.setItem('totalScore', totalScore);
}
