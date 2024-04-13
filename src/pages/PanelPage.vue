<template>
  <div class="q-pa-md d-flex flex-column justify-center align-center">
    <q-card class="my-card">
      <q-parallax
        src="https://cdn.quasar.dev/img/parallax1.jpg"
        :height="150"
      />

      <q-card-section>
        <div class="text-h6">Nombre: {{ user.name }}</div>
        <div class="text-subtitle2">
          Identificacion: {{ user.identification }}
        </div>
        <div class="text-subtitle2">Telefono: {{ user.phone }}</div>
      </q-card-section>
    </q-card>

    <!-- Botón de cierre de sesión -->
    <q-btn class="mt-4" color="primary" label="Cerrar sesión" @click="logout" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useTokenStore } from '../stores/auth-store';

const router = useRouter();
const store = useTokenStore();
const user = store.getUser;

const logout = () => {
  store.resetState(false);
  router.push('/');
};
</script>
