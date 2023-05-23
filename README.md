## 1. 使用`vite-plugin-svg-icons`插件

1. 安装 `npm i vite-plugin-svg-icons`  

2. 配置插件  
      1. `vite.config.ts`
      ```ts
      import { defineConfig } from 'vite'
      import vue from '@vitejs/plugin-vue'
      // 引入vite-plugin-svg-icons
      import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
      // 帮助您以独立于操作系统的方式使用文件系统路径
      import path from 'path'

      // https://vitejs.dev/config/
      export default defineConfig({
      plugins: [vue(),
      createSvgIconsPlugin({
         // 指定需要缓存的图标文件夹
         iconDirs: [path.resolve(process.cwd(), 'src/icons')],
         // 指定symbolId格式
         symbolId: 'icon-[dir]-[name]',
      })
      ],
      resolve: {
         alias: {
            // 配置路径别名
            '@': path.resolve(__dirname, './src')
         }
      }
      })

      ```
      2. 在`src/main.ts`内引入注册脚本
      ```ts
      import 'virtual:svg-icons-register'
      ```

3. 如何使用
```vue
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

```


## 2. 设置别名@

1. `vite.config.ts`增加如下配置
```ts
import { defineConfig } from 'vite'
   import vue from '@vitejs/plugin-vue'
   // 引入vite-plugin-svg-icons
   import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
   // 帮助您以独立于操作系统的方式使用文件系统路径
   import path from 'path'

   // https://vitejs.dev/config/
   export default defineConfig({
   plugins: [vue(),
   createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
   })
   ],
   resolve: {
      alias: {
         // 配置路径别名
         '@': path.resolve(__dirname, './src')
      }
   }
   })
```

2. `tsconfig.json`添加如下配置
```json
{
   "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

## 3. git操作

1. 初始化git  
> git init  

2. 添加远程库
> 仓库别名v3  
> git remote add v3 https://github.com/completel/vue3-vite-ts.git   

3. 将本地文件添加到`暂存区`
> git add .  

4. 将`暂存区`的文件提交到`本地仓库`
> 引号里面提交的备注  
> git commit -m 'vite-plugin-svg-icons 插件使用、设置别名和git操作' .

5. 推送到远程仓库github
> git push v3 master  