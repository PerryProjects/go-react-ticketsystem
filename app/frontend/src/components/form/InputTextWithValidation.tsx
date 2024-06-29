'use client';

import {InputText} from 'primereact/inputtext';
import {
    Controller,
} from 'react-hook-form';

interface InputTextWithValidationProps {
    id: string
    name: string
    defaultValue: any
    control: any
    errors: any
    rules: any
    label: string
}

export function FormInputTextWithValidation({
    id,
    name,
    defaultValue,
    control,
    errors,
    rules,
    label,
}: InputTextWithValidationProps) {
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
            {errors[name] !== undefined && <span className="p-error">{errors[name].message}</span>}
        </div>
    );
}
