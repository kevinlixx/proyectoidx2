import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/<proyectoidx2>/', // Reemplaza <nombre-del-repositorio> con el nombre de tu repositorio
  plugins: [react()],
  server: {
    headers: {
      'Permissions-Policy': 'interest-cohort=()' // Elimina o corrige esta cabecera si es necesario
    }
  }
});