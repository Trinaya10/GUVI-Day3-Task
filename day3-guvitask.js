/*function deepCompare(jsonStr1, jsonStr2) {
    // Parse JSON strings to JavaScript objects
    const obj1 = JSON.parse(jsonStr1);
    const obj2 = JSON.parse(jsonStr2);
  
    
    function sortObject(obj) {
      if (Array.isArray(obj)) {
        return obj.map(item => sortObject(item)).sort();
      } else if (typeof obj === 'object' && obj !== null) {
        return Object.keys(obj).sort().reduce((sorted, key) => {
          sorted[key] = sortObject(obj[key]);
          return sorted;
        }, {});
      } else {
        return obj;
      }
    }
  
    
    const sortedObj1 = sortObject(obj1);
    const sortedObj2 = sortObject(obj2);
  
    const isEqual = JSON.stringify(sortedObj1) === JSON.stringify(sortedObj2);
  
    return isEqual;
  }
  
  
  const jsonStr1 = '{"name": "John", "age": 30, "city": "New York"}';
  const jsonStr2 = '{"age": 30, "name": "John", "city": "New York"}';
  
  const result = deepCompare(jsonStr1, jsonStr2);
  console.log(result);  // true
  
  

/*var TODORequest = new XMLHttpRequest();
TODORequest.open("GET", "https://restcountries.com/v3.1/all");
TODORequest.addEventListener('load', function (){
  
  iterate(JSON.parse(this.response))
});

TODORequest.send()
console.log(TODORequest)

function iterate(arr = []) {
  for (var x = 0; x < arr.length; x++) {
    console.log(arr[x].flag)
  }
}*/

/*var TODORequest = new XMLHttpRequest();
TODORequest.open("GET", "https://restcountries.com/v3.1/all");
TODORequest.addEventListener('load', function (){
  
  iterate(JSON.parse(this.response))
});

TODORequest.send()
console.log(TODORequest)

function iterate(arr = []) {
  for (var x = 0; x < arr.length; x++) {
    console.log(arr[x].region)
    console.log(arr[x].subregion)
    console.log(arr[x].country)

  }
}*/

