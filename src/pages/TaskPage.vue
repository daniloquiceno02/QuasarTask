<template>
  <div class="row">
    <div class="col-12 col-sm-4 q-pa-sm">
      <input-comp v-model="Tittle.model" :label="Tittle.label" />
    </div>
    <div class="col-12 col-sm-4 q-pa-sm">
      <input-comp v-model="description.model" :label="description.label" />
    </div>
    <div class="col-12 col-sm-4 q-pa-sm">
      <button-comp
        :label="buttonL.label"
        @click="saveForm"
        :color="buttonL.color"
      />
    </div>
  </div>

  <div class="q-pa-md row items-start q-gutter-md">
    <div class="col-12 col-md-3" v-for="(item, index) in tasks" :key="index">
      <q-card class="my-card bg-grey-9 text-white">
        <q-card-section>
          <div class="text-h6">{{ item.tittle }}</div>
        </q-card-section>
        <q-card-section>
          {{ item.description }}
        </q-card-section>

        <q-separator />

        <q-card-actions vertical>
          <q-btn @click="editItem(item)" flat>Editar</q-btn>
          <q-btn @click="deleteForm(item.id)" flat>Eliminar</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>

  <q-dialog v-model="prompt" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Editar</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          dense
          v-model="tittleEdit"
          autofocus
          @keyup.enter="prompt = false"
        />
        <q-input
          dense
          v-model="descriptionEdit"
          autofocus
          @keyup.enter="prompt = false"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn flat label="Add address" @click="updateItem()" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { Task } from 'components/models';
import InputComp from 'components/InputComp.vue';
import ButtonComp from 'components/ButtonComp.vue';

defineOptions({
  name: 'PanelPage',
});
const prompt = ref(false);
const idEdit = ref('');
const tittleEdit = ref('');
const descriptionEdit = ref('');
const Tittle = ref({ label: 'Titulo', model: '' });
const description = ref({ label: 'Descripcion', model: '' });
const buttonL = ref({
  label: 'Crear tarea',
  color: 'primary',
});
const tasks = ref<Task[]>([]);

async function fetchData() {
  try {
    const response = await axios.get<Task[]>('http://localhost:3000/task');
    tasks.value = { ...response.data };
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

const saveForm = () => {
  const TaskNew: Task = {
    id: Math.floor(Math.random() * 1000).toString(),
    tittle: Tittle.value.model,
    description: description.value.model,
  };
  console.log(TaskNew);

  try {
    axios
      .post('http://localhost:3000/task', TaskNew)
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.error('Error eliminando la tarea:', error);
      });
  } catch (error) {
    console.error('Error fetching users:', error);
  }

  Tittle.value.model = '';
  description.value.model = '';
};
const updateItem = async () => {
  const TaskNew: Task = {
    id: idEdit.value,
    tittle: tittleEdit.value,
    description: descriptionEdit.value,
  };

  try {
    const response = await axios.put(
      'http://localhost:3000/task/' + TaskNew.id,
      TaskNew
    );
    if (response.status === 200) {
      fetchData();
      console.log('Elemento actualizado correctamente');
    } else {
      console.error('Error al actualizar el elemento:', response.statusText);
    }
  } catch (error) {
    console.error('Error al actualizar el elemento:');
  }
};
const deleteForm = (id: unknown) => {
  try {
    axios
      .delete('http://localhost:3000/task/' + id)
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.error('Error eliminando la tarea:', error);
      });
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};
const editItem = (item: Task) => {
  prompt.value = true;
  idEdit.value = item.id;
  tittleEdit.value = item.tittle;
  descriptionEdit.value = item.description;
};
fetchData();
</script>
