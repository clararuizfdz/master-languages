console.log("************** PRACTICE *********************");
console.log("************** ZIP *********************");
//TODO

function zipObject(keys, values) {
    var result = {};
    keys.forEach((key,i) => {
      if(values[i]!= undefined)
      {
        result[key] = values[i];
      }
    });
    return result;
  }

  console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"]));
  console.log(zipObject(["spanish", "english", "french"], ["hola"]));
