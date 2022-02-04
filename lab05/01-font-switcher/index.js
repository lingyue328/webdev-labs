var currentFont = 1.4;

const makeBigger = () => {
   currentFont += 0.4;
   document.querySelector('.content').style.fontSize = `${currentFont}em`;
   document.querySelector('h1').style.fontSize = `${currentFont + 0.4}em`;
};


const makeSmaller = () => {
   currentFont -= 0.4;
   document.querySelector('.content').style.fontSize = `${currentFont}em`;
   document.querySelector('h1').style.fontSize = `${currentFont + 0.4}em`;
};



document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

