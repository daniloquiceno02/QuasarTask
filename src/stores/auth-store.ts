import { defineStore, createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { Users } from 'components/models';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export const useTokenStore = defineStore({
  id: 'store',
  state: () => ({
    token: false,
    user: {} as Users,
  }),
  actions: {
    updateState(payload: Users) {
      this.token = true;
      this.user = payload;
      this.router.push('/Panel');
      console.log('Sesion iniciada');
    },
    resetState(valid: boolean) {
      this.token = valid;
      this.user = {} as Users;
    },
  },
  getters: {
    getUser(): Users {
      return this.user;
    },
  },
  persist: true,
});
