<template>
  <table>
    <tr-component :key="index" v-for="(rowData, index) in tableData" :row-data="rowData" :row-index="index"></tr-component>
  </table>
</template>

<script>
import TrComponent from "./TrComponent";

export default {
  props: {
    tableData: Array,
  },
  components: {
    TrComponent,
  },
};
</script>