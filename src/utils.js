const getInitials = (firstName, lastName) => {
    return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
};

const checkRequiredFields = (...rest) => {
    let isEmpty = true;
    for(let i = 0; i < rest.length; i++){
        if(rest[i].trim().length){
            isEmpty = false;
        }
        else{
            isEmpty = true;
            break;
        }
    }
    return isEmpty;
};

const getFavCount = (employeeList) => {
    let favCount = 0;
    employeeList.map(ele => {
        if(ele.isFav){
            favCount++;
        }
    });
    return favCount;
};

export {
    getInitials,
    checkRequiredFields,
    getFavCount
}