import {CHANGE_LANG} from "@/store/config/types";

export default {
    [CHANGE_LANG](state, data) {
        state.lang = data
    }
}