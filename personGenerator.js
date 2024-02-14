const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {  
            "id_1": "Мария",
            "id_2": "София",
            "id_3": "Галина",
            "id_4": "Анастасия",
            "id_5": "Валерия",
            "id_6": "Маргарита",
            "id_7": "Татьяна",
            "id_8": "Екатерина",
            "id_9": "Снежана",
            "id_10": "Надежда"
        }
    }`,   

    randomFirstName: function(gender) {
        if (gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function() {
        return Math.random() < 0.5 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },
   
    randomIntNumber: function(max = 1, min = 0) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    randomValue: function(json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    
    randomlastName: function(gender) {
        if (gender === this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        } else {
            const maleSurname = this.randomValue(this.surnameJson);
            return maleSurname + 'а';
        }
    },

    birthYearOutput: function() {
        const currentYear = new Date().getFullYear();
        const minYear = currentYear - 80;
        const maxYear = currentYear - 18;
        return this.randomIntNumber(maxYear, minYear);
    },

    randomProfession: function(gender) {
        const maleProfessions = {
            "count": 10,
            "list": {
                "id_1": "Инженер",
                "id_2": "Врач",
                "id_3": "Учитель",
                "id_4": "Шахтёр",
                "id_5": "Водитель",
                "id_6": "Экономист",
                "id_7": "Блогер",
                "id_8": "Программист",
                "id_9": "Грумер",
                "id_10": "Кассир"
            }
        };
        const femaleProfessions = {
            "count": 10,
            "list": {
                "id_1": "Медсестра",
                "id_2": "Учительница",
                "id_3": "Библиотекарь",
                "id_4": "Воспитательница",
                "id_5": "Домохозяйка",
                "id_6": "Мастер маникюра",
                "id_7": "Официантка",
                "id_8": "Переводчик",
                "id_9": "Грумер",
                "id_10": "Кассир"
            }
        };
        const professions = gender === this.GENDER_MALE ? maleProfessions : femaleProfessions;
        const randomIndex = Math.floor(Math.random() * professions.count) + 1;
        return professions.list[`id_${randomIndex}`];
    },

    randomPatronymic: function(gender) {
       const malePatronymics = {
            "count": 10,
            "list": {
                "id_1": "Александрович",
                "id_2": "Иванович",
                "id_3": "Петрович",
                "id_4": "Павлович",
                "id_5": "Алексеевич",
                "id_6": "Игоревич",
                "id_7": "Андреевич",
                "id_8": "Сергеевич",
                "id_9": "Фёдорович",
                "id_10": "Николаевич"
            } 
        };
        const femalePatronymics = {
            "count": 10,
            "list": {
                "id_1": "Александровна",
                "id_2": "Ивановна",
                "id_3": "Петровна",
                "id_4": "Павловна",
                "id_5": "Алексеевна",
                "id_6": "Игоревна",
                "id_7": "Андреевна",
                "id_8": "Сергеевна",
                "id_9": "Фёдоровна",
                "id_10": "Николаевна"
            }
        };
        const patronymics = gender === this.GENDER_MALE ? malePatronymics : femalePatronymics;
        const randomIndex = Math.floor(Math.random() * patronymics.count) + 1;
        return patronymics.list[`id_${randomIndex}`];
    },

    randomBirthday: function() {
        const months = [
            "января", "февраля", "марта", "апреля", "мая", "июня",
            "июля", "августа", "сентября", "октября", "ноября", "декабря"
        ];
    
        const randomIndex = Math.floor(Math.random() * months.length);
        const randomMonth = months[randomIndex];
    
        const daysInMonth = {
            "января": 31, "февраля": 28, "марта": 31, "апреля": 30,
            "мая": 31, "июня": 30, "июля": 31, "августа": 31,
            "сентября": 30, "октября": 31, "ноября": 30, "декабря": 31
        };
    
        const randomDay = Math.floor(Math.random() * daysInMonth[randomMonth]) + 1;
    
        return {
            month: randomMonth,
            day: randomDay
        };
    },

    getPerson: function() {
        const person = {};
        person.gender = this.randomGender();
        person.firstName = this.randomFirstName(person.gender);
        person.lastName = this.randomlastName(person.gender);
        person.birthYear = this.birthYearOutput();
        person.profession = this.randomProfession(person.gender);
        person.patronymics = this.randomPatronymic (person.gender);
        
        const birthday = this.randomBirthday();
        const day = birthday.day;
        const month = birthday.month; 

        person.birthday = `${day} ${month}`;
        return person;
    },
};