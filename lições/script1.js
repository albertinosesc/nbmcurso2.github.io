// script.js
const form = document.getElementById('certificate-form');
const certificate = document.getElementById('certificate');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const course = document.getElementById('course').value;

    // Validação básica (adicione mais validações conforme necessário)
    if (!name || !cpf || !course) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Gerar o HTML do certificado
    const certificateHTML = `
        <h2>Certificado</h2>
        <p>Este certificado é concedido a:</p>
        <p><strong>${name}</strong></p>
        <p>CPF: ${cpf}</p>
        <p>Por concluir o curso de ${course}</p>
        <p>Data: ${new Date().toLocaleDateString()}</p>
    `;

    certificate.innerHTML = certificateHTML;
    certificate.style.display = 'block';
});