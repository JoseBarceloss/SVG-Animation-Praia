class Cards {

//construtor que pega os elementos do html
constructor() {
    this.posicaoSectionDicas = document.getElementById('section-dicas')
    this.cardEsq = document.querySelector('.card-esq')
    this.cardDir = document.querySelector('.card-dir')
}   

//função que chama o calculo do scroll
scrollcards () {
    window.requestAnimationFrame(this.calculoScroll.bind(this));
}


//calcula o scroll da pagina e aplica a transição nos cards
calculoScroll() {
    const posicao = this.posicaoSectionDicas.getBoundingClientRect()['y'];

    if (posicao >= 25) {
        this.cardEsq.style.transform = `translate(${(-posicao + 25) /7}%)`;
        this.cardDir.style.transform = `translate(${(posicao - 25) /7}%)`;
    }
}
}



export { Cards }    