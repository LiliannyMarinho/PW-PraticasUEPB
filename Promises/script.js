document.getElementById('search').addEventListener('click', () => {
    const cep = document.getElementById('cep').value.trim();

    // Validação do CEP (8 dígitos)
    if (cep.length !== 8 || isNaN(cep)) {
        alert('Por favor, insira um CEP válido com 8 dígitos.');
        return;
    }

    // Fetch para consumir a API ViaCEP
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar o CEP.');
            }
            return response.json();
        })
        .then(data => {
            if (data.erro) {
                alert('CEP não encontrado.');
                clearResult();
                return;
            }
            displayResult(data);
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao buscar o CEP.');
        });
});

// Função para exibir os resultados
const displayResult = (data) => {
    document.getElementById('logradouro').textContent = `Logradouro: ${data.logradouro}`;
    document.getElementById('bairro').textContent = `Bairro: ${data.bairro}`;
    document.getElementById('localidade').textContent = `Cidade: ${data.localidade}`;
    document.getElementById('uf').textContent = `Estado: ${data.uf}`;
};

// Função para limpar os resultados
const clearResult = () => {
    document.getElementById('logradouro').textContent = '';
    document.getElementById('bairro').textContent = '';
    document.getElementById('localidade').textContent = '';
    document.getElementById('uf').textContent = '';
};
