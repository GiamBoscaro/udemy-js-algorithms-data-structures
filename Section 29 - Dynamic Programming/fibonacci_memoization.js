/**
 * Implement a solution to construct the
 * Fibonacci sequence with memoization
 */

function fibonacci(n) {
    const memo = [];
    function fib(n) {
        if (memo[n]) { return memo[n]; }
        if (n <= 2) return 1;
        memo[n] = fib(n - 1) + fib(n - 2);
        return memo[n];
    }
    return fib(n);
}