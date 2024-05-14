'use client';
import { Button } from 'primereact/button';
import { useState } from 'react';

export default function Page() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <Button
                onClick={() => setCount(count + 1)}
                label="Click me"
            >
            </Button>
        </div>
    );
}
