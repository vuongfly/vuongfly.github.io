package src.demo_ex1;


import java.util.Date;
import java.util.Scanner;
import java.text.SimpleDateFormat;
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Person {

    private int id;

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return this.id;
    }

    private String fullName; // limit 30

    public boolean setFullName(String fullName) {
        // Validation fullName
        if (fullName.length() <= 0 || fullName.length() > 30) {
            System.out.println("FullName must lessor than 30");
            return false;
        }
        this.fullName = fullName;
        return true;
    }

    public String getFullName() {
        return fullName;
    }

    private String gender;

    public boolean setGender(String gender) {
        if (gender.length() <= 0 || gender.length() > 30) {
            System.out.println("Gender cannot be null");
            return false;
        }
        this.gender = gender;
        return true;
    }

    public String getGender() {
        return gender;
    }

    private Date dob;

    public boolean setDob(String dob) {
        try {
            this.dob = new SimpleDateFormat("dd/MM/yyyy").parse(dob);
            return true;
        } catch (Exception e) {
            System.out.println(e);
            System.out.println("Have error please re-input");
            return false;
        }
    }

    public Date getDob() {
        return dob;
    }

    private String address; // Limit 50

    public boolean setAddress(String address) {
        // Validation address
        if (address.length() <= 0 || address.length() > 50) {
            System.out.println("Address must lessor than 50");
            return false;
        }
        this.address = address;
        return true;
    }

    public String getAddress() {
        return address;
    }

    void inputInfo(Scanner reader) {
        System.out.println("Input id: ");
        this.setId(reader.nextInt());
        reader.nextLine();

        boolean checkInput = true;
        while (checkInput) {
            System.out.println("Input fullName: ");
            checkInput = !this.setFullName(reader.nextLine());
        }

        checkInput = true;
        while (checkInput) {
            System.out.println("Input Gender: ");
            checkInput = !this.setGender(reader.nextLine());
        }

        checkInput = true;
        while (checkInput) {
            System.out.println("Input Date of birth (mm/dd/yyyy): ");
            checkInput = !this.setDob(reader.nextLine());
        }

        checkInput = true;
        while (checkInput) {
            System.out.println("Input address: ");
            checkInput = !this.setAddress(reader.nextLine());
        }

    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", fullName='" + getFullName() + "'" +
            ", gender='" + getGender() + "'" +
            ", dob='" + getDob() + "'" +
            ", address='" + getAddress() + "'" +
            "}";
    }

    void showInfo(){
        System.out.println(this.toString());        
    }

    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);
        System.out.println("Please input person info: ");
        Person p = new Person();
        p.inputInfo(reader);
        p.showInfo();
    }
}
