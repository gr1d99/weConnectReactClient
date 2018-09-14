export function authenticateUser(jwt_token) {
    localStorage.setItem("jwt_token", jwt_token)
}
