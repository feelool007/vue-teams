import {
  CHANGE_GRAPH_STATUS,
  SIGNIN_GRAPH_SUCCESS,
  SIGNIN_GRAPH_FAILED,
  SIGNOUT_GRAPH_SUCCESS,
  SIGNOUT_GRAPH_FAILED
} from "./types";
import { PresenceAvailabilities, MicrosoftStatus } from "../../../utils/enums";

export default {
  [CHANGE_GRAPH_STATUS]: (state, payload) => {
    if (Object.values(MicrosoftStatus).includes(payload))
      state.status = payload;
  },
  [SIGNIN_GRAPH_SUCCESS]: (state, payload) => {
    state.msal.app = payload[0];
    state.graph.client = payload[1];
    if (payload.length >= 3) {
      state.me = payload[2];
      state.presences[state.me.id] = PresenceAvailabilities.PresenceUnknown;
    }
  },
  [SIGNIN_GRAPH_FAILED]: (state, error) => {
    state.error = error;
  },
  [SIGNOUT_GRAPH_SUCCESS]: state => {
    state.msal.app = undefined;
    state.graph.client = undefined;
  },
  [SIGNOUT_GRAPH_FAILED]: (state, error) => {
    state.error = error;
  }
};
