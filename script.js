const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      emails: [],
    };
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        console.log(response);
        for (let index = 0; index < 10; index++) {
          this.emails[index] = response.data.response;
        }

        console.log(this.emails);
      });
  },
}).mount("#app");
