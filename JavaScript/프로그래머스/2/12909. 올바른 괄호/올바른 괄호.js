function solution(s){
    var answer = true;
    const arr = [];
    for(let i = 0; i < s.length; i++){
        if(arr[arr.length - 1] === '(' && s[i] === ')'){
            arr.pop();
        }else {
            arr.push(s[i]);
        }
    }
    
    if(arr.length === 0){
        return true
    }
    return false
}