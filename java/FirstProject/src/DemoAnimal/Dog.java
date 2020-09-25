package DemoAnimal;

/**
 * Dog
 */
public class Dog implements Speakable {

    public static void main(String[] args) {
        Dog d = new Dog();
        d.speak();
    }

    @Override
    public void speak() {
        // TODO Auto-generated method stub
        System.out.println("wan wan wan wan");
    }
    
}