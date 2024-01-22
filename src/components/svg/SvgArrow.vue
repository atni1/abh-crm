<template>
   <svg
    width="22px"
    height="22px"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g v-if="!direction" id="chevron-top">
      <line :stroke="strokeColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px" x1="16" x2="25" y1="11.5" y2="20.5" />
      <line :stroke="strokeColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px" x1="7" x2="16" y1="20.5" y2="11.5" />
    </g>
    <g v-if="direction" id="chevron-down">
      <line :stroke="strokeColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px" x1="16" x2="25" y1="20.5" y2="11.5" />
      <line :stroke="strokeColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2px" x1="7" x2="16" y1="11.5" y2="20.5" />
    </g>

  </svg>
</template>

<script>
export default {
  name: 'ArrowTop',
  props: {
    strokeColor: {
      type: String,
      default: "#000000", // Цвет по умолчанию
    },
    direction: {
      type: Boolean,
      default: false
    }
  },
};
</script>