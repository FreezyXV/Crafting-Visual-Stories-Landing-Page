<template>
  <section class="Services">
    <div class="ServicesTitle">
      Our <span class="ServiceSubline">Services</span>
    </div>
    <div class="rectangleDiv">
      <div class="designRectangle1">
        <img
          src="@/assets/Images/Rectangle1.jpg"
          alt="Logo Design"
          class="rectangle"
        />
        <div class="logoRectangleDiv">
          <img
            src="@/assets/vuesax/outline/pen-tool-2.svg"
            alt="Pen Tool"
            class="vuesaxLogo"
          />
          <p>Logo Design</p>
        </div>
        <div class="RequestQuoteDiv">
          Request a quote
          <img
            src="@/assets/vuesax/outline/RightArrowIcon1.svg"
            alt="Right Arrow"
            class="RightArrow"
          />
        </div>
      </div>

      <div class="designRectangle2">
        <img
          src="@/assets/Images/Rectangle2.jpg"
          alt="Development"
          class="rectangle"
        />
        <div class="logoRectangleDiv">
          <img
            src="@/assets/vuesax/outline/scroll.svg"
            alt="Scroll Icon"
            class="vuesaxLogo"
          />
          <p>Development</p>
        </div>
        <div class="RequestQuoteDiv">
          Request a quote
          <img
            src="@/assets/vuesax/outline/RightArrowIcon1.svg"
            alt="Right Arrow"
            class="RightArrow"
          />
        </div>
      </div>

      <div class="designRectangle3">
        <img
          src="@/assets/Images/Rectangle3.jpg"
          alt="UI/UX Design"
          class="rectangle"
        />
        <div class="logoRectangleDiv">
          <img
            src="@/assets/vuesax/outline/pen-tool-2.svg"
            alt="Pen Tool"
            class="vuesaxLogo"
          />
          <p>UI/UX Design</p>
        </div>
        <div class="RequestQuoteDiv">
          Request a quote
          <img
            src="@/assets/vuesax/outline/RightArrowIcon1.svg"
            alt="Right Arrow"
            class="RightArrow"
          />
        </div>
      </div>

      <div class="designRectangle4">
        <img
          src="@/assets/Images/Rectangle4.jpg"
          alt="Digital Marketing"
          class="rectangle"
        />
        <div class="logoRectangleDiv">
          <img
            src="@/assets/vuesax/outline/scroll.svg"
            alt="Scroll Icon"
            class="vuesaxLogo"
          />
          <p>Digital Marketing</p>
        </div>
        <div class="RequestQuoteDiv">
          Request a quote
          <img
            src="@/assets/vuesax/outline/RightArrowIcon1.svg"
            alt="Right Arrow"
            class="RightArrow"
          />
        </div>
      </div>

      <div class="designRectangle5">
        <img
          src="@/assets/Images/Rectangle5.jpg"
          alt="Content Writing"
          class="rectangle"
        />
        <div class="logoRectangleDiv">
          <img
            src="@/assets/vuesax/outline/document-text.svg"
            alt="Document Icon"
            class="vuesaxLogo"
          />
          <p>Content Writing</p>
        </div>
        <div class="RequestQuoteDiv">
          Request a quote
          <img
            src="@/assets/vuesax/outline/RightArrowIcon1.svg"
            alt="Right Arrow"
            class="RightArrow"
          />
        </div>
      </div>

      <div class="designRectangle6">
        <img
          src="@/assets/Images/Rectangle6.jpg"
          alt="Email Marketing"
          class="rectangle"
        />
        <div class="logoRectangleDiv">
          <img
            src="@/assets/vuesax/outline/sms-edit.svg"
            alt="Email Icon"
            class="vuesaxLogo"
          />
          <p>Email Marketing</p>
        </div>
        <div class="RequestQuoteDiv">
          Request a quote
          <img
            src="@/assets/vuesax/outline/RightArrowIcon1.svg"
            alt="Right Arrow"
            class="RightArrow"
          />
        </div>
      </div>

      <div class="designRectangle7">
        <img
          src="@/assets/Images/Rectangle7.jpg"
          alt="Motion Design"
          class="rectangle"
        />
        <div class="logoRectangleDiv">
          <img
            src="@/assets/vuesax/outline/tag-right.svg"
            alt="Tag Icon"
            class="vuesaxLogo"
          />
          <p>Motion Design</p>
        </div>
        <div class="RequestQuoteDiv">
          Request a quote
          <img
            src="@/assets/vuesax/outline/RightArrowIcon1.svg"
            alt="Right Arrow"
            class="RightArrow"
          />
        </div>
      </div>

      <div class="designRectangle8">
        <img
          src="@/assets/Images/Rectangle8.jpg"
          alt="Print Design"
          class="rectangle"
        />
        <div class="logoRectangleDiv">
          <img
            src="@/assets/vuesax/outline/Print Design Logo.svg"
            alt="Print Icon"
            class="vuesaxLogo"
          />
          <p>Print Design</p>
        </div>
        <div class="RequestQuoteDiv">
          Request a quote
          <img
            src="@/assets/vuesax/outline/RightArrowIcon1.svg"
            alt="Right Arrow"
            class="RightArrow"
          />
        </div>
      </div>
    </div>

    <button class="ViewMoreBtn" @click="handleViewMore">
      View more
      <img
        src="@/assets/vuesax/outline/RightArrowIcon1.svg"
        alt="Right Arrow"
        class="RightArrow"
      />
    </button>
  </section>
