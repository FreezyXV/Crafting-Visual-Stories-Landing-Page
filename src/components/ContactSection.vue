<template>
  <section class="Contact" id="contactSection">
    <div class="coordinates">
      <div class="coordinatesLine">
        <div class="adressDiv">
          <img src="@/assets/vuesax/outline/location.svg" alt="Location" class="ContactLogo" />
          <p class="ContactSideTitle">Office Address:</p>
        </div>
        <div class="ContactSubTitle">66 Road Broklyn Street, 600</div>
      </div>

      <div class="coordinatesLine">
        <div class="adressDiv">
          <img src="@/assets/vuesax/outline/call.svg" alt="Call" class="ContactLogo" />
          <p class="ContactSideTitle">Contact No:</p>
        </div>
        <div class="ContactSubTitle">(509) 562-1912</div>
      </div>

      <div class="coordinatesLine">
        <div class="adressDiv">
          <img src="@/assets/vuesax/outline/sms.svg" alt="SMS" class="ContactLogo" />
          <p class="ContactSideTitle">Email:</p>
        </div>
        <div class="ContactSubTitle">contact@creativedesign.com</div>
      </div>
    </div>

    <div class="formSection">
      <form @submit.prevent="handleSubmit">
        <div class="form">
          <label for="name">Name*</label><br />
          <input type="text" id="name" name="name" placeholder="Your Name" v-model="formData.name" /><br />

          <label for="mail">Mail*</label><br />
          <input type="email" id="mail" name="mail" placeholder="Your Email" v-model="formData.mail" /><br />

          <label for="company">Company Name*</label><br />
          <input type="text" id="company" name="company" placeholder="Company Name" v-model="formData.company" /><br />

          <label for="phone">Phone No*</label><br />
          <input type="tel" id="phone" name="phone" placeholder="Phone Number" v-model="formData.phone" /><br />

          <button type="submit" class="formButton">
            Submit
            <img
              src="@/assets/vuesax/outline/RightArrowIcon1.svg"
              alt="arrow"
              class="buttonArrow"
            />
          </button>
        </div>
      </form>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
  data() {
    return {
      formData: {
        name: "",
        mail: "",
        company: "",
        phone: "",
      },
      errorMessage: "",
    };
  },
  methods: {
    handleSubmit() {
      // Basic validation
      if (!this.formData.name || !this.formData.mail || !this.formData.company || !this.formData.phone) {
        this.errorMessage = "All fields are required.";
        return;
      }
      this.errorMessage = "";
      console.log("Contact form submitted:", this.formData);
      alert(`Thank you, ${this.formData.name}! We'll contact you soon.`);
      // Reset form
      this.formData = { name: "", mail: "", company: "", phone: "" };
    },
  },
};
</script>


