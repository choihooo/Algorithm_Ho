function solution(participant, completion) {
    var answer = '';
    let i;
    // 참가자, 완주자 정렬
    participant = participant.sort();
    completion = completion.sort()
    
    // 비교해서 없는애 추출
    for(i = 0; i < completion.length; i++){
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }
    
    return participant[i];
}