import java.util.TreeSet;
import java.util.Set;

class Solution {
    public Set<Integer> solution(int[] numbers) {
        
        Set<Integer> set = new TreeSet<Integer>();
        
        for(int i = 0; i < numbers.length; i++){
            for(int j=0; j < numbers.length; j++){
                if(i==j){
                    continue;
                }
                set.add(numbers[i] + numbers[j]);
            }
        }
        
        return set;
    }
}