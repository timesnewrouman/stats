class Card {
  constructor(data) {
    this.data = data;
  }

  create() {
    const character = document.createElement("div");
    character.classList.add("character");
    character.insertAdjacentHTML('beforeend', `
      <p class="character__name"></p>
      <p class="character__race"></p>
      <p class="character__str"></p>
      <p class="character__int"></p>
      <p class="character__stam"></p>
      <p class="character__speed"></p>
      <p class="character__agi"></p>
      <p class="character__control"></p>`);
    character.querySelector('.character__name').textContent = this.data.name;
    character.querySelector('.character__race').textContent = this.data.race;
    character.querySelector('.character__str').textContent = `Сила: ${this.data.str}`;
    character.querySelector('.character__int').textContent = `Интеллект: ${this.data.int}`;
    character.querySelector('.character__stam').textContent = `Выносливость: ${this.data.stam}`;
    character.querySelector('.character__speed').textContent = `Скорость: ${this.data.speed}`;
    character.querySelector('.character__agi').textContent = `Ловкость: ${this.data.agi}`;
    character.querySelector('.character__control').textContent = `Управляемость: ${this.data.control}`;
    return character;
  }
}