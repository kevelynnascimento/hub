//Given list of numbers and target number. Return true if there are 2 elements in the list which sum to the target number, otherwise return false.

const find = (inputList, target) => {
    for (let i = 0; i < inputList.length; i++) {
        for (let j = i + 1; j < inputList.length; j++) {
            const current = inputList[i];
            const next = inputList[j];
            const result = current + next;
            if (result === target) {
                return true;
            }
        }
    }

    return false;
};

const inputList = [10, 21, 17, 55, 8, 77, 2, 14, 19, 4, 48, 99, 16];
const inputTarget = 35;
find(inputList, inputTarget);


// big O notation (n log)