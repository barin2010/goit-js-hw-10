
import SlimSelect from 'slim-select'
import { fetchBreeds, fetchCatByBreed, showError } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');
const error = document.querySelector('.error');

function showLoader(element) {
    element.classList.add('loading');
}

function hideLoader(element) {
    element.classList.remove('loading');
}

function showErrorMessage() {
    error.classList.add('show');
}

function hideErrorMessage() {
    error.classList.remove('show');
}

function displayCat(catData) {
    const breed = catData[0].breeds[0];
    const breedName = breed.name;
    const description = breed.description;
    const temperament = breed.temperament;
    const imageUrl = catData[0].url;

    catInfo.innerHTML = `
        <h2>Cat Information</h2>
        <p><strong>Breed:</strong> ${breedName}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Temperament:</strong> ${temperament}</p>
        <img src="${imageUrl}" alt="Cat" />
    `;
    new SlimSelect({
      select: '#single'
    })

    hideLoader(loader);
    hideLoader(breedSelect);
    hideLoader(catInfo);
    hideErrorMessage();
}

breedSelect.addEventListener('change', (event) => {
    const breedId = breedSelect.value;
    showLoader(loader);
    hideLoader(breedSelect);
    hideErrorMessage();

    fetchCatByBreed(breedId)
        .then((catData) => {
            displayCat(catData);
        })
        .catch(() => {
            showErrorMessage();
        });
});

showLoader(loader);

fetchBreeds()
    .then((breeds) => {
        breeds.forEach((breed) => {
            const option = document.createElement('option');
            option.value = breed.value;
            option.text = breed.text;

            breedSelect.appendChild(option);
        });
        hideLoader(loader);
        showLoader(breedSelect);
    })
    .catch(() => {
        showErrorMessage();
    });
