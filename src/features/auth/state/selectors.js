export const selectIsAuthLoading = state => state.auth.isAuthLoading;
export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => !!state.auth.user;
export const selectUserName = state => state.auth.user?.name;
export const selectUserAvatarURL = state => state.auth.user?.avatarURL;
export const selectToken = state => state.auth.token;
export const selectTotalBalance = state => state.auth.user?.totalBalance;
export const selectUserCreatedAt = state => state.auth.user?.createdAt;
