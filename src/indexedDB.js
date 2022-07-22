var request = indexedDB.open("Customer");
request.onupgradeneeded = function () {
  var db = request.result;
  var store = db.createObjectStore("customers", {
    keyPath: "id",
    autoIncrement: true,
  });
  store.createIndex("Nome", "Nome", { unique: true });
  store.createIndex("Email", "Email");
  store.createIndex("Telefone", "Telefone");
  store.createIndex("Endereco", "Endereco");
  store.createIndex("DataDeNascimento", "DataDeNascimento");
  store.createIndex("Sexo", "Sexo");
  store.createIndex("CPF", "CPF");
};

request.onsuccess = function () {
  db = request.result;
};

send.onclick = (event) => {
  event.preventDefault();

  db.transaction(
    "customers",
    "readwrite"
  )
    .objectStore(
      "customers"
    )
    .add({
      Nome: nomeCadastro.value,
      Email: emailCadastro.value,
      Telefone: telefoneCadastro.value,
      Endereco: enderecoCadastro.value,
      DataDeNascimento: dataCadastro.value,
      Sexo: sexoCadastro.value,
      CPF: cpfCadastro.value,
    });
};
