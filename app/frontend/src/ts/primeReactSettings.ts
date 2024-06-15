'use client';

import Tailwind from 'primereact/passthrough/tailwind';
import { twMerge } from 'tailwind-merge';

const primeVueSettings 
    = {
        ripple: true,
        unstyled: true,
        pt: Tailwind,
        ptOptions: {
            mergeProps: true,
            mergeSections: true,
            classNameMergeFunction: twMerge,
        },
    };

export default primeVueSettings;
