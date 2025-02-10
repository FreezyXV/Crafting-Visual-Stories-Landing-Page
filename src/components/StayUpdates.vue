<template>
  <section class="StayUpdates">
    <div class="stayUpdatedTitle">
      Stay <span class="UpdatedSubline">updated</span> with blogs
    </div>

    <div class="stayUpdatedGridContainer">
      <div class="stayUpdatedGrid">
        <img
          src="@/assets/Images/StayUpdateImg1.jpg"
          alt="Update 1"
          class="stayUpdatedImg"
        />
        <div class="stayUpdatedGridImgTitle">
          Basic rule of running web agency business
        </div>
        <div class="stayUpdatedGridImgSubtitle">
          Read More
          <img
            src="@/assets/Images/RightArrowBlue.svg"
            alt="Read More"
            class="readMoreArrow"
          />
        </div>
      </div>

      <div class="stayUpdatedGrid">
        <img
          src="@/assets/Images/StayUpdateImg2.jpg"
          alt="Update 2"
          class="stayUpdatedImg"
        />
        <div class="stayUpdatedGridImgTitle">
          Understanding different types of Marketing data
        </div>
        <div class="stayUpdatedGridImgSubtitle">
          Read More
          <img
            src="@/assets/Images/RightArrowBlue.svg"
            alt="Read More"
            class="readMoreArrow"
          />
        </div>
      </div>

      <div class="stayUpdatedGrid">
        <img
          src="@/assets/Images/StayUpdateImg3.jpg"
          alt="Update 3"
          class="stayUpdatedImg"
        />
        <div class="stayUpdatedGridImgTitle">
          Understanding the users need to grow your business
        </div>
        <div class="stayUpdatedGridImgSubtitle">
          Read More
          <img
            src="@/assets/Images/RightArrowBlue.svg"
            alt="Read More"
            class="readMoreArrow"
          />
        </div>
      </div>
    </div>

    <button class="stayUpdatedButton">
      View All
      <img
        src="@/assets/vuesax/outline/RightArrowIcon1.svg"
        alt="arrow"
        class="buttonArrow"
      />
    </button>
  </section>
</template>

<script>
export default {
  name: "StayUpdates",
};
</script>
