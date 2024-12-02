// Lista de citações
const quotes = [
    "A persistência é o caminho do êxito.",
    "O sucesso nasce do querer, da determinação e da persistência.",
    "Acredite em si mesmo e no seu potencial.",
    "Nunca é tarde para recomeçar.",
    "A coragem é a chave para o sucesso.",
    "Seu único limite é você mesmo."
  ];
  
  // Atualizar hora e citações
  function updateClockAndQuote() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    // Atualizar hora
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
  
    // Alterar citação a cada minuto
    if (seconds === "00") {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById('quote').textContent = `"${randomQuote}"`;
    }
  }
  
  // Atualização em tempo real
  setInterval(updateClockAndQuote, 1000);
  
  // Inicialização
  updateClockAndQuote();
  