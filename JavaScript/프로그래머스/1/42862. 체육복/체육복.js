function solution(n, lost, reserve) {
    const student = Array(n).fill(0);
    
    let i = 0
    for(i; i < lost.length; i++){
        student[lost[i] - 1] -= 1;
    }
    
    i=0
    for(i; i < reserve.length; i++){
        student[reserve[i] - 1] += 1;
    }
    
    i=0
    for(i; i < student.length; i++){
        if(student[i]===1 && student[i-1]===-1){
            student[i] = 0
            student[i-1] = 0
        }
        if(student[i]===1 && student[i+1]===-1){
            student[i] = 0
            student[i+1] = 0
        }
    }
    
    let count = 0;
    
    student.forEach((value)=>{
        if(value >= 0) count++;
    })
    console.log(student)
    return count;
}