package DemoAnimal;

public class Cat extends Animal {

    @Override
    public void speak() {
        // TODO Auto-generated method stub
        System.out.println("meo meo meo meo");
    }

    public static void main(String[] args) {
        Cat cat = new Cat();
        cat.speak();
    }
// pubfolio
}
