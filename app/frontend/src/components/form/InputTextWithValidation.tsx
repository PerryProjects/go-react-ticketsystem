'use client';

import {InputText} from 'primereact/inputtext';
import {useId} from 'react';
import {
    Controller,
    FieldPath,
    FieldValues,
    UseControllerProps,
} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';

interface InputTextWithValidationProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> extends UseControllerProps<TFieldValues, TName> {
    errors: any
    label: string
}

export function FormInputTextWithValidation<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
    name,
    defaultValue,
    control,
    errors,
    rules,
    label,
}: InputTextWithValidationProps<TFieldValues, TName>) {
    const id = useId();

    return (
        <div className="flex flex-col">
            <label htmlFor={id}>{label}</label>
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                rules={rules}
                render={({field}) => (
                    <InputText id={id} {...field} />
                )}
            />
            <ErrorMessage
                errors={errors}
                name={name}
                render={({message}) => <span className="text-red-500 text-sm">{message}</span>}
            />
        </div>
    );
}
