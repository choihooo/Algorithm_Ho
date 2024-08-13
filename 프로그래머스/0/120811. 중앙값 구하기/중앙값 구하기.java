import java.util.Arrays;

class Solution {
    public int solution(int[] array) {
        Arrays.sort(array);

        int midIndex = array.length / 2;

        return array[midIndex];
    }
}
