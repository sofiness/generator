window.onload = function() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('lastNameOutput').innerText = initPerson.lastName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
};

const clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click', function() {
    const firstNameElement = document.getElementById('firstNameOutput');
    const lastNameElement = document.getElementById('lastNameOutput');
    const genderElement = document.getElementById('genderOutput');
    const birthYearElement = document.getElementById('birthYearOutput');
  
    firstNameElement.innerText = 'Кто-то';
    lastNameElement.innerText = 'Какойтов';
    genderElement.innerText = 'Какойтович';
    birthYearElement.innerText = 'Когдатов';
});