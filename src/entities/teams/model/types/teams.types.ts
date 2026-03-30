export type TeamId = string;

export interface TeamInfo {
    id: TeamId;
    name: string;
    memberCount: number;
}

export interface TeamRegistration {
    teamId: TeamId;
    team: TeamInfo;
    joinedAt: string;
}