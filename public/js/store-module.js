import { reactive } from "./petite-vue-module.js";
const initialState = {
    userName: '',
    isLoggedIn: false,
};
const store = reactive({
    appState: {...initialState},
    setState(val) {
        console.log('setState...')
        this.appState = {...this.appState, ...val};
        localStorage.setItem("appstate", JSON.stringify(this.appState));
    },
    getState() {
        console.log('getState...')
        this.appState = JSON.parse(localStorage.getItem("appstate")) || initialState;
    }
});
export default store;