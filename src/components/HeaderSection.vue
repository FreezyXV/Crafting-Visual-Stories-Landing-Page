<template>
  <header>
    <router-link to="/">
      <img
        src="@/assets/Images/MainLogo.svg"
        alt="Main Logo"
        class="MainLogo"
      />
    </router-link>

    <button class="hamburger" @click="toggleMenu">
      <img
        :src="isMenuOpen ? closeIcon : menuIcon"
        :alt="isMenuOpen ? 'Close Menu' : 'Open Menu'"
        class="hamburgerIcon"
      />
    </button>

    <nav :class="['navMenu', { open: isMenuOpen }]" @click.self="toggleMenu">
      <ul>
        <li><router-link to="/" @click="toggleMenu">Home</router-link></li>
        <li>
          <router-link to="/services" @click="toggleMenu">Services</router-link>
        </li>
        <li>
          <router-link to="/stories" @click="toggleMenu">Stories</router-link>
        </li>
        <li>
          <router-link to="/contact" @click="toggleMenu">Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import menuIcon from "@/assets/Images/hamburger1.svg";
import closeIcon from "@/assets/Images/call.svg";

export default {
  name: "HeaderComponent",
  data() {
    return {
      isMenuOpen: false,
      menuIcon,
      closeIcon,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.MainLogo {
  height: 50px;
}

.hamburger {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.hamburgerIcon {
  width: 35px;
  height: 35px;
  transition: transform 0.3s ease;
}

.navMenu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 250px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navMenu.open {
  right: 0;
}

.navMenu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.navMenu li {
  margin: 20px 0;
}

.navMenu a {
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  transition: color 0.3s ease;
}

.navMenu a:hover {
  color: #4361ee;
}

@media screen and (min-width: 1024px) {
  .hamburger {
    display: none;
  }

  .navMenu {
    position: static;
    height: auto;
    width: auto;
    background: none;
    box-shadow: none;
    display: flex;
    justify-content: flex-end;
  }

  .navMenu ul {
    display: flex;
    gap: 30px;
  }
}
</style>
