<template>
    <div
        v-if="!isUserLoggedIn"
        class="h-dvh w-dvw bg-gradient-to-b from-black via-purple-900 to-blue-900"
    >
        <div class="absolute right-12 top-12">
            <ChangeLocaleMenu/>
        </div>
        <div class="flex h-dvh items-center justify-center">
            <NuxtPage/>
        </div>
    </div>
    <!--    <Menubar
            :model="items"
            class="rounded-none py-4"
        >
            <template
                v-if="isUserLoggedIn"
                #start
            >
                <LocalPicture
                    alt="logo"
                    class="ml-2 h-auto w-60"
                    priority
                    src="colored_logo_title.webp"
                    width="250"
                />
            </template>
            <template #end>
                <div>

                </div>
            </template>
        </Menubar> -->
</template>

<script setup lang="ts">
const {
    auth,
    isUserLoggedIn,
} = useLogin();

console.log(auth.status.value);

function useLogin() {
    const auth = useAuth();

    const isUserLoggedIn = computed(() => auth.status.value === 'authenticated');

    return {
        auth,
        isUserLoggedIn,
    };
}

// const items = ref([]);
</script>

<style scoped>

</style>
