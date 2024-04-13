<template>
  <q-input filled v-model="Nmodel" :label="Nlabel" lazy-rules :rules="Nrules" />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  props: {
    model: String,
    label: String,
  },
  setup(props, { emit }) {
    const Nmodel = ref(props.model);
    const Nlabel = ref(props.label);
    const Nrules = ref([(val: string) => !!val || 'Campo no puede ir vacio']);

    watch(Nmodel, (val) => {
      emit('update:model', val);
    });

    return {
      Nmodel,
      Nlabel,
      Nrules,
    };
  },
});
</script>
