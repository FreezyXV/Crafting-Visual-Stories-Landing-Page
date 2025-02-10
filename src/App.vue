<template>
  <div id="app">
    <HeaderComponent />
    <router-view></router-view>
    <FooterSection />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    CraftingVision,
    BrandIdentity,
    ServicesSection,
    HappyStories,
    ContactSection,
    StayUpdates,
    FooterSection,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
