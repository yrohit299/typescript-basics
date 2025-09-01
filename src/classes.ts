class Coder {

    secondLang!: string
    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'Python'
    ){}

    public getAge(){
        return this.age
    }
}

const John = new Coder('Dave', 'Jazz', 42)
console.log(John.getAge())

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age)
        this.computer = computer
    }

    getLang(){
        return `I write code in ${this.lang}`
    }
}

const Dave = new WebDev('Mac', 'Dave', 'Jazz', 42)
console.log(Dave.getLang())

////////////////////////////////////////////////

interface Guitarist {
    name: string
    active: boolean
    play(song: string): string
}

class Artist implements Guitarist {
    constructor(public name: string, public active: boolean) {
        this.name = name
        this.active = active
    }

    play(song: string): string {
        return `${this.name} plays ${song}`
    }
}

const Page = new Artist('Jimmy', true)
console.log(Page.play('Metallica'))

////////////////////////////////////////////////////////////////////

class Cricketer {
    private dataState: string[]
    constructor(){
        this.dataState = []
    }

    public get data(): string[]{
        return this.dataState
    }

    public set data(value: string[]){
        if(Array.isArray(value) && value.every(el => typeof el === 'string')){
            this.dataState = value
            return
        } else {
            throw new Error('Value is not an array')
        }
    } 
}

const myCricketer = new Cricketer()

myCricketer.data = (['Ravindra', '42', 'Indian'])

console.log(myCricketer.data)
myCricketer.data = [...myCricketer.data, 'CSK']
console.log(myCricketer.data)