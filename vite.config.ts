import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // <--- Make sure this line is present

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      // This maps '@' to your 'src' directory, allowing imports like '@/components/ui/button'
      '@': path.resolve(__dirname, './src'), 
    },
    // This helps ensure React and React-DOM are always deduped to a single instance
    dedupe: ['react', 'react-dom'], 
  },
  // The optimizeDeps.exclude section was removed earlier as it caused issues.
  // Do not put it back unless specifically instructed for a new problem.
});