class Solution {
    public int solution(int a, int b) {
        String str = ("" + a + b);

        int num = Integer.parseInt(str);
        int product = 2 * a * b;
        
        return Math.max(num, product);
    }
}
