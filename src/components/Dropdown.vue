<template>
  <div class="dropdown">
    <button @click="toggleDropdown" :disabled="disabled">
      {{ selectedOption || placeholder }}
      <svg-arrow :direction="isOpen"/>
    </button>
    <ul v-if="isOpen" class="dropdown-list">
      <li v-for="(option, index) in options" :key="index" @click="selectOption(option)">
        {{ option.value }}
      </li>
    </ul>
  </div>
</template>

<script>
import SvgArrow from './svg/SvgArrow.vue';
export default {
  name: 'DropdownComp',
  components: {
    SvgArrow,
  },  
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default() {
        return 'Выбирете елемент'
      },
    },
  },
  data() {
    return {
      isOpen: false,
      selectedOption: null,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option.value;
      this.isOpen = false;
      this.$emit('option-selected', option);
    },
  },
};
</script>
