<template>
    <Button
        :icon-class="[
        'transition-transform duration-500',
        isToggled ? '-rotate-180' : 'rotate-0',
      ]"
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
        @before-show="isToggled = true"
        @before-hide="isToggled = false"
    />
</template>

<script lang="ts" setup>
import type {MenuItem} from 'primevue/menuitem';
import {ref} from 'vue';

const {
    currentLocale,
    availableLocales,
    toggle,
    menu,
} = useLanguage();

const isToggled = ref(false);

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
</script>

<style scoped>

</style>
