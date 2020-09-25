package DemoEmployee;

public interface Workable {
    default void work() {
        System.out.println("working");
    };
}
