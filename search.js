// binary search
function binarySearch(){
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let type = 3;
    let leftIndex = 0;
    let rightIndex = array.lenght - 1;

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if(type === array(middleIndex)){
            console.log(middleIndex);
        }
        if(type < array[middleIndex]){
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    console.log(-1)
}

