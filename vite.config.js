import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "./", // Ubah output build ke dalam folder src atau folder lain yang Anda inginkan
    emptyOutDir: false, // agar tidak menghapus folder src saat build
  },
});