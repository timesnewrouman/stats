class CardList {
  constructor(container, createCard) {
      this.container = container;
      this.createCard = createCard;
  }

  addCard(data) {
      const card = this.createCard(data);
      this.container.appendChild(card.create());
  }
}