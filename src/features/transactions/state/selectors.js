export const selectTransactions = state => state.transactions?.items;
export const selectCurrentPage = state => state.transactions?.currentPage;
export const selectTotalPages = state => state.transactions?.totalPages;
export const selectIsTransactionsLoading = state =>
  state.transactions?.isLoading;
export const selectError = state => state.transactions?.error;
