'use strict';

function getDogImage(x) {
  fetch(`https://dog.ceo/api/breed/${x}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch (error => alert('Something went wrong. Try again later.'));
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let x = document.querySelector('#breed').value;
    getDogImage(x);
  });
}

function displayResults(responseJson) {
  let dog = responseJson.message;
  if(responseJson.status === "success"){
    $('.results-img').replaceWith(`<img src="${dog}" class="results-img">`);
  } else {
    $('.results-img').replaceWith(`<p class="no-dog results-img">Sorry, we couldn't find a picture of that breed. Please try again.`);
  }
  $('.results').removeClass('hidden');
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});