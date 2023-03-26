/**
 * Implement a naive solution to construct
 * Fibonacci sequence with recursion
 */

function fibonacci(n) {
    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}