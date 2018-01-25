'use strict'

document.addEventListener('DOMContentLoaded', function() {
  let flipBox = document.querySelector('.flipBox');
  
  if (flipBox) {

    let autBtn = document.querySelector('.authorization'),
      userCard = document.querySelector('.flipBox__card_user'),
      loginCard = document.querySelector('.flipBox__card_login'),
      homeBtn = document.querySelector('.home');

    autBtn.addEventListener('click', function(e) {
      e.preventDefault();

      autBtn.classList.add('authorization_hidden');
      flipBox.style.transform = "rotateY(180deg)";
      userCard.classList.remove('flipBox__card_user_active');
      loginCard.classList.add('flipBox__card_login_active');
    })

    homeBtn.addEventListener('click', function(e) {
      e.preventDefault();

      autBtn.classList.remove('authorization_hidden');
      flipBox.style.transform = "rotateY(0deg)";
      loginCard.classList.remove('flipBox__card_login_active');
      userCard.classList.add('flipBox__card_user_active');
    })

  }
});