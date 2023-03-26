/**
 * Implement a solution to construct the
 * Fibonacci sequence with tabulation
 */

function fibonacci(n) {
    const tab = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        tab[i] = tab[i - 1] + tab[i - 2];
    }
    return tab[n];
}