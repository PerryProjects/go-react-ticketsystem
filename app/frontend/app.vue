<template>
    <div class="flex min-h-screen items-center justify-center bg-surface-50 p-10 dark:bg-surface-950">
        <div class="flex min-h-screen items-center justify-center p-10">
            <section class="flex max-w-3xl flex-col gap-8 rounded-xl bg-white p-10 dark:bg-surface-900">
                <h1 class="text-center text-4xl font-bold text-black dark:text-white">
                    Tailwind CSS + PrimeVue
                </h1>
                <div class="flex gap-4">
                    <InputText
                        v-model="text"
                        maxlength="20"
                        fluid
                    />
                    <Button
                        label="Submit"
                        class="min-w-20"
                        :disabled="!text"
                        severity="error"
                        @click="greet"
                    />
                </div>
                <div class="h-8 text-center text-xl text-primary">
                    {{ msg }}
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const text = ref(null);
const msg = ref(null);

function greet() {
    msg.value = 'Hello ' + text.value;
}
</script>
