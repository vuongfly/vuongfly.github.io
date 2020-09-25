package DemoAnimal;

public abstract class Animal implements Speakable {
    public static void main(String[] args) {
        Cat cat = new Cat();
        cat.speak();
        Dog dog = new Dog();
        dog.speak();
    }
    
}
