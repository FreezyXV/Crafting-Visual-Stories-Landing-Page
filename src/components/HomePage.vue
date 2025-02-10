<template>
    <div>
      <CraftingVision />
      <BrandIdentity />
      <ServicesSection />
      <HappyStories />
      <ContactSection />
      <StayUpdates />
    </div>
  </template>
  
  <script>
  import CraftingVision from "@/components/CraftingVision.vue";
  import BrandIdentity from "@/components/BrandIdentity.vue";
  import ServicesSection from "@/components/ServicesSection.vue";
  import HappyStories from "@/components/HappyStories.vue";
  import ContactSection from "@/components/ContactSection.vue";
  import StayUpdates from "@/components/StayUpdates.vue";
  
  export default {
    name: "HomePage",
    components: {
      CraftingVision,
      BrandIdentity,
      ServicesSection,
      HappyStories,
      ContactSection,
      StayUpdates,
    },
  };
  </script>
  