<template>
    <NuxtPicture
        :src="`images${props.src}`"
        format="webp"
        v-bind="props"
    />
</template>

<script lang="ts" setup>
import {pictureProps} from '#image/components/_base';

const props = defineProps(pictureProps);
</script>

<style scoped>

</style>
