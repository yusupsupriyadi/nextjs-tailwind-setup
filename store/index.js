import axios from "axios";
import { selector, atom } from "recoil";

const theme = atom({
    key: "switch-theme",
    default : 'light'
})

// Get Data USE RECOIL
const dataEntry = selector({
    key: "data-Entry",
    get: async () => {
        let entry = null;

        try {
            let { data } = await axios.get(`https://admin-ygalery.herokuapp.com/entries/1`)
            entry = {entry : data}
        } catch (e) {
            entry = {entry : e.message}
        }

        return entry;
    }
})

export { dataEntry, theme }