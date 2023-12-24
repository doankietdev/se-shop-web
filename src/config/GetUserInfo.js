// Just get some public information like User's name, First Name, Last Name, Id

export default function getUserInfoFromLocalStorage() {
    const userInfo = JSON.parse(localStorage.getItem('user'))
    return userInfo
}