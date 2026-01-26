import {resolve} from 'path'
import { defineConfig} from 'vite'

export default defineConfig({
    base:'/daily-report/',
    build: {
        rollupOptions:{
            input:{
                main:resolve(__dirname,'index.html'),
                history:resolve(__dirname,'history.html'), 
            },
        },
    },
});