<template>
    <span > {{ locale }}</span>
    <div class="flex">
        <Button @click="setLocale('en')">
            en
        </Button>
        <Button @click="setLocale('de')">
            de
        </Button>
    </div>
    {{ t('welcome') }}
    <NuxtImg
        format="webp"
        src="/branding_assets/png/original/claim.png"
    />
</template>

<script setup lang="ts">
const {
    locale,
    setLocale,
    t,
} = useI18n();

defineI18nRoute({
    paths: {
        en: '/login',
        de: '/anmelden',
    },
});
</script>

<style scoped>

</style>
