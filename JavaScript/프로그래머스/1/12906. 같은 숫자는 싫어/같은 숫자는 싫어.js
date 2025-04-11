function solution(arr)
{
    const answer = [];
    
    for(let i = 0; i < arr.length; i++){
        if(answer.length === 0){
            answer.push(arr[i])
        }
        if(answer[answer.length-1] !== arr[i]){
            answer.push(arr[i])
        }
    }
       return answer;
}