package Tutorial;

import java.util.Scanner;

public class App {

    String name = "Vuong Fly";
    static String fullName = "Nguyen van vuong";

    public static void main(final String[] args) throws Exception {
        System.out.println("Hello, World!" + fullName);

        // Season s = Season.AUTUMN;
        // System.out.println(s);
        // Season[] allSeason = Season.values();
        // for (Season season : allSeason) {
        // System.out.println(season);
        // }

        // App app = new App();
        // app.printNum(5,1);

    }

    public void test() {
        this.name = "Fly";
    }

    public void printNum(final int num, int count) {
        if (count <= num) {
            System.out.println(count);
            count++;
            printNum(num, count);
        }
    }

}
