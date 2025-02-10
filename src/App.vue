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
import BrandIdentity from "@/components/BrandIdentity.vue";
import CraftingVision from "@/components/CraftingVision.vue";
import ServicesSection from "@/components/ServicesSection.vue";
import HappyStories from "@/components/HappyStories.vue";
import ContactSection from "@/components/ContactSection.vue";
import StayUpdates from "@/components/StayUpdates.vue";

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
