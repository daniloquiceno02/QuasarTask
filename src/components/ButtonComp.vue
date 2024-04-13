<template>
  <q-btn
    :label="label"
    :type="type"
    :color="color"
    :to="url"
    :disabled="disabled"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    label: String,
    type: String,
    color: String,
    url: String,
    disabled: String,
  },
});
</script>
