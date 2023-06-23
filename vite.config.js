import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr' //svgr: để import hình ảnh svg đúng cách

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  resolve: {
    alias: [
      { find: '~', replacement: '/src' } //import absolute ngắn gọn(vd: ../../ => ~/) alias trong vite
    ]
  }
})
