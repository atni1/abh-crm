<template>
  <div class="layout-wrapp">
    <SidebarLayout />
    <ContentLayout />
  </div>
</template>

<script>
import ContentLayout from "./layout/ContentLayout.vue";
import SidebarLayout from "./layout/SidebarLayout.vue";

export default {
  name: "HomeView",
  components: {
    SidebarLayout,
    ContentLayout,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
