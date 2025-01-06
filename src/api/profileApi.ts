import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IProfileResult, UpdateProfileBody, ChangePasswordBody, ChangePasswordResult } from './models';
import { getToken } from '../stores/authSlice';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://19429ba06ff2.vps.myjino.ru/api',
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Получение профиля
    getProfile: builder.query<IProfileResult, void>({
      query: () => '/profile',
    }),

    // Обновление профиля
    updateProfile: builder.mutation<IProfileResult, UpdateProfileBody>({
      query: (body) => ({
        url: '/profile',
        method: 'PATCH',
        body,
      }),
    }),

    // Смена пароля
    changePassword: builder.mutation<ChangePasswordResult, ChangePasswordBody>({
      query: (body) => ({
        url: '/profile/change-password',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation, useChangePasswordMutation } = profileApi;
