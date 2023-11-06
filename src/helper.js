import Notiflix from 'notiflix';

const ref = {
    select: document.querySelector('.breed-select'),
    divCatInfo: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
};

const { select, divCatInfo, loader, error } = ref;

export function showBreedsLoader() {
    select.classList.add('is-hidden'); // Приховуємо вибір породи
    loader.classList.remove('is-hidden'); // Показуємо лоадер для списку порід
}

export function hideBreedsLoader() {
    loader.classList.add('is-hidden'); // Приховуємо лоадер для списку порід
    select.classList.remove('is-hidden'); // Показуємо вибір породи
}

export function showCatLoader() {
    divCatInfo.style.visibility = 'hidden'; // Приховуємо інформацію про кота
    loader.classList.remove('is-hidden'); // Показуємо лоадер для інформації про кота
}

export function hideCatLoader() {
    loader.classList.add('is-hidden'); // Приховуємо лоадер для інформації про кота
    divCatInfo.style.visibility = 'visible'; // Показуємо інформацію про кота
}

export function showLoader() {
    divCatInfo.innerHTML = '';
    loader.classList.remove('is-hidden');
    select.classList.add('is-hidden');
    divCatInfo.style.visibility = 'hidden';
}

export function hideLoader() {
    loader.classList.add('is-hidden');
    select.classList.remove('is-hidden');
    divCatInfo.style.visibility = 'visible';
}

export function onFetchError() {
    Notiflix.Notify.failure('Oops! Something went wrong!');
    select.classList.remove('is-hidden');
}
