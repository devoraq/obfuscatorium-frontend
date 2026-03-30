import { PayloadAction } from "@reduxjs/toolkit";
import { ParticipantsState } from "../participantsSlice";
import { AddParticipantResponse } from "../../types/participantsApi.types";

export const addParticipantReducer = (state: ParticipantsState, action: PayloadAction<AddParticipantResponse>) => {
    state.loading = false;
    state.error = null;
    const { participant, teamRegistration } = action.payload;

    if (participant) {
        const exists = state.participants.find(p => p.userId === participant.userId);
        if (!exists) {
            state.participants.unshift(participant);
        }
    }

    if (teamRegistration) {
        const exists = state.teams.find(t => t.teamId === teamRegistration.teamId);
        if (!exists) {
            state.teams.unshift(teamRegistration);
        }
    }
};