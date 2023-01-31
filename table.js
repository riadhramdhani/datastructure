function sumUniqueElements(set1, set2) {
    const uniqueElements = [];
    const sets = [set1, set2];
  
    sets.forEach(set => {
      set.forEach(element => {
        if (!uniqueElements.includes(element)) {
          uniqueElements.push(element);
        }
      });
    });
  
    return uniqueElements.reduce((sum, current) => sum + current, 0);
  }



  function sumOverlappingElements(set1, set2) {
    let sum = 0;
  
    for (let i = 0; i < set1.length; i++) {
      for (let j = 0; j < set2.length; j++) {
        if (set1[i] === set2[j]) {
          sum += set1[i];
          break;
        }
      }
    }
  
    return sum;
  }
 
  function sumOverlappingElements(set1, set2) {
    set1.sort((a, b) => a - b);
    set2.sort((a, b) => a - b);
  
    let sum = 0;
    let i = 0;
    let j = 0;
  
    while (i < set1.length && j < set2.length) {
      if (set1[i] === set2[j]) {
        sum += set1[i];
        i++;
        j++;
      } else if (set1[i] < set2[j]) {
        i++;
      } else {
        j++;
      }
    }
  
    return sum;
  }
 


  function sumOverlappingElements(set1, set2) {
    set1.sort((a, b) => a - b);
    set2.sort((a, b) => a - b);
  
    let sum = 0;
    let i = 0;
    let j = 0;
  
    while (i < set1.length && j < set2.length) {
      if (set1[i] === set2[j]) {
        sum += set1[i];
        i++;
        j++;
      } else if (set1[i] < set2[j]) {
        i++;
      } else {
        j++;
      }
    }
  
    return sum;
  }
  
  
  
  
  
  
  
  
  

  