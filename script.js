const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      emails: [],
    };
  },
  methods: {
    getColor(index) {
      const color = ["red", "blue", "green", "yellow", "pink"];
      return color[index % color.length];
    },
  },
  mounted() {
    for (let index = 0; index < 10; index++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          console.log(response);

          this.emails[index] = response.data.response;
        }),
        console.log(this.emails);
    }
  },
}).mount("#app");
