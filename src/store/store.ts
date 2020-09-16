import { createStore } from "vuex";

import login from "./login/login";

type LocalType = "get" | "set";

export const localStorageSetting = (type: LocalType): any => {
    console.log(type);
}

export default createStore({
    modules: {
        login
    }
});