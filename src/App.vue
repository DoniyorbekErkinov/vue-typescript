<template>
  <div>
    <Navbar :tagline="tagline"></Navbar>
    <div class="main">
      <SideBar class="sidebar"></SideBar>
      <RouterView class="home"></RouterView>
    </div>  
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue'
import SideBar from './components/SideBar.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    SideBar
  },
  data() {
    return {
      tagline: 'Test string'
    }
  },
};
</script>
<style>
* {
  margin: 0;
  box-sizing: border-box;
}
.main {
  display: flex;
  justify-content: space-between;
}
.sidebar {
  width: 30%;
}
.home {
  width: 70%;
}
</style>