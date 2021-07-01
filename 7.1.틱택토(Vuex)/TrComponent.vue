<template>
  <tr>
    <td-component
      :key="index"
      v-for="(cellData, index) in rowData"
      :cell-data="cellData"
      :cell-index="index"
      :row-index="rowIndex"
    ></td-component>
  </tr>
</template>

<script>
import TdComponent from "./TdComponent";
export default {
  props: {
    rowData: Array,
    rowIndex: Number,
  },
  components: {
    TdComponent,
  },
  data() {
    return {
      parent: "내가 니 애비다.",
    };
  },
};
</script>