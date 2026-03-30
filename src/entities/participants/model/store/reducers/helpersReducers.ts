import { SerializedError } from "@reduxjs/toolkit";
import { ParticipantsState } from "../participantsSlice";

interface RejectedAction {
  payload?: unknown;
  error: SerializedError;
}

export const pendingReducer = (
  state: Pick<ParticipantsState, "loading" | "error">,
) => {
  state.loading = true;
  state.error = null;
};

export const rejectedReducer = (
  state: Pick<ParticipantsState, "loading" | "error">,
  action: RejectedAction,
) => {
  state.loading = false;

  state.error =
    (typeof action.payload === "string" ? action.payload : null) ||
    action.error?.message ||
    "Something went wrong";
};
