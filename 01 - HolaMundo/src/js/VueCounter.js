const { createApp, ref } = Vue;

const App = {
  setup() {
    const name = ref("Goku");
    const count = ref(2);
    const hadleIncrement = () => {
      count.value = count.value * 2;
      console.log(count.value);
    };
    return { name, count, hadleIncrement };
  },
  template: `<button @click="hadleIncrement">Incrementar</button><b>Contador: {{count}}</b>`,
};

createApp(App).mount("#app");
