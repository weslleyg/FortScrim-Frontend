import decode from 'jwt-decode';

export const TOKEN_KEY = '@fortScrim-Token';
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const isAdmin = (payload) => {
	payload = decode(getToken());
	if (payload.roles.includes('admin')) {
		return true;
	}
	return false;
};
export const login = (token) => {
	localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
	localStorage.removeItem(TOKEN_KEY);
};
