<template>
  <div>
    <!--
      v-bind:class -> 줄여서 :class로 할 수 있음.
      <div id="screen" v-bind:class="state">{{ message }}</div>
     -->
    <div id="screen" :class="state" @click="onClickScreen">{{ message }}</div>
    <!-- <div v-show="result.length"> -> element가 disnplay: none 으로 됨.-->
    <!--
      v-if: element가 아예 사라져버림!
      div로 감싸고 싶지 않으면 template로 변경하면 됨!!
    -->
    <div v-if="result.length">
      <div>평균 시간:{{ average }} ms</div>
      <button @click.prevent="onReset">리셋</button>
    </div>
  </div>
</template>

<script>
let startTime = 0;
let endTime = 0;
let timeout = null;

export default {
  data() {
    return {
      result: [],
      state: "waiting",
      message: "클릭해서 시작하세요.",
    };
  },
  computed: {
    // 데이터들이 화면에서 계산될 때 사용. 성능에 영향을 미칠 수 있음!
    average() {
      return this.result.reduce((a, b) => a + b, 0) / this.result.length || 0;
    },
  },
  methods: {
    onReset() {
      this.result = [];
    },
    onClickScreen() {
      if (this.state === "waiting") {
        this.state = "ready";
        this.message = "초록색이 되면 클릭하세요.";
        timeout = setTimeout(() => {
          this.state = "now";
          this.message = "지금 클릭하세요!";
          startTime = new Date();
        }, Math.floor(Math.random() * 1000) + 2000); // 2~3초
      } else if (this.state === "ready") {
        clearTimeout(timeout);
        this.state = "waiting";
        this.message = "너무 성급하시군요! 초록색이 된 후에 클릭하세요.";
      } else if (this.state === "now") {
        endTime = new Date();
        this.state = "waiting";
        this.message = "클릭해서 시작하세요.";
        this.result.push(endTime - startTime);
      }
    },
  },
};
</script>

<style scoped>
#screen {
  width: 300px;
  height: 200px;
  text-align: center;
  user-select: none;
}
#screen.waiting {
  background-color: aqua;
}
#screen.ready {
  background-color: red;
  color: white;
}
#screen.now {
  background-color: greenyellow;
}
</style>
