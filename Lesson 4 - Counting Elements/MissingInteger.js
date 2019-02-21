/*
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

-------------------------------------
Solution: https://app.codility.com/demo/results/trainingBADWWK-RZE/
Task Score: 100%
Correctness: 100%
Performance: 100%
*/

function solution (A) {
  let max = 0
  let values = []

  for (let i = 0; i < A.length; i++) {
    let number = A[i]

    if (!values[number]) {
      values[number] = 1
      if (max < number) {
        max = number
      }
    }
  }

  for (let i = 1; i <= max + 1; i++) {
    if (!values[i]) {
      return i
    }
  }

  return 1
}
