import java.util.HashMap;
import java.util.Map;

class Solution {
    public int solution(int[] array) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();

        for (int num : array) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        int mode = -1;
        int maxFrequency = 0;
        boolean hasMultipleModes = false;

        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            int number = entry.getKey();
            int frequency = entry.getValue();
            
            if (frequency > maxFrequency) {
                maxFrequency = frequency;
                mode = number;
                hasMultipleModes = false; 
            } else if (frequency == maxFrequency) {
                hasMultipleModes = true; 
            }
        }

        return hasMultipleModes ? -1 : mode;
    }
}
