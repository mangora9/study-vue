<template>
  <div>
    <table-component :table-data="tableData"></table-component>
    <div>{{turn}} 님의 턴입니다.</div>
  </div>
</template>

<script>
import TableComponent from "./TableComponent";
import EventBus from "./EventBus"
export default {
  components: {
    TableComponent,
  },
  data() {
    return {
      tableData: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      turn: "O",
    };
  },
  created() {
    EventBusthis.$on('clickTd', this.onClickTd);
  },
  
};
</script>

<style>
table {
  border-collapse: collapse;
}
td {
  border: 1px solid black;
  width: 200px;
  height: 200px;
  text-align: center;
  font-size: 100px;
}
</style>