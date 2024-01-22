<template>
  <div class="home">
    <div class="filter">
      <SearchInput @search="handelSearch" @reset="handelResetSearch" />
      <Dropdown
        :options="statusOptions"
        :placeholder="'Статус'"
        @option-selected="handleOptionSelected"
      />
    </div>
    <div class="table">
      <div class="table-header">
        <div
          class="table-header-element"
          v-for="field in headerField"
          :key="field.key"
        >
          {{ field.value }}
        </div>
      </div>
      <div class="table-body">
        <div class="body-row" v-for="user of filteredUsers" :key="user.id">
          <div
            class="body-row-element"
            @click.prevent="goToUserProfile(user.id)"
          >
            {{ fullnameFilter(user.fullname) }}
          </div>
          <div class="body-row-element">{{ user.phone }}</div>
          <div class="body-row-element">{{ user.region }}</div>
          <div class="body-row-element">{{ user.status }}</div>
          <div class="body-row-element">{{ formatDate(user.created_at) }}</div>
          <div class="body-row-element">
            <button class="delete-btn" @click.prevent="handelDeleteUser(user.id)">
              <img src="../assets/image/delete.svg" alt="" srcset="">
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="btn-add">
      <button @click="openCreateModal" class="add-user">
        Добавить клиента<svg-cancel />
      </button>
    </div>

    <create-user-modal v-if="isCreateModalOpen" @close="closeCreateModal"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SearchInput from "../components/SearchInput.vue";
import Dropdown from "@/components/Dropdown.vue";
import CreateUserModal from '@/components/modal/CreateUserModal.vue';
import SvgCancel from '@/components/svg/SvgCancel.vue';

export default {
  name: "HomeView",
  components: {
    SearchInput,
    Dropdown,
    CreateUserModal,
    SvgCancel,
  },
  data() {
    return {
      users: null,
      headerField: [
        { key: "fullname", value: "ФИО" },
        { key: "phone", value: "Телефон" },
        { key: "region", value: "Регион" },
        { key: "status", value: "Статус" },
        { key: "created_at", value: "Дата" },
        { key: '', value: "" },
      ],
      statusOptions: [
        { key: null, value: "Все" },
        { key: 1, value: "Активен" },
        { key: 2, value: "Приостановлен" },
        { key: 0, value: "Неактивен" },
      ],
    };
  },
  computed: {
    ...mapGetters(["filteredUsers"]),
    isCreateModalOpen() {
      return this.$store.state.isCreateModalOpen;
    },
  },
  created() {
    if (localStorage.length === 0) {
      this.$store.dispatch('getUsers')
    } else this.$store.dispatch('loadLocalUsers')
  },
  methods: {
    handelSearch(el) {
      this.$store.dispatch("setSearchQuery", el);
    },
    handelResetSearch() {
      this.$store.dispatch("setSearchQuery", "");
    },
    handleOptionSelected(option) {
      this.$store.dispatch("setFilterStatus", option.value);
    },
    handelDeleteUser(id) {
      this.$store.dispatch('removeUser', id)
    },
    openCreateModal() {
      this.$store.commit('OPEN_CREATE_MODAL');
    },
    closeCreateModal() {
      this.$store.commit('CLOSE_CREATE_MODAL');
    },

    formatDate(created_at) {
      const dateParts = created_at.split("T")[0].split("-");
      return `${dateParts[2]}.${dateParts[1]}.${dateParts[0].slice(2)}`;
    },
    fullnameFilter(value) {
      if (!value) {
        return value;
      }
      const tmp = value.trim().split(/\s+/);
      if (tmp.length === 3) {
        return [tmp[0], tmp[1][0], tmp[2][0]]
          .map((item) => this.ucfirst(item))
          .join(". ");
      }
      return value;
    },
    ucfirst(value) {
      if (value.length) {
        return value.charAt(0).toUpperCase() + value.toLowerCase().slice(1);
      }
      return value;
    },
    goToUserProfile(id) {
      this.$router.push({
        name: "user-page",
        params: { id: id },
      });
    },
  },
};
</script>

