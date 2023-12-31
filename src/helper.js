import Notiflix from 'notiflix';

const ref = {
    select: document.querySelector('.breed-select'),
    divCatInfo: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
};

const { select, divCatInfo, loader, error } = ref;

export function showBreedsLoader() {
    select.classList.add('is-hidden'); 
    loader.classList.remove('is-hidden'); 
}

export function hideBreedsLoader() {
    loader.classList.add('is-hidden'); 
    select.classList.remove('is-hidden'); 
}

export function showCatLoader() {
    divCatInfo.style.visibility = 'hidden'; 
    loader.classList.remove('is-hidden'); 
}

export function hideCatLoader() {
    loader.classList.add('is-hidden'); 
    divCatInfo.style.visibility = 'visible'; 
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
