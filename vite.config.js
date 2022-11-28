import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';


export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [vue()],
  server: {
    host: 'localhost', // 指定服务器主机名
    port: 8080, // 指定服务器端口
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    https: false, // 是否开启 https
  },
})