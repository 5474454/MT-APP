<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{ active: kind === item.tab }"
        :data-type="item.tab"
      >
        {{ item.text }}
      </dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in resultsData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <p class="product-title">{{ item.title }}</p>
            <p class="sub-title">
              <span>{{ item.sub_title }}</span
              ><span>可住2人 | </span><span>{{ item.address }}</span>
            </p>
            <p class="price-number numfont price">
              <span class="price-icon">￥{{ item.price }}</span>
            </p>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      kind: "all",
      resultsData: {}
    };
  },
  props: ["nav"],
  created() {
    api.resultsByKeywords().then(res => {
      this.resultsData = res.data.data;
    });
  },
  methods: {
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName !== "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
      //动态获取数据 ajax请求
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
