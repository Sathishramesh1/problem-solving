//write a function to generate the first n numbers in the Fibonacci sequence.

function fibSeries(n){

    const fib=[0,1];

    for(let i=2;i<=n;i++){
        fib[i]=fib[i-1]+fib[i-2];
    }

return fib

}

console.log(fibSeries(10));