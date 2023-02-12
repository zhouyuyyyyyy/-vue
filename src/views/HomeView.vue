<template>
<div>
    <TopNav/>
    <SwiperTop/>
    <IconList/>
    <Gedan/>
</div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/home/TopNav.vue';
import SwiperTop from '@/components/home/SwiperTop.vue';
import IconList from '@/components/home/IconList.vue';
import Gedan from '@/components/home/Gedan';

export default {
  name: 'Home',
  components: {
    TopNav,
    SwiperTop,
    IconList,
    Gedan,
    
  }
}
</script>
