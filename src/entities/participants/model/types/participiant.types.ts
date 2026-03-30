import { UserInfo } from "@/entities/user/model/types/user.types";

export interface Participant {
  userId: string;
  user: UserInfo;
  joinedAt: string;
}
