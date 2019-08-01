import {GET_CITY} from "./mutation-types"

export default {
  [GET_CITY](state,value) {
    state.city=value;
  }
}
