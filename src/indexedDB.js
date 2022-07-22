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
  store.createIndex("Data_Nasc", "Data_Nasc");
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
      Nome: txtName.value,
      Email: txtEmail.value,
      Telefone: txtPhone.value,
      Endereco: txtEndereco.value,
      Data_Nasc: txtData.value,
      Sexo: textSexo.value,
      CPF: textCpf.value,
    });
};
