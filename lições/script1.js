const form = document.getElementById('certificate-form');
const certificate = document.getElementById('certificate');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Coletar dados do formulário e realizar validações (optional)
  const name = document.getElementById('name').value.trim(); // Trim removes leading/trailing whitespace
  const course = document.getElementById('course').value.trim();
  const date = document.getElementById('date').value;
  const startDate = new Date(document.getElementById('start-date').value);
  const endDate = new Date(document.getElementById('end-date').value);
  const hours = document.getElementById('hours').value;

  // Simple validation (optional, replace with more robust validation)
  if (!name || !course || !date || !startDate || !endDate || !hours) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Gerar o HTML do certificado
  const certificateHTML = `
    <h2>Certificado</h2>
    <p>Este certificado é concedido a:</p>
    <p><strong>${name}</strong></p>
    <p>Por concluir o curso de ${course}</p>
    <p>Período: de ${startDate.toLocaleDateString('pt-BR')} a ${endDate.toLocaleDateString('pt-BR')}</p>
    <p>Carga Horária: ${hours} horas</p>
    <p>Data de Emissão: ${new Date(date).toLocaleDateString('pt-BR')}</p>
  `;

  certificate.innerHTML = certificateHTML;
  certificate.style.display = 'block';

  // Criar um PDF do certificado
  const doc = new jsPDF();
  doc.html(certificate, {
    callback: function(pdf) {
      pdf.save('certificado.pdf');
    }
  });
});
