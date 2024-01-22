<template>
  <div class="create-user-modal">
    <div class="overlay" @click="closeModal"></div>
    <div class="modal">
      <h2>Создание клиента</h2>
      <form @submit.prevent="createUser">
        <div>
          <label for="fullname">ФИО:</label>
          <input v-model="user.fullname" type="text" id="fullname" required />
        </div>
        <div>
          <label for="phone">Телефон:</label>
          <input v-model="user.phone" type="text" id="phone" required />
        </div>
        <div>
          <label for="region">Регион:</label>
          <input v-model="user.region" type="text" id="region" required />
        </div>
        <div>
          <label for="status">Статус:</label>
          <select v-model="user.status" id="status" required>
            <option value="Активен">Активен</option>
            <option value="Неактивен">Неактивен</option>
            <option value="Приостановлен">Приостановлен</option>
          </select>
        </div>
        <div class="btn-group">
          <button type="submit">Cоздать</button>
          <button type="button" @click="closeModal">Отменить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        fullname: "",
        phone: "",
        region: "",
        status: "Активен",
      },
    };
  },
  methods: {
    createUser() {
      this.$store.dispatch("createUser", this.user);
      this.closeModal();
    },
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
