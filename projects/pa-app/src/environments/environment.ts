export const environment = {
    production: true,
    apiUrl: 'http://to_set',
    authAuthority: 'http://localhost:8080/auth/realms/cnss-v360/',
    authRedirectUrl: window.location.origin + '/auth-callback',
    authPostLogoutRedirectUri: window.location.origin,
    authClientId: 'pa-app',
};
