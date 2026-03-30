import { ParticipantsState } from "../participantsSlice";

export const deleteParticepantReducer = (state: ParticipantsState) => {
    state.loading = false;
    state.error = null;
}