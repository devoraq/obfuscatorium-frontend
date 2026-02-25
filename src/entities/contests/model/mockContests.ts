import { Contest } from './contestSlice';

export const mockContests: Contest[] = [
  { 
    id: '1',
    title: 'AI Innovation Hack 2026',
    month: 'FEB',
    day: 28,
    location: 'Online / Moscow',
    prize: '500,000 ₽',
    participantsCount: 124,
    status: 'upcoming',
    isParticipating: true,
    description: 'Создайте инновационное решение на базе генеративного ИИ за 48 часов.'
  },
  {
    id: '2',
    title: 'FinTech Challenge',
    month: 'MAR',
    day: 15,
    location: 'Saint Petersburg',
    prize: '1,000,000 ₽',
    participantsCount: 89,
    status: 'ongoing',
    isParticipating: false,
    description: 'Разработка современных финансовых инструментов для малого бизнеса.'
  },
  {
    id: '3',
    title: 'HealthTech Hack',
    month: 'JUN',
    day: 20,
    location: 'Online',
    prize: '400,000 ₽',
    participantsCount: 45,
    status: 'upcoming',
    isParticipating: false,
    description: 'Технологии для улучшения качества жизни и медицины.'
  }
];

export const mockContestsResponse = {
  contests: mockContests,
  nextPageToken: ''
};