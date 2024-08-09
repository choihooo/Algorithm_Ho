class Solution {
    public int[] solution(int[] answers) {
        int[] answer = {};
        int size = answers.length;
        
        
        int[] one = { 1, 2, 3, 4, 5};
        int[] two = { 2, 1, 2, 3, 2, 4, 2, 5};
        int[] three = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};
        
        int[] score = {0,0,0};
        
        for(int i = 0; i < size; i++){
            if(one[i%5] == answers[i])
                score[0]+=1;
            if(two[i%8] == answers[i])
                score[1]+=1;
            if(three[i%10] == answers[i])
                score[2]+=1;
        }
        
        int maxScore = Math.max(score[0], Math.max(score[1], score[2]));
        
        int count = 0;
        for (int i = 0; i < 3; i++) {
            if (score[i] == maxScore) {
                count++;
            }
        }
        
        int[] result = new int[count];
        int index = 0;
        for (int i = 0; i < 3; i++) {
            if (score[i] == maxScore) {
                result[index++] = i + 1;
            }
        }
        
        return result;
    }
}