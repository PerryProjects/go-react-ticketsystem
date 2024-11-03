<template>
    <Card style="width: 35rem; overflow: hidden">
        <template #header>
            <div class="flex justify-center p-4">
                <LocalPicture
                    height="109"
                    src="images/logo_claim_icon_colored_seperator_colored.png"
                    width="300"
                />
            </div>
            <Divider class="px-5"/>
        </template>

        <template #content>
            <div
                class="flex flex-col items-center space-y-4"
            >
                <div
                    class="w-full px-24"
                >
                    <FloatLabel
                        class="w-full"
                        variant="in"
                    >
                        <InputText
                            v-model="username"
                            :invalid="!!errors.username"
                            class="w-full"
                            v-bind="usernameProps"
                        />
                        <label for="username">{{ $t('username') }}</label>
                    </FloatLabel>
                    <span class="text-sm text-red-500">{{ errors.username }}</span>
                </div>
                <div
                    class="w-full px-24"
                >
                    <FloatLabel
                        class="w-full"
                        variant="in"
                    >
                        <Password
                            v-model="password"
                            :feedback="false"
                            :invalid="!!errors.username"
                            :toggle-mask="true"
                            class="w-full"
                            input-class="w-full"
                            name="password"
                            v-bind="passwordProps"
                        />
                        <label for="password">{{ $t('password') }}</label>
                    </FloatLabel>
                    <span class="text-sm text-red-500">{{ errors.password }}</span>
                </div>
            </div>
        </template>
        <template #footer>
            <div class="mt-1 flex justify-center gap-4">
                <Button
                    form="login-form"
                    icon="pi pi-sign-in"
                    class="w-1/3"
                    severity="primary"
                    type="submit"
                    @click="submit"
                >
                    <div class="flex items-baseline">
                     <span
                         :class="[isLoggedIn ? 'pi-lock-open' : 'pi-lock', { 'animate-wiggle': isLoginFailed }]"
                         class="pi"
                     />
                        <span class="pl-2">Login</span>
                    </div>
                </Button>
            </div>
        </template>
    </Card>
</template>

<script setup lang="ts">
import {$apiFetch} from '#imports';
import * as Yup from 'yup';

definePageMeta({auth: false});

defineI18nRoute({
    paths: {
        en: '/login',
        de: '/anmelden',
    },
});

const {
    t,
} = useI18n();
const toast = useToast();

const {
    defineField,
    errors,
    handleSubmit,
} = useForm({
    validationSchema: Yup.object().shape({
        username: Yup.string().required(({path}) => t('field_required', {field: t(path)})),
        password: Yup.string().required(({path}) => t('field_required', {field: t(path)})),
    }),
});

const [username, usernameProps] = defineField('username');
const [password, passwordProps] = defineField('password');

const isLoggedIn = ref(false);
const isLoginFailed = ref(false);

const submit = handleSubmit(async (values) => {
    try {
        await $apiFetch('/login', {
            method: 'POST',
            body: JSON.stringify(values),
        });
    } catch (e: any) {
        toast.add({
            severity: 'error',
            summary: t('login_failed'),
            detail: e.message,
        });
    }
}, () => {
    isLoginFailed.value = true;
    setTimeout(() => {
        isLoginFailed.value = false;
    }, 1000);
});
</script>

<style scoped>

</style>
