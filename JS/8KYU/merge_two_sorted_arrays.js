function mergeArrays(arr1, arr2) {
    let mergedUnique = [... new Set(arr1.concat(arr2))]
    return mergedUnique.sort((a,b)=>  a-b)
    }
    

// OR

function mergeArrays(arr1, arr2) {
    return [... new Set(arr1.concat(arr2))].sort((a,b)=>  a-b)
    }