package Demo;

import java.util.Date;
import java.util.Scanner;

import Demo.Enum.Gender;

import java.text.*;

public class Person {
    String id;
    String name;
    int gender;
    Date dob;
    String address;

    public Person() {
    }

    public Person(String id, String name, int gender, Date dob, String address) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.dob = dob;
        this.address = address;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Gender getGender() {
        switch (this.gender) {
            case 1:
                return Gender.MALE;
            case 2:
                return Gender.FEMALE;
            case 3:
                return Gender.OTHER;
            default:
                return Gender.OTHER;
        }
    }

    public void setGender(int gender) {
        this.gender = gender;
    }

    public Date getDob() {
        return this.dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }


    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", name='" + getName() + "'" +
            ", gender='" + getGender() + "'" +
            ", dob='" + getDob() + "'" +
            ", address='" + getAddress() + "'" +
            "}";
    }
    

    void inputInfo(Scanner reader) {
        // ID
        System.out.println("Input ID: ");
        this.setId(reader.nextLine().toString());
        // Name
        System.out.println("Input Name: ");
        this.setName(reader.nextLine().toString());
        // Gender
        System.out.println("Input Gender: ");
        this.setGender(Integer.parseInt(reader.nextLine()));
        // DOB
        boolean check = false;
        while (!check) {
            try {
                System.out.println("Input Date of birth: ");
                SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy");
                this.setDob(formatter.parse(reader.nextLine().toString()));
                check = true;
            } catch (Exception e) {
                // TODO: handle exception
                System.out.println("Input is not valid");
            }
        }

        // ADDRESS
        System.out.println("Input Address: ");
        this.setAddress(reader.nextLine().toString());

    }

    void showInfo() {
        System.out.println("Information of " + this.getName() + " :");
        System.out.println(this.toString());
    }

    public static void main(String[] args) {
        Person p = new Person();
        Scanner reader = new Scanner(System.in);
        p.inputInfo(reader);
        p.showInfo();
    }

}
