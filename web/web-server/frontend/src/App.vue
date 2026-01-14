<template>
  <div class="content-container">
    <title-view></title-view>
  </div>
  <div class="content-container">
    <tab-view></tab-view>
  </div>
  <div class="impressum-container">
    <footer aria-label="Fußzeile">
        © 2026 Max Mustermann | <a href="#" @click="sendChangeToContact">Kontakt</a> | <a href="#" @click="sendChangeToCookies">Cookies</a> | <a href="#" @click="sendChangeToImprint">Impressum</a> | <a href="#" @click="sendChangeToPrivacy">Datenschutz</a>
    </footer>
  </div>
</template>

<script>
import { changeTab } from './store';
import { defineComponent } from 'vue';
import { useFavicon } from '@vueuse/core'
import { onMounted } from 'vue';
import TitleView from './components/TitleView'
import TabView from './components/TabView'
import faviconImage from '@/assets/logo.png';

export default defineComponent({
  name: 'App',
  components: {
    TitleView,
    TabView
  },
  methods: {
    sendChangeToCookies() {
      changeTab(6);
    },
    sendChangeToPrivacy() {
      changeTab(5);
    },
    sendChangeToImprint() {
      changeTab(4);
    },
    sendChangeToContact() {
      changeTab(3);
    }
  },
  setup() {
    const source = faviconImage;
    useFavicon(source);
    onMounted(() => {
      const hash = window.location.hash.replace('#', '');
      switch (hash) {
        case 'contact':
          changeTab(3);
          break;
        case 'impressum':
          changeTab(4);
          break;
        case 'privacy':
          changeTab(5);
          break;
        case 'cookies':
          changeTab(6);
          break;
      }
    });
  }
})
</script>

<style>

html, body {
  height: 100%;
  margin: 0;
}

body {
  display: flex;
  flex-flow: column;
}

footer {
  text-align: center;
}

body {
  font-family: Arial, sans-serif;
  font-size: 1.5em;
  line-height: 1.2;
  color: #9d9d9d;
  min-width: 360px;
}

p {
  display: block;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

button[type="submit"] {
  display: block;
  font-size: 0.8em;
  background-color: #ffe100;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 auto;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

input,
textarea {
  font-size: 16px;
}

.img-middle {
  vertical-align: middle;
}

.svg-hover:hover {
  filter: brightness(80%);
}

.content-container {
  margin: 0 auto;
  margin-bottom: 0.5em;
  max-width: 700px;
  padding: 0.3em;
  text-align: -webkit-center;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.impressum-container {
  margin: 0 auto;
  max-width: 700px;
  padding: 5px 20px 5px 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 0.55em;
}

.impressum-container-flex  {
  display: flex;
}

.middle-column {
  text-align: left;
  padding-right: 1.1em;
  padding-left: 1.1em;
}

.left-column {
  text-align: left;
  padding-right: 1.1em;
}

.right-column {
  text-align: left;
  padding-left: 1.1em;
}

.impressum-container h1,
.impressum-container h2,
.impressum-container h3 {
  color: rgb(0, 0, 0);
}

.impressum-container a {
  color: rgb(0, 123, 255);
  text-decoration: none;
}

.impressum-container a:hover {
  text-decoration: underline;
}

#app {
  flex: 1;
  flex-direction: column;
  margin: 0px 0px 0px 0px;
  padding: 0px;
  background-color: #ffffff;
  box-shadow: 0 10px 10px rgba(112, 112, 112, 0.1);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


@media only screen and (min-width: 465px) {
  .middle-column {
    text-align: left;
    padding-right: 1.2em;
    padding-left: 1.2em;
  }
  
  .left-column {
    text-align: left;
    padding-right: 1.2em;
  }

  .right-column {
    text-align: left;
    padding-left: 1.2em;
  }

  .impressum-container {
    font-size: 0.55em;
    padding: 5px 20px 5px 20px;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
}

@media only screen and (min-width: 510px) {
  #app {
    margin: 0px 0px 0px 0px;
    padding: 0px;
  }
}

@media only screen and (min-width: 620px) {
  #app {
    margin: 0px 40px 0px 40px;
  }
}

</style>