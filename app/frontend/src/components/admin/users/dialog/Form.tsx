import {
    useForm,
} from 'react-hook-form';
import {
    forwardRef,
    useImperativeHandle,
} from 'react';
import {
    TFunction,
} from 'i18next';
import {User} from '@/types/user';
import {FormInputTextWithValidation} from '@/components/form/InputTextWithValidation';

interface AdminUserDialogFormProps {
    user: User
    onSubmit: (data: User) => void
    t: TFunction
}

export const AdminUserDialogForm = forwardRef<HTMLFormElement | null, AdminUserDialogFormProps>(
    ({
        user,
        onSubmit,
        t,
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
            <form className="grid grid-cols-2 gap-4">
                <FormInputTextWithValidation label={t('firstName')} name="firstName" defaultValue={user.firstName} control={control} errors={errors} rules={{required: t('validation:required', {field: t('firstName')})}} />
                <FormInputTextWithValidation label={t('lastName')} name="lastName" defaultValue={user.lastName} control={control} errors={errors} rules={{required: t('validation:required', {field: t('lastName')})}} />
                <FormInputTextWithValidation label={t('username')} name="username" defaultValue={user.username} control={control} errors={errors} rules={{required: t('validation:required', {field: t('username')})}} />
                <FormInputTextWithValidation label={t('password')} name="password" defaultValue={user.password} control={control} errors={errors} rules={{required: user.id ? false : t('validation:required', {field: t('password')})}} />
                <FormInputTextWithValidation
                    label={t('email')}
                    name="email"
                    defaultValue={user.email}
                    control={control}
                    errors={errors}
                    rules={{
                        required: t('validation:required', {field: t('email')}),
                        pattern: {
                            value: /^\S[^\s@]*@\S+$/,
                            message: 'Invalid email address',
                        },
                    }}
                />
                <FormInputTextWithValidation label={t('role')} name="role" defaultValue={user.role} control={control} errors={errors} rules={{required: t('validation:required', {field: t('role')})}} />
            </form>
        );
    }
);

AdminUserDialogForm.displayName = 'AdminUserDialogForm';
