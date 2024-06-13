import { Cards } from './card.js';
import { Icones } from './icons.js'
import { Footer } from './footer.js';

// Função que chama a animação dos cards
window.onload = () => {
    const animationCard = new Cards();
    document.addEventListener('scroll', animationCard.
        scrollcards.bind(animationCard));

    const icones = new Icones();
    icones.animaIcones();

    const footer = new Footer();
    footer.efeitoOnda();
};

