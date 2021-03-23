const defaultUser = {
    name: "",
    email: "",
    logged: false
}

const SIGNIN = "signIn"
const LOGOUT = "logout"

export const autorization = (state = defaultUser, action) => {
    switch (action.type) {
        case SIGNIN:
            return { ...state, name: action.payload.user.name, email: action.payload.user.email, logged: true }
        case LOGOUT:
            return { ...state, name: "", email: "", logged: false }
        default:
            return defaultUser
    }
}

export const signIn = (payload) => ({ type: SIGNIN, payload: payload })
export const logOut = (payload) => ({ type: LOGOUT, payload: payload })