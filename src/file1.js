import myStyle from './file1.scss';

console.log('myStyle: ', myStyle);

console.log('File 1 Loaded');

require('./file2');

const welcomeMessage = 'Good Afternoon';
console.log('welcomeMessage: ', welcomeMessage);

const person = {
  name: 'Ravi',
  favLang: 'JavaScript'
};

const { name, favLang } = person;

console.log('name: ', name);
console.log('favLang: ', favLang);

const welcomeUser = (userName, userFavLang) => {
  console.log(`
  ${welcomeMessage}
  Welcome ${userName}.
  Your Fav Language is ${userFavLang}
  `);
};

welcomeUser(name, favLang);
