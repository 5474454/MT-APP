<template>
  <div class="page-changeCity">
    <el-row>
      <Province />
    </el-row>
    <el-row>
      <hot title="热门城市:" :list="hostList" />
    </el-row>
    <el-row>
      <hot title="最近访问:" :list="recentList" />
    </el-row>
    <el-row>
      <category />
    </el-row>
  </div>
</template>

<script>
import api from "@/api/index.js";
import Category from "@/components/changeCity/category.vue";
import hot from "@/components/changeCity/hot.vue";
import Province from "@/components/changeCity/province.vue";
export default {
  data() {
    return {
      hostList: [],
      recentList: []
    };
  },
  created() {
    api.getHotCity().then(res => {
      this.hostList = res.data.data.map(item => item.name);
    });
    api.getRecentCity().then(res => {
      this.recentList = res.data.data.map(item => item.name);
    });
  },
  components: {
    Province,
    hot,
    Category
  }
};
</script>
