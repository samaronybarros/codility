/*
A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

function solution(A);

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].

-------------------------------------
Solution: https://app.codility.com/demo/results/trainingJDCVGJ-D2E/
Task Score: 100%
Correctness: 100%
Performance: 100%
*/

function solution (A) {
  const sumElem = gauss(A)
  const sumPermutElem = sumArrElem(A)

  if (sumElem - sumPermutElem === 0) {
    if (!isUnique(A)) {
      return 0
    }

    return 1
  } else {
    return 0
  }
}

function sumArrElem (A) {
  return A.reduce((partialSum, value) => partialSum + value)
}

function gauss (A) {
  const N = A.length

  return (N * (N + 1)) / 2
}

function isUnique (A) {
  let values = []

  for (i = 0; i < A.length; i++) {
    if (!values[A[i]]) {
      values[A[i]] = 1
    } else {
      return false
    }
  }

  return true
}

console.log(solution([4, 1, 3, 2]))
console.log(solution([4, 1, 3]))
