'use client';

import {useId} from 'react';
import {
    Controller,
    FieldPath,
    FieldValues,
    UseControllerProps,
} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import {Dropdown} from 'primereact/dropdown';

interface InputDropdownWithValidationProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> extends UseControllerProps<TFieldValues, TName> {
    errors: any
    label: string
    optionValue?: string
    optionLabel?: string
    options: any[]
    placeholder?: string
    highlightOnSelect?: boolean
}

export function FormDropdownWithValidation<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
    name,
    defaultValue,
    control,
    errors,
    rules,
    label,
    options,
    optionLabel = 'label',
    optionValue = 'value',
    placeholder,
    highlightOnSelect = true,
}: InputDropdownWithValidationProps<TFieldValues, TName>) {
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
                    <Dropdown
                        id={id}
                        {...field}
                        options={options}
                        optionLabel={optionLabel}
                        optionValue={optionValue}
                        placeholder={placeholder}
                        highlightOnSelect={highlightOnSelect}
                        pt={{
                            root: {
                                className: '!w-full',
                            },
                        }}
                    />
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
