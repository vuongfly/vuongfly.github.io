package src.Tutorial;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class InputData {

    public static void main(String[] args) throws IOException {

        System.out.print("Nhập tên của bạn: ");
        //Nhập dữ liệu, sử dụng BufferReader
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        //Đọc dữ liệu sử dụng phương thức readLine();
        String name = reader.readLine();

        // In dữ liệu ra màn hình
        System.out.println(name);
    }
}
