const botao = document.querySelector('.botao');
const conselhoId = document.querySelector('.conselho-id');
const descricaoConselho = document.querySelector('.conselho');

async function fetchConselho(){
    try {
        const response = await fetch('https://api.adviceslip.com/advice');

        if(!response.ok){
            throw new error(`Erro na requisição: ${response.status}`)
        }

        const conteudoConselho = await response.json();
        conselhoId.innerText = `Advice # ${conteudoConselho.slip.id}`;
        descricaoConselho.innerText = ` "${conteudoConselho.slip.advice}"`
    } catch (error) {
        console.error('Erro ao buscar o conselho', error);
        descricaoConselho.innerText = 'Erro ao buscar o conselho. Tente novamente mais tarde';
    }
}

fetchConselho();
botao.addEventListener('click', fetchConselho);