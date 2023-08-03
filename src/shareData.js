function generateCombinations(arr, prefix = '', index = 0, result = []) {
    if (index === arr.length) {
      result.push(prefix);
      return;
    }
  
    generateCombinations(arr, prefix + '/:' + arr[index], index + 1, result);
    generateCombinations(arr, prefix, index + 1, result);
  
    return result;
  }
  
  // Example usage:
  const inputArray = ['userId', 'approvedBy', 'templateType', 'status', 'dateTime'];
  const combinations = generateCombinations(inputArray);
  
  console.log(combinations);
  
