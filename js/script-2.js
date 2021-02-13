const petsModule = (function () {
  const _data = [
    {
      image: "./assets/images/dog.jpg",
      name: "Sam",
      type: "Doberman Pinscher",
      sound: "bark",
      soundText: "Bark - type b",
      keyCode: 66,
    },
    {
      image: "./assets/images/cat.jpg",
      name: "Mellie",
      type: "British Shorthair",
      sound: "meow",
      soundText: "Meow - type m",
      keyCode: 77,
    },
    {
      image: "./assets/images/cock.jpg",
      name: "Cock",
      type: "Rooster",
      sound: "cock",
      soundText: "Cock - type h",
      keyCode: 72,
    },
    {
      image: "./assets/images/chicken.jpg",
      name: "Chicken",
      type: "Orpingthon",
      sound: "chicken",
      soundText: "Chicken - type t",
      keyCode: 84,
    },
    {
      image: "./assets/images/goat.jpg",
      name: "Goat",
      type: "Ankara",
      sound: "goat",
      soundText: "Goat - type g",
      keyCode: 71,
    },
    {
      image: "./assets/images/horse.jpg",
      name: "Horse",
      type: "English",
      sound: "horse",
      soundText: "Horse - type a",
      keyCode: 65,
    },
  ];

  const $tbodyEl = document.querySelector("tbody");
  const $mainImage = document.querySelector(".main-image");

  const getButtons = function () {
    return document.querySelectorAll("button");
  };

  const getTableRows = function () {
    return document.querySelectorAll("tr");
  };

  const createPetElement = function (pet) {
    return (
      "<tr><td><img class='pet-image' src='" +
      pet.image +
      "' /></td><td>" +
      pet.name +
      "</td><td>" +
      pet.type +
      "</td><td><button data-sound='" +
      pet.sound +
      "'>" +
      pet.soundText +
      "</button></td></tr>"
    );
  };

  const addToTable = function (content) {
    $tbodyEl.innerHTML += content;
  };

  const putPetsInHtml = function () {
    for (let i = 0; i < _data.length; i++) {
      addToTable(createPetElement(_data[i]));
    }
  };

  const keyEvents = function () {
    document.addEventListener("keydown", (e) => {
      for (let i = 0; i < _data.length; i++) {
        if (e.keyCode === _data[i].keyCode) {
          const dataSoundId = _data[i].sound;
          const soundEl = document.getElementById(dataSoundId);
          if (soundEl) soundEl.play();
        }
      }
    });
  };

  const rowClickEvents = function () {
    const $rows = getTableRows();
    for (const row of $rows) {
      row.addEventListener("click", () => {
        const $img = row.querySelector("img");
        $mainImage.src = $img.src;
      });
    }
    for (let i = 1; i < $rows.length; i++) {
      $rows[i].addEventListener("click", () => {
        $rows[i].classList.toggle("row-selected-bg");
      });
    }
  };

  const bindEvents = function () {
    const buttons = getButtons();
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function (event) {
        event.stopPropagation();
        const soundId = this.dataset.sound;
        const soundElement = document.getElementById(soundId);
        if (soundElement) {
          soundElement.play();
        }
      });
    }
  };

  const init = function () {
    putPetsInHtml();
    bindEvents();
    keyEvents();
    rowClickEvents();
  };

  return {
    init: init,
  };
})();
