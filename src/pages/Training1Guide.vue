<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import Btn from '../components/Btn.vue';
import Snd from 'snd-lib';
const snd = new Snd();
snd.load(Snd.KITS.SND01);

let videoShow = ref<boolean>(false);
let videoEnded = ref<boolean>(false);

const video = ref<HTMLMediaElement>();

const playVideo = () => {
  if (video.value) {
    videoShow.value = true;
    videoEnded.value = false;
    setTimeout(() => {
      watchideo();
    }, 1000);
  }
};

const watchideo = () => {
  if (video.value) {
    videoShow.value = false;
    videoEnded.value = true;
  }
};

watchEffect(() => {
  if (videoEnded.value) {
    snd.play(Snd.SOUNDS.CELEBRATION);
  }
});
</script>

<template>
  <div>
    <div class="u-caption">
      <div>トレーニング</div>
      <div class="u-captionNum">1</div>
    </div>
    <template v-if="!videoShow && !videoEnded">
      <div class="u-text">テキストテキストテキストテキストテキスト
      </div>
      <div class="btn">
        <Btn
          label="トレーニングスタート！"
          @click-btn="
            playVideo();
            snd.play(Snd.SOUNDS.TOGGLE_ON);
          "
        ></Btn>
      </div>
      <router-link to="/" @click="snd.play(Snd.SOUNDS.BUTTON)">
        <Btn class="back" label="TOPに戻る"></Btn>
      </router-link>
    </template>
    <template v-if="videoEnded">
      <div class="u-textFinish">トレーニング終了!!</div>
      <div class="u-btnBox">
        <div class="u-btnBoxItem">
          <Btn
            label="もう一度する"
            @click-btn="
              playVideo();
              snd.play(Snd.SOUNDS.BUTTON);
            "
          ></Btn>
        </div>
        <div class="u-btnBoxItem">
          <router-link
            to="/training1-guideDVALv2"
            @click="snd.play(Snd.SOUNDS.TOGGLE_ON)"
          >
            <Btn label="次へ進む"></Btn>
          </router-link>
        </div>
        <div class="u-btnBoxItem">
          <router-link to="/" @click="snd.play(Snd.SOUNDS.BUTTON)">
            <Btn class="back" label="TOPに戻る"></Btn>
          </router-link>
        </div>
      </div>
    </template>
    <div class="u-movie" :class="{ isShow: videoShow }">
      <img
        ref="video"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAMAAAD8CC+4AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACUlBMVEXdZpnjgqvdZ5ndZ5rfcKDnkrf++/zxv9XmkLXeapvfbZ710eH55u7gdKLmjbP++vv////vuND21+T44Orkha7pnb7qosHqocDheab99fnyw9ffcaD33ej65+/gc6Lmj7X+/P3qoMD89PffcJ/gdKPea53rp8Tvtc743un33OfqoL/43en0zd7vts7fb5/zyNrifKj43+n//v7heaX77fPxwdbrpMPomrvolrn10+H++Pvpnb3jgqz0zd3ifankiK/66PDkg6365u/xv9TzyNvkhq7pm73wvNLzydv32ebyx9neaJvsqsbgdqP43+r88fbomLvebJ3jgav77/TmjLP22OXjgKr66O/99fjyxdj++vzywtf77vT10eDolbnpm7zhd6T21uT++/3mjrT99/rmkbXlirHsqMXzytvzytzyxdnnlLfxwdXifqn21OPkhK388vfyxNjnlLjeapzgdaPvts/0zt7fbp/++fv9+PrdaJrwu9LljLLjg6znkbb22eXfbp7utM366fDsqsf54+321eP10uHnlbjtrcntrsnifajifKfnk7fqocH//v/99/n88/feaZvrpsTsp8XrpcPrpsP55e744Ov//f7kha3usMvqn7/heKXgcaH54uzebZ3+/f30z9/wvNP77vPomLrombv88PXhd6XtrcjhdqT21uP54+z33Ojtr8ntrMj10+L66vHvuM/32+fgcqH99vn0y93mjrPwudHjf6rus8z77PPol7rsrMf88vbtsMr99Pjea5z44uvqo8H87/Xqnr/ol7kg/ze/AAAAAWJLR0QQlbINLAAAAAd0SU1FB+YFAQwoBC+/Kf0AAAXxSURBVHja7dv7n1RlHQfwiSVycc1vJMudisUt0QBBRRHwtpgLWeqmFCSRUHjBypYENlCzK1YmSpimUN6yvJWllpXaxf/LM8zs7pnLOTO7sK563u8feD1zvs95nue1n7mc88xQKgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8JH5oy2SvgXdUxtfThaR+Z7FXwLjils9qYfmrXaR89PT5W32HGx8+Y7DW+j83snjV7stfQYHbMmVuJfd78WLDwE5+MT9X1WBQ9k73I97FFERmvmZ7Fi8+cpEX1Rny62pz+mTirc0mcXfexLvQTkYSe8ec7J+KzEzLl0mXLW/Q4N1asHG4vPC/OL10wr2HZOaGv6u5eNd5qIeSGfuFEzNhxUay+OLfHmoi1w+11HZdcelmzZeeEfnlE13irhTAhoV/RV2d9qnhlJD7XkXP6VREL+ivOWrGhY+NIYeYFw1bH50faV9ef/4WIc7NHz68WwoSE/sWoc026umR1cuTUazPPvm5FzbkbRj/OB6KZL9UPcH3E9dmLy68WwiSEXrphU3Lo7HlZZ8+oPffLIx/vSehfuaJic2yptr7aGPqNETdmLy6/WggTEvrWr9XZVlvv+XrETdtTB1am2t0RO77xzaotETtHSwOxeGTZw6ue0Rj6zRG3ZC8uv1oISehTm1cm6kKubOOtN92Wejh1zq6Ru8Pbd0TMGql8K+Lbo/3aDD15pszNnju/WghJ6N+547uDTSqNoe9ec/LmvSH94HsRd1abe7oizhkpDO6NfUOj/doM/fvJhWL2zPnVQlh0/HNzztz9DV9qNIa+dtGB5N/OA5nGuYZt+yLuqjQH747YdM9IZVXq5q3Udug/GN3baSK/WghJ6JuP537vD+uurBpC3xrxo1J5jzTTxvbnTelIgv5xpTn4k+SNZ/loKan8NNWzzdB/FnEwe7r8aiEkoe/e2nd6ObLN59+XrtSH/vM5Eb8oTUDoByOmVd/tf3l//Cq1K7wm4oFDqZ5thv5gxEPZ0+VXC6Fy9b708OXl0Fb8OlWpC33ekYhl5cbuhzMNjW3uilW/iegdfrB//iOpUnLz9mi6a5uh/zYavqBpu1oIw7dsU+5K/sLTHktVakN//GjE0WMTsIBrfhfx++alC5MX+vT0gYHY8kTF5thVbT3ZGPpTEU9nT5hfLYTUffolFz2RrtSEvi55J3jmDyd/+inPJpk/vLRpbdsDNTfppbZ35P64ZEnOUvOrhVCzOVOzIZ4O/crk5vm8+8YwbJt2/ykJ7bnme3Odz0f0127RD8QLvRWr48Vqa1Nj6LTQzo7cunI0Xe2+PF76c3MzG3o+/pfyLvzLf206TGdyIf+3x2qPNftMv/jRlSXGpnXo619JrrTijmvbHfFIxqV9b223oVd37Sgffq35Jf+xJPNpr9Yd/PuB4c5+RHEi8kPfuP4fC8rJvP7P9kdsHfrQadv/dfO/jx88ckrzQW7vSu4lnspbdk7ob/T3vzHeaiHkhn7p3uPJvPnCW2MY8erZzd1TKXf85837h58Hr/+3+U3e0IP7IvbmZJ4fel9E33irhZAd+i3VZI52n9yfyt1ZHXfHsu0Zv2ffn9wexv8eyRtE6CciO/TrNiWfqi8/u/xkz/j/2Hfv3Rt6L8vYyel4e375KbF2YYtl54R+uK/v8HirhZAdemn6rPWHxjRWe/bkf7F56KUk8oFW1xAu5E7Enp6e99h/Gjqz/5mdg606Cf0D5thbrfvsPNjyeQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwgfQOurg1cMLkdoMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDUtMDFUMjE6NDA6MDQrMDk6MDC3SLZqAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA1LTAxVDIxOjQwOjA0KzA5OjAwxhUO1gAAAABJRU5ErkJggg=="
        muted
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  margin-top: 60px;
  margin-bottom: 40px;
}
</style>
