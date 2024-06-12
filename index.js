import { checkWeather } from './api.js';

const searchbtn = document.getElementById('searchbtn');
const inputbox = document.querySelector('.inputbox');

searchbtn.addEventListener('click', () => {
    checkWeather(inputbox.value);
});

