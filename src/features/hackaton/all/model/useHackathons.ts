'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getContestsThunk } from '@/entities/contests/model/getTestContestsThunk';

export const useHackathons = () => {
  const dispatch = useAppDispatch();
  const { events } = useAppSelector((state) => state.contest);

  useEffect(() => {
    dispatch(getContestsThunk());
  }, [dispatch]);

  // фильтрация по категориям
  const myHackathons = events.filter(event => event.isParticipating === true);
  const activeHackathons = events.filter(event => event.status === 'ongoing' && !event.isParticipating);
  const availableHackathons = events.filter(event => event.status === 'upcoming' && !event.isParticipating);

  return {
    myHackathons,
    activeHackathons,
    availableHackathons,
  };
};