function generateCombinations(arr, prefix = '', index = 0, result = []) {
    if (index === arr.length) {
        if (prefix !== '') {
            prefix = prefix.replace(":dateTime", ":startDateTime/:endDateTime");
            const routeName = replaceAllOccurrences(prefix.slice(2).toLowerCase(), '/:', 'and');
            result.push({methos: "GET", url: "fetchUserListBy" + routeName + prefix, handler: "getRequestListByFilters"});
        }
        return;
    }
  
    generateCombinations(arr, prefix + '/:' + arr[index], index + 1, result);
    generateCombinations(arr, prefix, index + 1, result);
  
    return result;
  }
  
  function replaceAllOccurrences(str, substring, newValue) {
    const regex = new RegExp(substring, 'g');
    return str.replace(regex, newValue);
  }

  // Example usage:
  const inputArray = ['userId', 'approvedBy', 'templateType', 'dateTime'];
  console.log(generateCombinations(inputArray));
