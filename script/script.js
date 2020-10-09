let select = document.querySelector('.topics select');
let cards = document.querySelectorAll('.card');
let name = document.querySelector('input[name="name"]');
let email = document.querySelector('input[name="email"]');
let message = document.getElementById('message');
let btnForm = document.querySelector('button[type="submit"]');
let form = document.querySelector('.form');
let like = document.querySelector('.like__icon');
let count = document.querySelector('.like__count');
let comments = document.querySelector('.comments__body');

if (select && cards) {
  select.addEventListener('change', () => {
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

if (message && btnForm) {
  message.addEventListener('input', () => {
    let messageLength = message.value.length;

    if (messageLength <= 10 || messageLength >= 200) {
      message.style.borderColor = 'red';
      message.style.color = 'red';
      btnForm.disabled = true;
    } else {
      message.removeAttribute('style');
      btnForm.disabled = false;
    }
  });
}

if (comments) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let comment = document.createElement('div');
    comment.classList.add('comments__item');
    comment.innerHTML = `
      <div class="comments__icon">
        <img src="./img/icon_noname.png" alt="">
      </div>
      <h5 class="comments__name">${name.value}</h5>
      <div class="comments__content">
        <p>${message.value}</p>
      </div>`;
    comments.append(comment);
    name.value = '';
    message.value = '';
    email.value = '';
  });
}

if (like) {
  like.addEventListener('click', () => {
    if (!like.classList.contains('like__check')) {
      like.classList.add('like__check');
      count.textContent = +count.textContent + 1;
    } else {
      like.classList.remove('like__check');
      count.textContent = +count.textContent - 1;
    }
  });
}
