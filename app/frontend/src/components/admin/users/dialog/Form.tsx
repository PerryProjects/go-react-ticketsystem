'use client';

import {
    useForm,
} from 'react-hook-form';
import {
    forwardRef,
    useImperativeHandle,
} from 'react';
import {t} from 'i18next';
import {User} from '@/types/user';
import {FormInputTextWithValidation} from '@/components/form/InputTextWithValidation';

interface AdminUserDialogFormProps {
    user: User
    onSubmit: (data: User) => void
}

export const AdminUserDialogForm = forwardRef<HTMLFormElement | null, AdminUserDialogFormProps>(
    ({
        user,
        onSubmit,
    }, ref) => {
        const {
            control,
            handleSubmit,
            formState: {errors},
        } = useForm<User>({
            defaultValues: user,
        });

        useImperativeHandle(ref, () => ({
            submit: handleSubmit(onSubmit),
        } as any));

        return (
            <form ref={ref} className="grid grid-cols-2 gap-4">
                <FormInputTextWithValidation label={t('firstName')} id="firstName" name="firstName" defaultValue={user.firstName} control={control} errors={errors} rules={{required: 'First Name is required'}} />
                <FormInputTextWithValidation label={t('lastName')} id="lastName" name="lastName" defaultValue={user.lastName} control={control} errors={errors} rules={{required: 'Last Name is required'}} />
                <FormInputTextWithValidation label={t('username')} id="username" name="username" defaultValue={user.username} control={control} errors={errors} rules={{required: 'Username is required'}} />
                <FormInputTextWithValidation label={t('password')} id="password" name="password" defaultValue={user.password} control={control} errors={errors} rules={{required: user.id ? false : 'Password is required'}} />
                <FormInputTextWithValidation
                    label={t('email')}
                    id="email"
                    name="email"
                    defaultValue={user.email}
                    control={control}
                    errors={errors}
                    rules={{
                        required: 'Email is required',
                        pattern: {
                            value: /^\S[^\s@]*@\S+$/,
                            message: 'Invalid email address',
                        },
                    }}
                />
                <FormInputTextWithValidation label={t('role')} id="role" name="role" defaultValue={user.role} control={control} errors={errors} rules={{required: 'Role is required'}} />
            </form>
        );
    }
);

AdminUserDialogForm.displayName = 'AdminUserDialogForm';
