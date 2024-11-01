<template>
    <div class="grid h-screen grid-rows-[auto,1fr]">
        <Menubar
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
                    <Button
                        :label="$t(currentLocale!.name as string)"
                        aria-controls="overlay_menu"
                        aria-haspopup="true"
                        class="w-32"
                        icon="pi pi-angle-down"
                        icon-pos="right"
                        type="button"
                        @click="toggle"
                    />
                    <TieredMenu
                        id="overlay_menu"
                        ref="menu"
                        :model="availableLocales"
                        popup
                    />
                </div>
            </template>
        </Menubar>
        <div
            v-if="!isUserLoggedIn"
            class="flex items-center justify-center"
        >
            <NuxtPage/>
        </div>
    </div>
</template>

<script setup lang="ts">
import type {MenuItem} from 'primevue/menuitem';
import {ref} from 'vue';

const {
    auth,
    isUserLoggedIn,
} = useLogin();

console.log(auth.status.value);

const {
    currentLocale,
    availableLocales,
    toggle,
    menu,
} = useLanguage();

function useLogin() {
    const auth = useAuth();

    const isUserLoggedIn = computed(() => auth.status.value === 'authenticated');

    return {
        auth,
        isUserLoggedIn,
    };
}

function useLanguage() {
    const {
        locale,
        locales,
        t,
        setLocale,
    } = useI18n();

    const currentLocale = computed(() => locales.value.find((i) => i.code === locale.value));
    const availableLocales = computed(() => locales.value.filter((i) => i.code !== locale.value).map((i) => ({
        label: t(i.name as string),
        command: () => {
            setLocale(i.code);
        },
    } as MenuItem)));

    const menu = ref();

    function toggle(event: Event) {
        menu.value.toggle(event);
    }

    return {
        currentLocale,
        availableLocales,
        toggle,
        menu,
    };
}

const items = ref([]);
</script>
