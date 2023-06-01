export default class View {
  $ = {};

  constructor() {
    this.$.menu = document.querySelector('[data-id="menu"]');
    this.$.menuItems = document.querySelector('[data-id="menu-items"]');
    this.$.resetBtn = document.querySelector('[data-id="reset-btn"]');
    this.$.newRoundBtn = document.querySelector('[data-id="new-round-btn"]');
    this.$.modal = document.querySelector('[data-id="modal"]');
    this.$.modalText = document.querySelector('[data-id="modal-text"]');
    this.$.modalBtn = document.querySelector('[data-id="modal-btn"]');
    this.$.turn = document.querySelector('[data-id="turn"]');

    this.$.squares = document.querySelectorAll('[data-id="square"]');

    // UI-only event listeners
    this.$.menu.addEventListener("click", (event) => {
      this.$.menuItems.classList.toggle("hidden");
    });
  }
}

handleResetBtn (handler) {
  this.$.resetBtn.addEventListener(handler)
}

handleNewRoundBtn (handler) {
  this.$.newRoundBtn.addEventListener(handler)
}

handleSquares (handler) {
  App.$.squares.forEach((square) => {
    square.addEventListener(handler)
}