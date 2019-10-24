function solution(A, B) {
    const UPSTREAM = 0
    const DOWNSTREAM = 1

    let fishes = [0]

    let fish = 1
    while (fish < A.length) {
        const currentFish = fish
        const lastFish = fishes.pop()

        if (B[lastFish] === UPSTREAM || B[currentFish] === DOWNSTREAM) {
            fishes.push(lastFish)
            fishes.push(currentFish)
            fish++
        } else if (B[lastFish] === DOWNSTREAM && B[currentFish] === UPSTREAM) {
            if (A[lastFish] > A[currentFish]) {
                fishes.push(lastFish)
                fish++
            }

            if (fishes.length === 0) {
                fishes.push(currentFish)
                fish++
            }
        }
    }

    return fishes.length
}

let A = []
let B = []

A = [4, 3, 2, 1, 5]
B = [0, 1, 0, 0, 0]
console.log('Solution: ', solution(A, B))
A = [1, 2]
B = [1, 0]
console.log('Solution: ', solution(A, B))
A = [1, 2, 3, 4, 5, 6, 7, 8, 9]
B = [1, 1, 1, 1, 1, 1, 1, 1, 0]
console.log('Solution: ', solution(A, B))
