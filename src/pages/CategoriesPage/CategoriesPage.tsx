import React, { useState, useEffect, useCallback } from 'react';
import styles from './CategoriesPage.module.scss';
import Logo from '../../components/Logo/Logo';
import RenderListObserver from '../../components/RenderList/RenderListObserver';
import { IRenderItem } from '../../components/RenderList/RenderList';
import { useGetCategoriesQuery } from '../../api/categories/categoryApi';
import { CategoryProps } from '../../components/Category/Category';
import { TextButton } from '../../components/ui/TextButton/TextButton';

const PAGE_SIZE = 10;

const CategoriesPage: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { data, isFetching, isLoading, isError, refetch } = useGetCategoriesQuery(
    { pagination: { pageSize: PAGE_SIZE, pageNumber: pageNumber } },
    { skip: pageNumber === 0 }
  );
  const [categories, setCategories] = useState<IRenderItem[]>([]);

  const handleLastItem = useCallback(() => {
    if (!hasMore || isFetching) return;
    setPageNumber((prev) => {
      return prev + 1;
    });
  }, [hasMore, isFetching]);

  useEffect(() => {
    if (isLoading && isFetching) {
      setCategories([]);
    }
  }, [isFetching, isLoading]);

  useEffect(() => {
    if (data && data.data.length > 0) {
      setCategories((prev) => [
        ...prev,
        ...data.data.map((category) => new CategoryProps(category.id, category.name, category.photo)),
      ]);
    } else if (data && data.data.length < PAGE_SIZE) {
      setHasMore(false);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Категории</h1>
      <RenderListObserver isGrid={true} items={categories} onLastItem={handleLastItem} />
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
