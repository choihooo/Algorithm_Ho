
function solution(clothes) {
    const typeMap = new Map();
    
    for(let i = 0; i < clothes.length; i++){
        const name = clothes[i][0]; 
        const type = clothes[i][1]; 
        
        if(typeMap.has(type)){
            typeMap.get(type).push(name);
        } else {
            typeMap.set(type, [name]);
        }
    }
    
    let answer = 1; 
    
    for(const [type, items] of typeMap) {
        answer *= (items.length + 1);
    }
    
    return answer - 1;
}