<template>
  <div class="wrapper">
    <div class="logo">
      <h1>Logo</h1>
      <span style="padding-left: 15px ;">{{ tagline }}</span>
    </div>
    <ul>
      <router-link  v-for="(item, i) in navlist" :key="i" :to="item.path">{{ item.name }}</router-link>
    </ul>
  </div>
</template>

<script lang="ts">

export default {
  name: 'Navbar',
  props: {
    tagline: {
      type: String,
      default: 'Track everything'
    }
  },
  data() {
    return {
      navlist: [
        {
          name: 'Home',
          path: '/'
        }
      ]
    }
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #b0c9eb;
  padding: 10px 25px;
}
a {
  text-decoration: none;
}
.logo {
  display: flex;
  align-items: center;
}
</style>
