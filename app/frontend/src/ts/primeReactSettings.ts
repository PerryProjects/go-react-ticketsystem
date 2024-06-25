'use client';

import {APIOptions} from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import { twMerge } from 'tailwind-merge';

const primeReactSettings: APIOptions = {
    ripple: true,
    unstyled: true,
    pt: Tailwind,
    ptOptions: {
        mergeProps: true,
        mergeSections: true,
        classNameMergeFunction: twMerge,
    },
};

export default primeReactSettings;
