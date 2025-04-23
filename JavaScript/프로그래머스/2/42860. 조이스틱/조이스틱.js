function solution(name) {
    let answer = 0;

    let min_move = name.length - 1;

    for (let i = 0; i < name.length; i++) {
        let char = name[i];
        let charCode = char.charCodeAt(0);

        answer += Math.min(charCode - 65, 91 - charCode);

        let next = i + 1;
        while (next < name.length && name[next] === "A") {
            next++;
        }

        let move1 = i * 2 + (name.length - next);
        let move2 = (name.length - next) * 2 + i;

        min_move = Math.min(min_move, move1, move2);
    }

    return answer + min_move;
}
