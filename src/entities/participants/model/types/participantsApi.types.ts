import { TeamRegistration } from "@/entities/teams/model/types/teams.types";
import { Participant } from "./participiant.types";

export type ContestId = string;

export interface ListParticipantsResponse {
  participants?: Participant[];
  teams?: TeamRegistration[];
  nextPageToken?: string;
}

export interface AddParticipantResponse {
  participant: Participant;
  teamRegistration: TeamRegistration;
}
