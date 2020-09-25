package DemoEmployee;

public class Employee extends Person implements Workable, canSalary {

    double salary;
    
    @Override
    public void work() {
        System.out.println(this.name + " is working");
    }

    @Override
    public void setSalary(double salary) {
        // TODO Auto-generated method stub
        this.salary = salary;
    }

    @Override
    public double getSalary() {
        // TODO Auto-generated method stub
        return this.salary;
    }
}
