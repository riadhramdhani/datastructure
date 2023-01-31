function sumUniqueElements(set1, set2) {
    const hashTable = {};
    const sets = [set1, set2];
  
    sets.forEach(set => {
      set.forEach(element => {
        if (!hashTable[element]) {
          hashTable[element] = 0;
        }
        hashTable[element]++;
      });
    });
  
    let sum = 0;
    for (const key in hashTable) {
      if (hashTable[key] === 1) {
        sum += Number(key);
      }
    }
  
    return sum;
  }
  


  function sumOverlappingElements(set1, set2) {
    const elements = {};
    let sum = 0;
  
    set1.forEach(element => {
      elements[element] = true;
    });
  
    set2.forEach(element => {
      if (elements[element]) {
        sum += element;
        elements[element] = false;
      }
    });
  
    return sum;
  }
  
  
  
  