export const selectIsAuthLoading = state => state.auth.isAuthLoading;
export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => !!state.auth.user;
export const selectUserName = state => state.auth.user?.name;
export const selectUserAvatarUrl = state => state.auth.user?.avatarUrl;
export const selectToken = state => state.auth.token;