</template>

<script>
export default {
  name: "ServicesSection",
  data() {
    return {
      services: [
        {
          name: "Logo Design",
          image: "@/assets/Images/Rectangle1.jpg",
          icon: "@/assets/vuesax/outline/pen-tool-2.svg",
          iconAlt: "Pen Tool",
        },
        {
          name: "Development",
          image: "@/assets/Images/Rectangle2.jpg",
          icon: "@/assets/vuesax/outline/scroll.svg",
          iconAlt: "Scroll Icon",
        },
        {
          name: "UI/UX Design",
          image: "@/assets/Images/Rectangle3.jpg",
          icon: "@/assets/vuesax/outline/pen-tool-2.svg",
          iconAlt: "Pen Tool",
        },
        {
          name: "Digital Marketing",
          image: "@/assets/Images/Rectangle4.jpg",
          icon: "@/assets/vuesax/outline/scroll.svg",
          iconAlt: "Scroll Icon",
        },
        {
          name: "Content Writing",
          image: "@/assets/Images/Rectangle5.jpg",
          icon: "@/assets/vuesax/outline/document-text.svg",
          iconAlt: "Document Icon",
        },
        {
          name: "Email Marketing",
          image: "@/assets/Images/Rectangle6.jpg",
          icon: "@/assets/vuesax/outline/sms-edit.svg",
          iconAlt: "Email Icon",
        },
        {
          name: "Motion Design",
          image: "@/assets/Images/Rectangle7.jpg",
          icon: "@/assets/vuesax/outline/tag-right.svg",
          iconAlt: "Tag Icon",
        },
        {
          name: "Print Design",
          image: "@/assets/Images/Rectangle8.jpg",
          icon: "@/assets/vuesax/outline/Print Design Logo.svg",
          iconAlt: "Print Icon",
        },
      ],
      showQuoteModal: false,
      selectedService: {},
      quoteForm: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    handleViewMore() {
      alert("Loading more services (demo)...");
    },
    openQuoteModal(service) {
      this.selectedService = service;
      this.showQuoteModal = true;
    },
    closeQuoteModal() {
      this.showQuoteModal = false;
      this.quoteForm = { name: "", email: "", message: "" };
    },
    submitQuote() {
      console.log(
        "Quote submitted for",
        this.selectedService.name,
        "with data:",
        this.quoteForm
      );
      alert(
        `Thank you, ${this.quoteForm.name}! Your quote request for ${this.selectedService.name} has been submitted.`
      );
      this.closeQuoteModal();
    },
  },
};
</script>

<style scoped>
[class^="designRectangle"] {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

[class^="designRectangle"]:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
