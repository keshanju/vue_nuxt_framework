<template>
    <div>
        <a>test</a>
    </div>
</template>

<script>
export default {
  data() {
    return {
      language: ""
    };
  },
  created() {
    this.language = this.$route.params.language;
  },

  methods: {
    test() {},

    /**
     *
     */
    selectChange() {
      this.$i18n.locale = this.language;
    }
  }
};
</script>

<style scoped>
</style>
