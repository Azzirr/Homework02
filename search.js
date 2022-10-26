// binary search
function binarySearch(target){
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while(leftIndex <= rightIndex){
        let middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2)

        if (target === array[middleIndex]){
            console.log('Index for looking ' + target + ' is ' + middleIndex);
            return;
        }
        if  (target < array[middleIndex]){
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    console.log(-1);
}

//binarySearch(5);
let array = [2, 4, 1, 3];
function selectionSort(){
    let array = [2, 4, 1, 3, 9, 7, 22, 15, 11];

    for(let i = 0; i < array.length - 1; i++){
        let minIndex = i;
        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[minIndex]){
                minIndex = j;
            }
        }
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    console.log(array);
}
selectionSort()