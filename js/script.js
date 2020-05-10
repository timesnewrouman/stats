const main = document.querySelector('.main');
const addButton = document.querySelector('.header__button');
const popupAdd = document.querySelector('.popup');
const formAdd = document.forms.add; //add - name формы

const createCard = (args) => new Card(args);
const cardList = new CardList(main, createCard);

addButton.addEventListener('click', function () {
  formAdd.reset();
  const popup = new Popup(popupAdd);
  popup.open();
});

formAdd.addEventListener('submit', function (event) {
  event.preventDefault();
  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let str;
  let int;
  let stam = getRandomInRange(0, 12);
  let speed = getRandomInRange(0, 12);
  let agi = getRandomInRange(0, 12);
  let control = getRandomInRange(0, 12);
  if (formAdd.race.value === 'Golden Empire') {
    str = 10;
    int = 10;
    speed = speed + 15;
    agi = agi + 15;
  }
  if (formAdd.race.value === 'Old Empire') {
    str = 5;
    int = 15;
    control = control + 15;
    agi = agi + 15;
  }
  if (formAdd.race.value === 'Nomads') {
    str = 15;
    int = 5;
    speed = speed + 15;
    stam = stam + 15;
  }
  if (formAdd.race.value === 'Northerners') {
    str = 10;
    int = 10;
    stam = stam + 15;
    control = control + 15;
  } 
  console.log(formAdd.race.value);
  const data = {
    name: formAdd.elements.name.value,
    race: formAdd.race.value,
    str: str,
    int: int,
    stam: stam,
    speed: speed,
    agi: agi,
    control: control
  };
  cardList.addCard(data);
  const popup = new Popup(popupAdd);
  popup.close();
});