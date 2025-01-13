// token не добавляется в заголовок запроса, для загрузки всех категорий (для проверки списка категорий)
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICategory, ICategoryResult } from './models/ICategoryResult';
import { getToken } from '../common/localStorageHelper';
import { IFiltersArg } from './models/IFiltersArg';
import { ICreateCategoryBody } from './models/ICreateCategoryBody';
import { IUpdateCategoryBody } from './models/IUpdateCategoryBody';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
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
          params,
        };
      },
    }),
    createCategory: builder.mutation<ICategory, ICreateCategoryBody>({
      query: (body) => ({
        url: '/categories',
        method: 'POST',
        body,
      }),
    }),
    updateCategory: builder.mutation<ICategory, IUpdateCategoryBody>({
      query: ({ id, name, photo }) => ({
        url: `/categories/${id}`,
        method: 'PATCH',
        body: { name, photo },
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useCreateCategoryMutation, useUpdateCategoryMutation } = categoryApi;
