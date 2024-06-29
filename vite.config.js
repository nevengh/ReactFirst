import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ReactFirst",
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     external: ['react-icons/fa', 'react-icons/fa6'],
  //   },
  // },
})
