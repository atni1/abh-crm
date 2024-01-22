<template>
  <div class="user">
    <div class="user-image">
      <img src="http://dummyimage.com/120" alt="avatar" />
    </div>
    <div class="user-info" >
      <div>ФИО: {{ user.fullname }}</div>
      <div>Телефон: {{ user.phone }}</div>
      <div>Регион: {{ user.region }}</div>
      <div>Статус: {{ user.status }}</div>
      <div>Дата: {{ formatDate(user.created_at) }}</div>
      <!-- {{ user }} -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "UserView",
  created() {
    this.$store.dispatch('getUsers')
  },
  computed: {
    ...mapGetters(["getUserById"]),
    user() {
      const id = this.$route.params.id
      return this.$store.getters.getUserById(id)
      
    }
  },
  methods: {
    formatDate(created_at) {
      const dateParts = created_at.split("T")[0].split("-");
      return `${dateParts[2]}.${dateParts[1]}.${dateParts[0].slice(2)}`;
    },
  }
};
</script>

<style lang="scss" scoped>
.user {
  margin: 70px 40px;
  display: flex;

  &-info {
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
}
</style>
