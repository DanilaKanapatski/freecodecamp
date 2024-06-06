function getAverage(scores) {
    let sum = scores.length;
    let result = 0;
    for (const score of scores) {
      result += score 
    }
    return (result/sum)
  }
  
  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));