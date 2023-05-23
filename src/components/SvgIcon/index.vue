<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    prefix?: string,
    name: string,
    color?: string
}

const props = withDefaults(defineProps<Props>(), {
    prefix: '#icon',
    // name: String,
    // color: String
})

const symbolId = computed(() => `${props.prefix}-${props.name}`)

</script>

<template>
    <h2>SVGICON</h2>
    <svg>
        <!-- x:link:href属性执行哪一个图标，属性值必须为#icon-图标名字 -->
        <!-- fill属性定义颜色 -->
        <use :xlink:href="symbolId" :fill="color"></use>
    </svg>
    <p>{{ prefix + name + color }}</p>
</template>

<style scoped></style>
