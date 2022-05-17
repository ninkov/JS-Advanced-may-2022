function solve(a,b) {
   
    let gcd = function(a, b) {
        if (!b) {
          return a;
        }
      
        return gcd(b, a % b);
      }
      let result = gcd(b, a % b);
      console.log(result);
}
solve(15,5);
