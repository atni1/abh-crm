<template>
  <div class="search">
    <input class="search-input" placeholder="Поиск..." v-model="query" type="text" name="" @input="searchQuery"/>
    <button v-if="query.length <= 0" class="search-btn">
      <svg-search/>
    </button>
    <button v-if="query" class="search-btn cansel" @click.prevent="reset">
      <svg-cancel/>
    </button>
  </div>
  </template>

<script>
import SvgCancel from './svg/SvgCancel.vue'
import SvgSearch from './svg/SvgSearch.vue'

export default {
  name: "SearchInput",
  components: {
    SvgCancel,
    SvgSearch,
  },
  data() {
    return {
      query: '',
    }
  },
  methods: {
    searchQuery() {
      this.$emit('search', this.query)
    },
    reset() {
      this.query = ''
      this.$emit('reset')
    }
  }
}
</script>
