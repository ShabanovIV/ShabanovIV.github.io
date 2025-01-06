import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './ProfileForm.module.scss';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useUpdateProfileMutation, useChangePasswordMutation, useGetProfileQuery } from '../../api/profileApi';
import type { ServerErrors } from '../../api/models';
import { ContentModal } from '../../components/ContentModal/ContentModal';
import { updProfile } from '../../stores/authSlice';

interface ChangePasswordInputs {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

const ProfileForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm<ChangePasswordInputs>();
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { refetch: getProfile } = useGetProfileQuery();
  const [updateProfile, { isLoading: isUpdatingName }] = useUpdateProfileMutation();
  const [changePassword, { isLoading: isChangingPassword, isError, error }] = useChangePasswordMutation();
  const [errorMessages, setErrorMessages] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState<string>('');
  const [name, setName] = useState(auth.profile?.name || '');

  const newPassword = watch('newPassword');

  const updateError = (e: unknown) => {
    const serverError = e as { data: ServerErrors };
    const errors = serverError?.data?.errors;

    if (errors) {
      setErrorMessages(errors.map((err) => err.message).join('\n'));
    } else {
      const unkEr = e as { error: string };
      setErrorMessages(unkEr?.error ?? 'Неизвестная ошибка.');
    }
  };

  const handleNameSubmit = async () => {
    setErrorMessages(null);
    try {
      const profile = await updateProfile({ name }).unwrap();
      dispatch(updProfile(profile));
      setModalMessage('Имя успешно обновлено!');
      setModalVisible(true);
    } catch (e) {
      updateError(e);
    }
  };

  const onSubmit = async (data: ChangePasswordInputs) => {
    setErrorMessages(null);
    if (data.newPassword !== data.confirmNewPassword) {
      setError('confirmNewPassword', { type: 'manual', message: 'Пароли не совпадают' });
      return;
    }
    try {
      await changePassword({ password: data.currentPassword, newPassword: data.newPassword }).unwrap();
      const profileRes = await getProfile();
      dispatch(updProfile(profileRes?.data ?? null)); // На всякий случай, хоть и меняется только пароль
      setModalMessage('Пароль успешно изменён!');
      setModalVisible(true);
    } catch (e) {
      updateError(e);
    }
  };

  return (
    <div className={styles.container}>
      <ContentModal visible={modalVisible} showCloseButton={true} handleClose={() => setModalVisible(false)}>
        {modalMessage}
      </ContentModal>

      <form autoComplete="off" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>Редактирование профиля</h1>

        {/* Name */}
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>
            Имя
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
          <button type="button" className={styles.button} onClick={handleNameSubmit} disabled={isUpdatingName}>
            {isUpdatingName ? 'Сохранение...' : 'Сохранить имя'}
          </button>
        </div>

        {/* Email */}
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Почта
          </label>
          <input id="email" type="email" defaultValue={auth.profile?.email} className={styles.input} disabled />
        </div>

        {/* Current Password */}
        <div className={styles.field}>
          <label htmlFor="currentPassword" className={styles.label}>
            Текущий пароль
          </label>
          <input
            id="currentPassword"
            type="password"
            autoComplete="new-password"
            className={styles.input}
            {...register('currentPassword', { required: 'Введите текущий пароль' })}
          />
          {errors.currentPassword && <p className={styles.error}>{errors.currentPassword.message}</p>}
        </div>

        {/* New Password */}
        <div className={styles.field}>
          <label htmlFor="newPassword" className={styles.label}>
            Новый пароль
          </label>
          <input
            id="newPassword"
            type="password"
            autoComplete="new-password"
            className={styles.input}
            {...register('newPassword', {
              required: 'Введите новый пароль',
              minLength: { value: 6, message: 'Пароль должен содержать минимум 6 символов' },
            })}
          />
          {errors.newPassword && <p className={styles.error}>{errors.newPassword.message}</p>}
        </div>

        {/* Confirm New Password */}
        <div className={styles.field}>
          <label htmlFor="confirmNewPassword" className={styles.label}>
            Подтвердите новый пароль
          </label>
          <input
            id="confirmNewPassword"
            type="password"
            autoComplete="new-password"
            className={styles.input}
            {...register('confirmNewPassword', {
              required: 'Подтвердите новый пароль',
              validate: (value) => value === newPassword || 'Пароли не совпадают',
            })}
          />
          {errors.confirmNewPassword && <p className={styles.error}>{errors.confirmNewPassword.message}</p>}
        </div>

        <button type="submit" className={styles.button} disabled={isChangingPassword}>
          {isChangingPassword ? 'Сохранение...' : 'Изменить пароль'}
        </button>

        {errorMessages && <p className={styles.error}>{errorMessages}</p>}
        {isError && !error && <p className={styles.error}>Неизвестная ошибка при изменении пароля</p>}
      </form>
    </div>
  );
};

export default ProfileForm;
