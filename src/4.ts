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

class MyHouse implements IHouse {
     private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    openDoor(person: Person): void {
        if (person.getKey() === this.key.getKey()) {
            console.log(`${person.getName()} is opening the door`);
        } else {
            console.log("Invalid key. Access denied.");
        }
    }

    comeIn(person: Person): void {
        console.log(`${person.getName()} is coming in the house`);
    }
}

const key = new Key();
const person = new Person(key);
const house = new MyHouse(key);

house.openDoor(person);
house.comeIn(person);
