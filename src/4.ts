class Key {
    private signature: number = Math.random()
    getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key, private name?: string) {}
    
    getName(): string {
        return this.name ?? "No name";
    }

    getSignature(): Key {
        return this.key;
    }
}

interface IHouse {
    openDoor(key: Key): void;
    comeIn(person: Person): void;
}

abstract class House implements IHouse {
    protected door: boolean = false;
    protected tenants: Person[] = [];
    constructor(protected key: Key) {} 
    abstract openDoor(key: Key): void; 
    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person)
            console.log(`${person.getName()} is coming in the house`);
        } else {
            console.log("The door is closed. You can't come in.");
        }
        
    }
}

class MyHouse extends House { 
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log("The door is opened");
        } else {
            console.log("Invalid key. Access denied.");
        }
    }
}

const key = new Key();
const person = new Person(key); 
const house = new MyHouse(key);

house.openDoor(person.getSignature());
house.comeIn(person);

