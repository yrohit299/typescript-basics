class Coder {
    constructor(name, music, age, lang = 'Python') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return this.age;
    }
}
const John = new Coder('Dave', 'Jazz', 42);
console.log(John.getAge());
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write code in ${this.lang}`;
    }
}
const Dave = new WebDev('Mac', 'Dave', 'Jazz', 42);
console.log(Dave.getLang());
class Artist {
    constructor(name, active) {
        this.name = name;
        this.active = active;
        this.name = name;
        this.active = active;
    }
    play(song) {
        return `${this.name} plays ${song}`;
    }
}
const Page = new Artist('Jimmy', true);
console.log(Page.play('Metallica'));
////////////////////////////////////////////////////////////////////
class Cricketer {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('Value is not an array');
        }
    }
}
const myCricketer = new Cricketer();
myCricketer.data = (['Ravindra', '42', 'Indian']);
console.log(myCricketer.data);
myCricketer.data = [...myCricketer.data, 'CSK'];
console.log(myCricketer.data);
export {};
//# sourceMappingURL=classes.js.map