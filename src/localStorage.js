function adicionar() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("O seu navegador não suporta Geolocalização.");
  }
  localStorage.setItem(
    "Contato",
    JSON.stringify({
      name: nomeContato.value,
      email: emailContato.value,
      telefone: telefoneContato.value,
      assunto: assuntoContato.value,
      mensagem: mensagemContato.value,
    })
  );
  alert("Itens adicionados.");
}
function showPosition(position) {
  alert("latitude" + position.coords.latitude);
  localStorage.setItem(
    "Geolocalização",
    JSON.stringify({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    })
  );
}
