import {CHANGE_LANG} from "@/store/config/types";

const changeLang = ({commit}, data) => {
    commit(CHANGE_LANG, data)
}

export default {
    changeLang
}