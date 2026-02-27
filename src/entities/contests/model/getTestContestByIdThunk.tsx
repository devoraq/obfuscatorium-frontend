import { createAsyncThunk } from "@reduxjs/toolkit";
import { setEvent } from "./contestSlice";
import { mockContests } from "./mockContests";
import {Contest} from './contestSlice'


export const getContestByIdThunk = createAsyncThunk<
  { contest: Contest },
  string,
  { rejectValue: string }
>("contests/getById", async (id, { rejectWithValue, dispatch }) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100));

    const contest = mockContests.find((c) => c.id === id);

    if (!contest) {
      throw new Error("Конкурс не найден");
    }

    dispatch(setEvent({ contest }));
    return { contest };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Unknown error");
  }
});
