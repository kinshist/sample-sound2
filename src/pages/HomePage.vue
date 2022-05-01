<script setup lang="ts">
import Snd from 'snd-lib';
const snd = new Snd();
snd.load(Snd.KITS.SND01);

</script>

<template>
  <div>
    <h1 class="title">Sampleトレーニング</h1>
    <div class="list">
      <router-link
        to="/training1-guide"
        class="btn"
        @click="snd.play(Snd.SOUNDS.TOGGLE_ON)"
      >
        <span class="btnCaption"
          ><span>トレーニング</span
          ><span class="btnCaptionNum">1</span></span
        >
      </router-link>
      <router-link
        to="/training1-guide"
        class="btn"
        @click="snd.play(Snd.SOUNDS.TOGGLE_ON)"
      >
        <span class="btnCaption"
          ><span>トレーニング</span
          ><span class="btnCaptionNum">2</span></span
        >
      </router-link>
      <router-link
        to="/training1-guide"
        class="btn"
        @click="snd.play(Snd.SOUNDS.TOGGLE_ON)"
      >
        <span class="btnCaption"
          ><span>トレーニング</span
          ><span class="btnCaptionNum">3</span></span
        >
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.title {
  margin-top: 30px;
  font-size: 45px;
  color: #de669a;
}
.list {
  width: 300px;
  margin: 50px auto 0;
}
.btn {
  display: flex;
  align-items: center;
  background-color: #fff5fa;
  border: #de669a 1px solid;
  border-radius: 10px;
  height: 68px;
  padding: 0 20px;
  &:not(:first-child) {
    margin-top: 28px;
  }
  &Caption {
    color: #de669a;
    font-size: 16px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1.1;
    padding: 5px 10px;
    width: 100%;
    &Num {
      font-size: 18px;
      font-weight: bold;
    }
  }
  &Title {
    text-align: left;
    margin-left: 30px;
    font-size: 18px;
    font-weight: bold;
    flex: 1;
  }
  &Text {
    color: #de669a;
    font-size: 14px;
    position: relative;
    padding-right: 20px;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: -20px;
      width: 0;
      height: 0;
      margin: auto;
      border-top: transparent 7px solid;
      border-right: transparent 12px solid;
      border-bottom: transparent 7px solid;
      border-left: #de669a 12px solid;
    }
  }
}
.notice {
  margin-top: 45px;
  font-size: 13px;
}
</style>
