function solution(nums) {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const maxPick = nums.length / 2;
  const uniqueCount = map.size;

  return Math.min(maxPick, uniqueCount);
}
