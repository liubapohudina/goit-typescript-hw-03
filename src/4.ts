class Key {
    private key: number;
    constructor() {
        this.key = Math.random();
    }
    getKey(): number {
        return this.key;
    }
}

class Person {
    constructor(private key: Key, private name?: string) {}
    
    getName(): string {
        return this.name ?? "No name";
    }

    getKey(): number {
        return this.key.getKey();
    }
}

interface IHouse {
    openDoor(person: Person): void;
    comeIn(person: Person): void;
}

abstract class House implements IHouse {
    protected door: boolean; 
    constructor(protected key: Key) {} 
    abstract openDoor(person: Person): void; 
    comeIn(person: Person): void {
        console.log(`${person.getName()} is coming in the house`);
    }
}

class MyHouse extends House { 
    constructor(key: Key) {
        super(key); 
    }

    openDoor(person: Person): void {
        if (person.getKey() === this.key.getKey()) {
            console.log(`${person.getName()} is opening the door`);
        } else {
            console.log("Invalid key. Access denied.");
        }
    }
}

const key = new Key();
const person = new Person(key); 
const house = new MyHouse(key);

house.openDoor(person);
house.comeIn(person);

