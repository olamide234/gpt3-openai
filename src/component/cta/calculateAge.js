function getAge(dateString) {
    const today = new Date();
    // const dtString = dateString.substr(3, 2)+"-"+dateString.substr(0, 2)+"-"+dateString.substr(6, 4);
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}
// console.log(getAge('1998/09/21'))
export {getAge}