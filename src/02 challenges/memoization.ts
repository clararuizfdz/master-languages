console.log("***************** MEMOIZATION **********************");


const expensiveFunction = () => {
    console.log("Una única llamada");
    return 3.1415;
  }
  
  const memoize = fn =>{
      const cache = {};
      return (...args) =>{
          const stringArgs = JSON.stringify(args);
            const result = (cache[stringArgs]) = 
            typeof cache[stringArgs] === 'undefined'
            ? fn(...args)
            :cache[stringArgs];
            return result;
      }
  }
  
  const memoized = memoize(expensiveFunction);
  console.log(memoized()); // Una única llamada // 3.1415
  console.log(memoized()); // 3.1415
  console.log(memoized()); // 3.1415