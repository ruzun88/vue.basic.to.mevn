<template>
  <v-app>
    <v-content>
      <home></home>
      <homebutton/>
    </v-content>
    <v-content>
      <ModalDlg/>
    </v-content>
    <v-content>
      <FormDlg/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home';
import homebutton from './components/Homebutton';
import ModalDlg from './components/ModalDlg';
import FormDlg from './components/FormDlg';

export default {
  name: 'App',

  components: {
    Home,
    homebutton,
    ModalDlg,
    FormDlg
  },

  data: () => ({
    //
  }),
};
</script>
