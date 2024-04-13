<template>
  <div class="items-center justify-center bg-image q-pa-md full-height">
    <div class="q-pa-md row items-center justify-center">
      <div class="col-12 column items-center">
        <img src="/src/assets/img/logologin.png" alt="Logo" class="logo" />
      </div>
      <q-form @submit="onSubmit" ref="LoginForm" class="q-gutter-md">
        <div class="row justify-center">
          <div class="col-12 col-xl-7 col-lg-8 col-md-10">
            <div class="text-h4" style="opacity: 0.4">Iniciar sesion</div>
          </div>
          <div class="col-12 col-xl-7 col-lg-8 col-md-10">
            <input-comp
              v-model="username.model"
              :label="username.label"
            ></input-comp>
          </div>
          <div class="col-12 col-xl-7 col-lg-8 col-md-10">
            <input-comp
              v-model="password.model"
              :label="password.label"
              :type="password.type"
            ></input-comp>
          </div>
          <div class="col-12 col-xl-7 col-lg-8 col-md-10">
            <q-toggle
              v-model="accept"
              label="Acepto la licencia y los términos."
            />
          </div>
          <div class="col-12 col-xl-7 col-lg-8 col-md-10">
            <button-comp :label="buttonL.label" :type="buttonL.type" />

            <button-comp
              :label="buttonR.label"
              :type="buttonR.type"
              :to="buttonR.to"
            />
          </div>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { Users } from 'components/models';
import InputComp from 'components/InputComp.vue';
import ButtonComp from 'components/ButtonComp.vue';
import { useTokenStore } from '../stores/auth-store';

defineOptions({
  name: 'LoginPage',
});

const username = ref({ label: 'Usuario', model: '' });
const password = ref({ label: 'Contraseña', model: '', type: 'password' });
const buttonL = ref({
  label: 'Iniciar sesion',
  type: 'submit',
  disabled: '',
});
const buttonR = ref({
  label: 'Registrar',
  type: 'submit',
  to: '/register',
});
const LoginForm = ref();
const accept = ref<boolean>(false);
const users = ref<Users[]>([]);
const store = useTokenStore();

async function fetchData() {
  try {
    const response = await axios.get<Users[]>('http://localhost:3000/users');
    users.value.push(...response.data);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

const onSubmit = () => {
  if (accept.value !== true) {
    console.log('Acepta la licencia y los términos.');
  } else {
    if (users.value != null) {
      users.value.forEach((element) => {
        if (
          element.username === username.value.model &&
          element.password === password.value.model
        ) {
          store.updateState(element);
        } else {
          console.log('Usuario o contraseña Incorrectos');
        }
      });
    }
  }
};

fetchData();
</script>
