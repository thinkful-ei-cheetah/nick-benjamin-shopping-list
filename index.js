/* eslint-disable no-undef */
'use strict';

function getItemHtml(item) {
  return `
    <li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
    </li> 
    `;
}

function main() {
  $('#js-shopping-list-form').on('submit', event => {
    event.preventDefault();

    const item = $('#shopping-list-entry').val();
    if(item) {
      $('ul').append(getItemHtml(item));
    }
    
    event.target.reset();
  });

  $('ul').on('click', '.shopping-item-toggle', event => {
    const targetItem = $(event.target).closest('li').find('.shopping-item');
    targetItem.toggleClass('shopping-item__checked');
  });

  $('ul').on('click', '.shopping-item-delete', event => {
    const targetItem = $(event.target).closest('li');
    targetItem.remove();
  });
}

$(main);

/*

// Dog, Cat, rock

$(function() {
  
  $("button").click(function(event) {
    $("ul").append(
      "<li>" +
      ["cat", "dog", "rock"][Math.floor(Math.random()*3)] + "</li>"
    );
  });
  
  $('ul').on('click', 'li', function(event) {
    this.remove();
  });
});

// Light Bulb

function handleBulbClicks() {
  $('.js-lightbulb').on('click', event => {
    // save reference to this bulb,
    const targetBulb = $(event.currentTarget);
    // and reference to all other bulbs
    const otherBulbs = $('.js-lightbulb').not(targetBulb);
    
    // Remove 'bulb-on' class from other bulbs
    otherBulbs.removeClass('bulb-on');
    // toggle the presence of 'bulb-on' on this bulb; 
    targetBulb.toggleClass('bulb-on');
  });  
}

$(handleBulbClicks);

*/