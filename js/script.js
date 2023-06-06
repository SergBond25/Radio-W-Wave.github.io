let btnpodcastsmore = document.querySelector('.btn-podcasts-more');
let podcastsitem = document.querySelectorAll('.podcasts-item');

btnpodcastsmore.addEventListener('click', () => {
  podcastsitem.forEach(el => { el.classList.add('podcasts-item--visible') });
  btnpodcastsmore.closest('.btn-podcasts-more').classList.add('btn-podcasts-more--hidden');
});


const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: ""
});

new Accordion(['.container-first', '.container-second'], {});

let actrigger = document.querySelector('.ac-trigger--air');
actrigger.addEventListener('click', () => {
  actrigger.classList.toggle('active');
});

const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  slidesPerGroup: 1,
  spaceBetween: 30,
  direction: 'horizontal',
  loop: false,
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let btnmusichowsu = document.querySelectorAll('.btn-music-how-su');
let btnmusichowsusvg = document.querySelectorAll('.btn-music-how-su-svg');

btnmusichowsu.forEach(function (item, index) {
  item.addEventListener('click', function () {
    this.classList.toggle('active');
    btnmusichowsusvg[index].classList.toggle('active');
  });
});

let btnpodcasts = document.querySelectorAll('.btn-podcasts');
let btnpodcastssvg = document.querySelectorAll('.btn-podcasts-svg');

btnpodcasts.forEach(function (item, index) {
  item.addEventListener('click', function () {
    this.classList.toggle('active');
    btnpodcastssvg[index].classList.toggle('active');
  });
});

// бургер
let burger = document.querySelector('.burger');
let headernav = document.querySelector('.header-nav');
let headerwrapbottom = document.querySelector('.header-wrap-bottom');

burger.addEventListener('click', function () {
  burger.classList.toggle('active');
  headernav.classList.toggle('active');
  headerwrapbottom.classList.toggle('active');
  document.body.classList.toggle('stop-scroll');
});


// поиск
let btnsearch = document.querySelector('.btn-search');
let formsearch = document.querySelector('.form-search');

btnsearch.addEventListener('click', function () {
  btnsearch.classList.toggle('btn-search-is-opened');
  formsearch.classList.toggle('form-search-is-opened');
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 27 && formsearch.classList.contains('form-search-is-opened'))
    if (e.keyCode === 27 && btnsearch.classList.contains('btn-search-is-opened')) {
      formsearch.classList.remove('form-search-is-opened');
      btnsearch.classList.remove('btn-search-is-opened');
    }
}, true);

// вход
let btnentrance = document.querySelector('.btn-entrance');
let btnentrancemedia576px = document.querySelector('.btn-entrance-media576px');
let formwrapper = document.querySelector('.form-wrapper');
let btnformclose = document.querySelector('.btn-form-close');

btnentrance.addEventListener('click', function () {
  formwrapper.classList.toggle('form-wrapper-is-opened');
});
btnentrancemedia576px.addEventListener('click', function () {
  formwrapper.classList.toggle('form-wrapper-is-opened');
});
btnformclose.addEventListener('click', function () {
  formwrapper.classList.remove('form-wrapper-is-opened');
});

// табы
let tabsBtn = document.querySelectorAll('.tabs-btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('tabs-btn--active') });
    e.currentTarget.classList.add('tabs-btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('tabs-item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

// форма отправки

let validation = new JustValidate('.about-us-form', {
  errorLabelStyle: {
    color: '#D52B1E'
  }
});
validation
  .addField('.form-name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Минимум 2 символа'
    },
    {
      rule: 'maxLength',
      value: 22,
      errorMessage: 'Максимум 22 символа'
    },
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
  ])
  .addField('.form-email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Некорректный e-mail',
    }
  ]).onSuccess(async function () {
    let data = {
      msg: document.getElementById("msg").value,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value
    }

    let response = await fetch("mail.php", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    })

    let result = await response.text()

    alert(result)
  });



