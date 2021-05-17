function sort(arr) {
    if (arr.length < 2) return arr;

    let pivot = Math.round(Math.random() * (arr.length - 1));
    let elem = arr[pivot];

    let lowest = [];
    let higest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i == pivot) continue;

        if (arr[i] >= elem) higest.push(arr[i]);

        else lowest.push(arr[i]);
    }

    return [...sort(lowest), elem, ...sort(higest)];
}

console.log(sort([1, 45, 3, 23, 76, 9, 6, 4, 13, 9, 6, 80, 8, 8, 5, 54, 54, 54, 54, 5, 67, 8, 3, 21, 3, 5, 46, 879, 0, 98, 76, 54, 32, 1, 34, 56, 7, 89]));