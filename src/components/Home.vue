<template>
  <div class="home">
    <Header />
    <el-container class="content">
      <Menu />
      <el-container>
        <el-main>
          <Bread />
          <div class="count">
            <router-view></router-view>
          </div>
        </el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import Menu from '@/components/common/Menu.vue';
import Bread from '@/components/common/Crumb.vue';
export default {
  name: 'HelloWorld',
  components: {
    Header,
    Footer,
    Menu,
    Bread
  },
  data() {
    return {

    }
  }

}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;

  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;

    .el-main {
      padding: 0;
    }

    .el-footer {
      padding: 0;
    }

    .count {
      margin: 20px 0;
    }
  }
}
</style>
