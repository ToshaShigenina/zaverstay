let select = document.querySelector('.topics select');
let cards = document.querySelectorAll('.card');
let message = document.getElementById('message');
let btnForm = document.querySelector('.form .button');

if (select) {
  select.addEventListener('change', () => {
    console.log(select.value);

    if (select.value !== 'select' && select.value !== 'all') {
      cards.forEach((item) => {
        if (select.value !== item.dataset.tag) {
          item.classList.add('hidden');
        } else {
          item.classList.remove('hidden');
        }
      });
    } else {
      cards.forEach((item) => {
        item.classList.remove('hidden');
      });
    }
  });
}

message.addEventListener('input', () => {
  let messageLength = message.value.length;

  if (messageLength <= 10 || messageLength >= 200) {
    message.style.borderColor = 'red';
    btnForm.disabled = true;
  } else {
    message.removeAttribute('style');
    btnForm.disabled = false;
  }
});
