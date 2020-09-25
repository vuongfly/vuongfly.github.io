package Demo.Enum;

public enum Checking {
    TRUE(1), FALSE(0);

    public int value;

    Checking(int value) {
        this.value = value;
    }

    public Checking getValue(int value) {
        switch (value) {
            case 1:
            return Checking.TRUE;
            case 0:
            return Checking.FALSE;
        }
        return Checking.FALSE;
    }
}
