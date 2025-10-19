// --- Modal de saque ---
const withdrawBtn = document.getElementById("withdrawBtn");
const withdrawModal = document.getElementById("withdrawModal");
const confirmWithdraw = document.getElementById("confirmWithdraw");
const cancelWithdraw = document.getElementById("cancelWithdraw");
const withdrawAmount = document.getElementById("withdrawAmount");

withdrawBtn.addEventListener("click", () => {
  withdrawModal.style.display = "flex";
  withdrawAmount.focus();
});

cancelWithdraw.addEventListener("click", () => {
  withdrawModal.style.display = "none";
  withdrawAmount.value = "";
});

confirmWithdraw.addEventListener("click", () => {
  const amount = parseFloat(withdrawAmount.value);
  if (!amount || amount <= 0) {
    alert("⚠️ Por favor, insira um valor válido para saque!");
    return;
  }

  withdrawModal.style.display = "none";
  alert(`✅ Solicitação de saque no valor de R$${amount.toFixed(2)} enviada com sucesso!`);
  withdrawAmount.value = "";
});

let rouletteBet = 1;

function updateRouletteInfo() {
  document.getElementById('rouletteBet').textContent = rouletteBet;
}

document.getElementById('rouletteMinus').onclick = () => {
  if (rouletteBet > 1) {
    rouletteBet--;
    updateRouletteInfo();
  }
};

document.getElementById('roulettePlus').onclick = () => {
  rouletteBet++;
  updateRouletteInfo();
};
    // Event listeners DIRETOS - CORRIGIDOS
    document.addEventListener("DOMContentLoaded", function() {
      console.log("Página carregada - configurando event listeners...");
      
      // Slots
      document.getElementById("slotMinus").onclick = function() {
        if (slotBet > 1) {
          slotBet--;
          updateSlotInfo();
        }
      };
      
      document.getElementById("slotPlus").onclick = function() {
        if (slotBet < 10) {
          slotBet++;
          updateSlotInfo();
        }
      };
      
      // Roleta - CORRIGIDO
      document.getElementById("rouletteMinus").onclick = function() {
        console.log("Botão - roleta clicado!");
        if (rouletteBet > 1) {
          rouletteBet--;
          updateRouletteInfo();
        }
      };
      
      document.getElementById("roulettePlus").onclick = function() {
        console.log("Botão + roleta clicado!");
        if (rouletteBet < 10) {
          rouletteBet++;
          updateRouletteInfo();
        }
      };
      
      // Troca de jogos
      document.getElementById("slotTab").onclick = function() {
        slotGame.style.display = "flex";
        rouletteGame.style.display = "none";
      };
      
      document.getElementById("rouletteTab").onclick = function() {
        slotGame.style.display = "none";
        rouletteGame.style.display = "flex";
      };
      
      // Botões de ação
      spinBtn.onclick = spinSlot;
      spinRouletteBtn.onclick = spinRoulette;
      document.getElementById("depositBtn").onclick = function() { openModal("depositModal"); };
      document.getElementById("withdrawBtn").onclick = function() { openModal("withdrawModal"); };
      document.getElementById("logoutBtn").onclick = logout;
      
      console.log("Event listeners configurados!");
    });

    // Inicialização
    updateBalance();
    updateSlotInfo();
    updateRouletteInfo();