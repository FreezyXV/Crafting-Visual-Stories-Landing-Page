<template>
  <section class="craftingVision">
    <div class="leftPart1">
      <div class="textCrafting">
        Crafting
        <span class="CraftingSubline"> Visual </span>
        Stories: <br />
        Unleashing Creative Essence
      </div>
      <button class="LestTalk" @click="openContactModal">
        Let's talk
        <img
          src="@/assets/vuesax/outline/RightArrowIcon1.svg"
          alt="arrow"
          class="buttonArrow"
        />
      </button>
    </div>
    <div class="rowsAndIMG">
      <img
        src="@/assets/vuesax/outline/RowsCont1.svg"
        alt="Rows"
        class="rowsDots"
      />
      <img
        src="@/assets/Images/WorkingWoman.jpg"
        alt="Working Woman"
        class="workingWomanImg"
      />
    </div>
    <div
      v-if="showContactModal"
      class="modalOverlay"
      @click.self="closeContactModal"
    >
      <div class="modalContent">
        <h3>Contact Us</h3>
        <ContactSection />
        <button @click="closeContactModal">Close</button>
      </div>
    </div>
  </section>
</template>

<script>
import ContactSection from "./ContactSection.vue";
export default {
  name: "CraftingVision",
  components: { ContactSection },
  data() {
    return {
      showContactModal: false,
    };
  },
  methods: {
    openContactModal() {
      this.showContactModal = true;
    },
    closeContactModal() {
      this.showContactModal = false;
    },
  },
};
</script>

<style scoped>
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modalContent {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
}
</style>
