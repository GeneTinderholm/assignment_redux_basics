import {
	VIEW_ACCOUNT,
	DEPOSIT_MONEY,
	WITHDRAW_MONEY,
	TRANSFER_MONEY,
	TRANSACTION_FILTER
} from "./actions";

const initialState = {
	accounts: [
		{ id: 1, balance: 10, transactions: [] },
		{ id: 2, balance: 1000, transactions: [] },
		{ id: 3, balance: 920022, transactions: [] }
	],
	display: []
};

function cash(state = initialState, action) {
	switch (action.type) {
		case VIEW_ACCOUNT:
			return {
				...state,
				display: accounts.map(account => {
					if (account.id === action.data.id) {
						return;
						account;
					}
				})
			};
		case DEPOSIT_MONEY:
		return {
			..state,
			accounts: accounts.map(account => {
				if (account.id === action.data.id){
					return {
						...account, balance: account.balance + action.data.amount
					} 
					} else {
						return account;

					}

			})


		}
	}
}
