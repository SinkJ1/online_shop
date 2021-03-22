const defaultUser = {
    name: "",
    email: "",
    logged: false
}

const SIGNIN = "signIn"
const REGISTRATION = "registration"
const LOGOUT = "logout"

export const Autorization = (state = defaultUser, action) => {
    switch (action.type) {
        case SIGNIN:
            return { ...state, name: action.payload.user.name, email: action.payload.user.email, logged: true }

        default:
            return defaultUser
    }
}

export const signIn = (payload) => ({ type: SIGNIN, payload: payload })