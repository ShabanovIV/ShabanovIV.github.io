// token не добавляется в заголовок запроса, для загрузки всех категорий (для проверки списка категорий)
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICategory, ICategoryResult } from './models/ICategoryResult';
// import { getToken } from '../common/localStorageHelper';
import { IFiltersArg } from './models/IFiltersArg';
import { IAddCategoryBody } from './models/ICreateCategoryBody';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://19429ba06ff2.vps.myjino.ru/api',
    prepareHeaders: (headers) => {
      // const token = getToken();
      // if (token) {
      //   headers.set('Authorization', `Bearer ${token}`);
      // }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<ICategoryResult, IFiltersArg>({
      query: (filters: IFiltersArg) => {
        const params = new URLSearchParams();

        Object.entries(filters).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            params.append(key, typeof value === 'object' ? JSON.stringify(value) : String(value));
          }
        });

        return {
          url: '/categories',
          method: 'GET',
          params, // Передаём параметры здесь
        };
      },
    }),
    addCategory: builder.mutation<ICategory, IAddCategoryBody>({
      query: (body) => ({
        url: '/categories',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useAddCategoryMutation } = categoryApi;
