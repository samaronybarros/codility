/*
A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

S is empty;
S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..200,000];
string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".

-------------------------------------
Solution: https://app.codility.com/demo/results/trainingKHYDD6-PAF/
Task Score: 100%
Correctness: 100%
Performance: 100%
*/

function solution(S) {
  if (isOdd(S.length)) {
    return 0
  }

  let stack = []
  for (let value of S) {
    if (isOpened(value)) {
      stack.push(value)
    } else {
      let opened = stack.pop()
      if (!isPair(opened, value)) {
        return 0
      }
    }
  }

  return stack.length === 0 ? 1 : 0
}

function isOdd(number) {
  return number % 2 === 1
}

function isOpened(value) {
  return ['{', '[', '('].includes(value)
}

function isPair(open, close) {
  return (
    (open === '{' && close === '}') ||
    (open === '[' && close === ']') ||
    (open === '(' && close === ')')
  )
}
