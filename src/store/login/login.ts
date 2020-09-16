export interface LoginStateType {
    token: string, // 用户token
}

export const LoginMutations = {
    changeToken: "changeToken",
}

const state: LoginStateType = {
    token: 'zlj'
};

const mutations = {
    [LoginMutations.changeToken]: (state: LoginStateType, data: string) => {
        
        state.token = data;
    }
};

const actions = {
    [LoginMutations.changeToken]: (action: StoreAction.StoreActionType, data: string) => {
        action.commit(LoginMutations.changeToken, data)
    }
};

export default {
    namespaced: true,
    state, 
    mutations, 
    actions
}