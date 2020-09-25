package DemoEmployee;

public class Main {
    public static void main(String[] args) {
        Employee em1 = new Employee();
        em1.setName("Vượng Fly");
        em1.setSalary(123000);
        em1.work();
        System.out.println("Salary of " + em1.getName() + " is " + String.format("%2.0f",em1.getSalary()));
    }
}
