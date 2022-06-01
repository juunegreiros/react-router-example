const auth = {
  isAuthenticated: false,
  login() {
    auth.isAuthenticated = true
  },
  logout() {
    auth.isAuthenticated = false
  }
}

export default auth