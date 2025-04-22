function solution(sizes) {
    var answer = 0
    let w = 0
    let h = 0
    sizes.forEach((size) => {
        w = Math.max(Math.max(size[0], size[1]), w);
        h = Math.max(Math.min(size[0], size[1]), h);
    });
    return w*h;
}