const user1 = {
    name:"name1",
    eMail:"test@mail.tu",
    password:"1234qwe"
}

const user2 = {
    naeme:"name2",
    eMail:"test2@mail.tu",
    password:"1234qwe"
}

let users = [user1, user2]

export const signInUser = (signedUser) => {
    return users.filter((user) => user.eMail == signedUser.eMail && user.password == signedUser.password)
}

export const addUser = (user) => {
    users.push(user)
}
