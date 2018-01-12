import 'jquery';
import '../css/main.scss';


import fontawesome from '@fortawesome/fontawesome';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faFlag from '@fortawesome/fontawesome-free-solid/faFlag';

// Add the icon to the library so you can use it in your page
fontawesome.library.add(faUser, faFlag);


import { RandomGenerator } from './random-generator';

const outputParagraph = $('#outputParagraph');

const outputRandomInt = () => {
    outputParagraph.text(RandomGenerator.randomInteger());
};

const outputRandomRange = () => {
    outputParagraph.text(RandomGenerator.randomRange(1, 500));
};

const buttonRndInt = jQuery('#randomInt');
const buttonRndRange = $('#randomRange');

buttonRndInt.click(outputRandomInt);
buttonRndRange.click(outputRandomRange);
