function solution(answers) {
    var answer = [];
    const count = [0, 0, 0]
    const pattern = [
        [1,2,3,4,5], 
        [2,1,2,3,2,4,2,5], 
        [3,3,1,1,2,2,4,4,5,5]]
    
    for(let i = 0; i < answers.length; i++){
        if(pattern[0][i%pattern[0].length] === answers[i]){
            count[0] += 1
        }
        if(pattern[1][i%pattern[1].length] === answers[i]){
            count[1] += 1
        }
        if(pattern[2][i%pattern[2].length] === answers[i]){
            count[2] += 1
        }
    }
    
    const max = Math.max(...count)
    for(let i = 0; i < 3; i++){
        if(max === count[i]) answer.push(i+1)
    }
    return answer;
}