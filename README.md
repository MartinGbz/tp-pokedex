# Pokedex

### About the token management system

If the user tries to get the team and it returns a 401 error, the website will try to get a new access token with the current refresh token.
If the access token request returns an error, the website redirects the user to the login page.
