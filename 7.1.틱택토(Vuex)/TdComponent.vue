<template>
  <td @click="onClickTd">{{ cellData }}</td>
</template>

<script>
// import Vue from "vue";

export default {
  props: {
    cellData: String,
    rowIndex: Number,
    cellIndex: Number,
  },
  methods: {
    onClickTd() {
      if (cellData) return false;
      //   this.$root.$data.tableData[this.rowIndex][this.cellIndex] = this.$root.$data.turn;
      let rootData = this.$root.$data;
      this.$set(
        rootData.tableData[this.rowIndex],
        this.cellIndex,
        rootData.turn
      );
      rootData.turn = rootData.turn === "O" ? "X" : "O";
    },
  },
};
</script>