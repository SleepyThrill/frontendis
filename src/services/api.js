export async function cadastrar(nome, email, senha) {
  const resposta = await fetch(`${API_URL}/api/usuarios/cadastrar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email, senha }),
  });

  const dados = await resposta.json();

  if (!resposta.ok) {
    throw new Error(dados.mensagem || "Não foi possível criar a conta.");
  }

  return dados; // { sucesso, mensagem, token, usuario }
}
