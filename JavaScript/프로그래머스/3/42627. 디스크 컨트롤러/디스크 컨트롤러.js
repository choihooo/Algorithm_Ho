function solution(jobs) {
   const totalJobs = jobs.length;
   const sortedJobs = [...jobs].sort((a, b) => a[0] - b[0]);
   
   let currentTime = 0;
   let totalTurnaroundTime = 0;
   let completed = 0;
   const waitingQueue = [];
   
   if (sortedJobs.length > 0) {
       currentTime = sortedJobs[0][0];
   }
   
   while (completed < totalJobs) {
       while (sortedJobs.length > 0 && sortedJobs[0][0] <= currentTime) {
           waitingQueue.push(sortedJobs.shift());
       }
       
       if (waitingQueue.length > 0) {
           waitingQueue.sort((a, b) => a[1] - b[1]);
           
           const [requestTime, duration] = waitingQueue.shift();
           
           currentTime += duration;
           completed++;
           
           const turnaroundTime = currentTime - requestTime;
           totalTurnaroundTime += turnaroundTime;
       } else {
           if (sortedJobs.length > 0) {
               currentTime = sortedJobs[0][0];
           }
       }
   }
   
   return Math.floor(totalTurnaroundTime / totalJobs);
}