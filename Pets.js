class Pets {

    constructor(options) {
       this.name = options.name
       this.speak = options.speak
       this.move = options.move
       this.owner = options.owner
       this.belongsTo = options.belongsTo
    }

}

class Dog extends Pets {
     const dog = new Dog({
        name: 'Rex',
        speak: 'Gaf Gaf',
        move: 'steps',
        owner: 'Ranger'
    })
}

class Cat extends Pets {
    const cat = new Cat({
        name: 'Pussy',
        speak: 'Meow Meow',
        move: 'steps',
        owner: 'Girl'
    
    })
}