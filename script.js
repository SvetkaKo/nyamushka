const card = document.querySelectorAll('.card');

card.forEach(function (card) {
  card.addEventListener('click', function () {
    card.parentElement.classList.toggle('card-item-selected');

    if (card.parentElement.classList.contains('card-item-selected')) {
      card.addEventListener('mouseleave', hide, true);
    } else {
      card.removeEventListener('mouseleave', hide, true);
      card.classList.remove('hide');
    }
  });
});

function hide(event) {
  this.classList.add('hide');
}
