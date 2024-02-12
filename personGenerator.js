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

    getPerson: function() {
        const person = {};
        person.gender = this.randomGender(person.gender);
        person.firstName = this.randomFirstName(person.gender);
        person.lastName = this.randomlastName(person.gender);
        person.birthYear = this.birthYearOutput();
        return person;
    },
};
