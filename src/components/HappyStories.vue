<template>
  <section class="HappyStories">
    <h2 class="HappyStoriesTitle">
      Happy <span class="StoriesSubline">stories</span> of our clients
    </h2>

    <div class="bannerArrow">
      <img
        :src="frameLeft"
        alt="Left Arrow"
        class="arrowLeft"
        @click="prevStory"
      />
      <div class="HappyStoriesCart">
        <img
          :src="currentStory.img"
          alt="Happy Story"
          class="HappyStoriesImg"
        />
        <div class="quoteAndText">
          <img :src="quotes" alt="Quotes" class="quottes" />
          <p class="HappyStoriesText">{{ currentStory.text }}</p>
        </div>
      </div>
      <img
        :src="frameRight"
        alt="Right Arrow"
        class="arrowRight"
        @click="nextStory"
      />
    </div>

    <div class="threePoints">
      <span
        v-for="(story, index) in stories"
        :key="index"
        :class="['dot', { active: index === currentStoryIndex }]"
        @click="currentStoryIndex = index"
      ></span>
    </div>

    <div class="ContactTitle">
      <span class="ContactSubline">Contact</span> us today
    </div>
  </section>
</template>

<script>
import frameLeft from "@/assets/vuesax/outline/FrameLeft.svg";
import frameRight from "@/assets/vuesax/outline/FrameRight.svg";
import quotes from "@/assets/Images/Quotes.svg";
import imgLeftHappyStories from "@/assets/Images/ImgLeftHHappyStories.png";
import imgHappyStory2 from "@/assets/Images/ImgLeftHHappyStories.png";

export default {
  name: "HappyStories",
  data() {
    return {
      frameLeft,
      frameRight,
      quotes,

      stories: [
        {
          img: imgLeftHappyStories,
          text: "Their design process is really unique. They collaborated with us on our project. The communication was simple and transparent. They have a talented team of designers who understand insights clearly and continuously push their efforts.",
        },
        {
          img: imgHappyStory2,
          text: "We saw remarkable growth after revamping our brand identity. The team's expertise brought a fresh perspective that resonated with our audience.",
        },
      ],
      currentStoryIndex: 0,
    };
  },
  computed: {
    currentStory() {
      return this.stories[this.currentStoryIndex];
    },
  },
  methods: {
    prevStory() {
      this.currentStoryIndex =
        (this.currentStoryIndex - 1 + this.stories.length) %
        this.stories.length;
    },
    nextStory() {
      this.currentStoryIndex =
        (this.currentStoryIndex + 1) % this.stories.length;
    },
  },
};
</script>
