<template>
    <Card style="width: 35rem; overflow: hidden">
        <template #header>
            <div class="flex justify-center p-4">
                <LocalPicture
                    height="109"
                    src="/logo_claim_icon_colored_seperator_colored.png"
                    width="300"
                />
            </div>
            <Divider class="px-5"/>
        </template>

        <template #content>
            <div class="flex flex-col items-center space-y-4">
                <FloatLabel
                    class="w-full max-w-xs"
                    variant="in"
                >
                    <InputText
                        id="username"
                        class="w-full"
                    />
                    <label for="username">{{ $t('username') }}</label>
                </FloatLabel>

                <FloatLabel
                    class="w-full max-w-xs"
                    variant="in"
                >
                    <Password
                        id="password"
                        :feedback="false"
                        :toggle-mask="true"
                        class="w-full"
                        input-class="w-full"
                    />
                    <label for="password">{{ $t('password') }}</label>
                </FloatLabel>
            </div>
        </template>
        <template #footer>
            <div class="mt-1 flex justify-center gap-4">
                <Button
                    class="w-1/3"
                    label="Login"
                />
            </div>
        </template>
    </Card>
</template>

<script setup lang="ts">
definePageMeta({auth: false});

defineI18nRoute({
    paths: {
        en: '/login',
        de: '/anmelden',
    },
});
</script>

<style scoped>

</style>
