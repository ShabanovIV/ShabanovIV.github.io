import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './CategoriesPage.module.scss';
import Logo from '../../components/Logo/Logo';
import RenderListObserver from '../../components/RenderList/RenderListObserver';
import { IRenderItem } from '../../components/RenderList/RenderList';
import {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} from '../../api/categories/categoryApi';
import { CategoryProps } from '../../components/Category/Category';
import { TextButton } from '../../components/ui/TextButton/TextButton';
import { ContentModal } from '../../components/ContentModal/ContentModal';
import CategoryForm from '../../forms/CategoryForm/CategoryForm';

const PAGE_SIZE = 10;

const CategoriesPage: React.FC = () => {
  const loadedPages = useRef<number[]>([]);
  const [categoryEdit, setCategoryEdit] = useState<CategoryProps | null>(null);
  const [isCreateCategory, setIsCreateCategory] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [categories, setCategories] = useState<IRenderItem[]>([]);
  const [
    createCategory,
    { isLoading: isCreating, isError: isCreatingError, error: creatingError, reset: resetCreate },
  ] = useCreateCategoryMutation();
  const [
    updateCategory,
    { isLoading: isUpdating, isError: isUpdatingError, error: updatingError, reset: resetUpdate },
  ] = useUpdateCategoryMutation();
  const { data, isFetching, isLoading, isError, refetch } = useGetCategoriesQuery(
    { pagination: { pageSize: PAGE_SIZE, pageNumber: pageNumber } },
    {
      // Пропуск для 0 и для уже загруженных (первую страницу может повторно, из-за React.StrickMode)
      skip: pageNumber === 0 || loadedPages.current.includes(pageNumber),
    }
  );

  const handleLastItem = useCallback(() => {
    if (!hasMore || isFetching) return;
    setPageNumber((prev) => {
      return prev + 1;
    });
  }, [hasMore, isFetching]);

  const handleShowForm = useCallback((category: CategoryProps) => {
    setCategoryEdit(category);
  }, []);

  const handleCreateCategory = () => {
    setIsCreateCategory(true);
  };

  const handleSubmitForm = async (category: CategoryProps) => {
    try {
      if (isCreateCategory) {
        const result = await createCategory({ name: category.name, photo: category.photo }).unwrap();
        setCategories((prev) => [...prev, new CategoryProps(result.id, result.name, handleShowForm, result.photo)]);
        setIsCreateCategory(false);
        return;
      }
      const result = await updateCategory({ id: category.id, name: category.name, photo: category.photo }).unwrap();
      category.name = result.name;
      category.photo = result.photo;
      setCategories((prev) => [...prev]);
    } catch (error) {
      console.error(error);
    } finally {
      setCategoryEdit(null);
    }
  };

  useEffect(() => {
    if (isLoading && isFetching) {
      setCategories([]);
    }
  }, [isFetching, isLoading]);

  useEffect(() => {
    if (
      data &&
      data.data.length > 0 &&
      !loadedPages.current.includes(pageNumber) &&
      data.pagination.pageNumber === pageNumber
    ) {
      loadedPages.current.push(pageNumber);
      setCategories((prev) => [
        ...prev,
        ...data.data.map((category) => new CategoryProps(category.id, category.name, handleShowForm, category.photo)),
      ]);
    } else if (data && data.data.length < PAGE_SIZE) {
      setHasMore(false);
    }
  }, [data, handleShowForm, pageNumber]);

  return (
    <div className={styles.container}>
      <ContentModal visible={categoryEdit !== null || isCreateCategory}>
        <CategoryForm
          category={categoryEdit ?? undefined}
          onClose={() => {
            setIsCreateCategory(false);
            setCategoryEdit(null);
          }}
          onSubmit={handleSubmitForm}
        />
      </ContentModal>
      <h1 className={styles.title}>Категории</h1>
      <TextButton text="Добавить категорию" handleClick={handleCreateCategory} />
      <RenderListObserver isGrid={true} items={categories} onLastItem={handleLastItem} />
      <ContentModal visible={isUpdating || isCreating}>
        <Logo /> {isUpdating ? 'Обновление' : 'Добавление'} категории...
      </ContentModal>
      <ContentModal
        visible={isUpdatingError || isCreatingError}
        showCloseButton={true}
        handleClose={() => {
          if (isUpdatingError) resetUpdate();
          else resetCreate();
        }}
      >
        <div>{JSON.stringify(isUpdatingError ? updatingError : creatingError)}</div>
      </ContentModal>
      {isError && <div className={styles.error}>Во время загрузки произошла ошибка.</div>}
      {isError && hasMore && (
        <TextButton
          text="Повторить попытку"
          handleClick={() => {
            refetch();
          }}
        />
      )}
      {isFetching && (
        <div>
          <Logo />
          <p>{`Загрузка категорий ${categories.length}/${data?.pagination.total ?? 'неизвестно'}...`}</p>
        </div>
      )}
      {!hasMore && <p className={styles.end}>Все категории загружены</p>}
    </div>
  );
};

export default CategoriesPage;
