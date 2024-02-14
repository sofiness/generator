window.onload = function() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('lastNameOutput').innerText = initPerson.lastName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymics;
    document.getElementById('birthdayOutput').innerText = initPerson.birthday;
};

const clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click', function() {
    const firstNameElement = document.getElementById('firstNameOutput');
    const lastNameElement = document.getElementById('lastNameOutput');
    const genderElement = document.getElementById('genderOutput');
    const birthYearElement = document.getElementById('birthYearOutput');
    const professionElement = document.getElementById ('professionOutput');
    const patronymicElement = document.getElementById ('patronymicOutput');
    const birthdayElement = document.getElementById ('birthdayOutput');
  
    firstNameElement.innerText = 'Кто-то';
    lastNameElement.innerText = 'Какойтов';
    genderElement.innerText = 'Не ясен...';
    birthYearElement.innerText = 'Когдатов';
    professionElement.innerText = 'Никто не должен работать';
    patronymicElement.innerText = 'Какойтович';
    birthdayElement.innerText = 'Когда-то';
});


const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', function() {
    const firstNameElement = document.getElementById('firstNameOutput');
    const lastNameElement = document.getElementById('lastNameOutput');
    const genderElement = document.getElementById('genderOutput');
    const birthYearElement = document.getElementById('birthYearOutput');
    const professionElement = document.getElementById('professionOutput');
    const patronymicElement = document.getElementById('patronymicOutput');
    const birthdayElement = document.getElementById('birthdayOutput');
   
    const randomPerson = personGenerator.getPerson();

    firstNameElement.innerText = randomPerson.firstName;
    lastNameElement.innerText = randomPerson.lastName;
    genderElement.innerText = randomPerson.gender;
    birthYearElement.innerText = randomPerson.birthYear;
    professionElement.innerText = randomPerson.profession;
    patronymicElement.innerText = randomPerson.patronymics;
    birthdayElement.innerHTML = randomPerson.birthday;
});

