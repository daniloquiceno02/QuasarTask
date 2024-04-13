<template>
  <div class="items-center justify-center bg-image q-pa-md full-height">
    <div class="q-pa-md row items-center justify-center">
      <div class="col-12 column items-center">
        <img src="/src/assets/img/logologin.png" alt="Logo" class="logo" />
      </div>
      <q-form @submit="onSubmit" ref="registerForm" class="q-gutter-md">
        <div class="row justify-center">
          <div class="col-12 col-xl-7 col-lg-8 col-md-10">
            <div class="text-h4" style="opacity: 0.4">Registrarse</div>
          </div>
          <div class="col-12 col-xl-7 col-lg-8 col-md-10">
            <input-comp v-model="name.model" :label="name.label"></input-comp>
          </div>
          <div class="col-12 col-xl-7 col-lg-8 col-md-10">
            <input-comp
              v-model="identification.model"
              :label="identification.label"
              :type="identification.type"
            ></input-comp>
          </div>
          <div class="col-12 col-xl-7 col-lg-8 col-md-10">
            <input-comp
              v-model="phone.model"
              :label="phone.label"
              :type="phone.type"
            ></input-comp>
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
            <button-comp :label="buttonR.label" :type="buttonR.type">
            </button-comp>
            <button-comp
              :label="buttonL.label"
              :type="buttonL.type"
              :to="buttonL.to"
            >
            </button-comp>
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

defineOptions({
  name: 'LoginPage',
});
const name = ref({ label: 'Nomre completo', model: '' });
const identification = ref({
  label: 'Identificacion',
  model: '',
  type: 'number',
});
const phone = ref({ label: 'Telefono', model: '', type: 'number' });
const username = ref({ label: 'Usuario', model: '' });
const password = ref({ label: 'Contraseña', model: '', type: 'password' });
const buttonR = ref({
  label: 'Registrar',
  type: 'submit',
  disabled: '',
});
const buttonL = ref({
  label: 'Iniciar sesion',
  type: 'submit',
  to: '/',
});
const registerForm = ref();
const accept = ref<boolean>(false);

async function fetchData(payload: unknown) {
  try {
    const newUser = payload;
    const response = await axios.post(
      'https://quasartask.onrender.com/users',
      newUser
    );
    console.log(response);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

const onSubmit = () => {
  // Crear el objeto de usuario

  const newUser: Users = {
    name: name.value.model,
    identification: identification.value.model,
    phone: phone.value.model,
    username: username.value.model,
    password: password.value.model,
  };
  if (accept.value !== true) {
    console.log('Acepta la licencia y los términos.');
  } else {
    registerForm.value.validate().then((success: unknown) => {
      if (success) {
        fetchData(newUser);
      }
    });
  }
};
</script>
