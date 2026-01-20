<template>
    <div class="w-full px-2 sm:px-0">
      <TabGroup :selectedIndex="selectedTab" @change="handleTabChange">
        <TabList class="space-x-1 p-1">
          <TabUlator v-for="tab in tabs" :key="tab.id" v-slot="{ selected }" class="px-3 border-gray-300 focus:outline-none border-none">
            <button :class="[
              'w-full rounded-lg px-3 py-2.5 text-lg font-medium leading-5',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'text-black shadow'
                : 'text-gray-500',
            ]">
              {{ tab.name }}
            </button>
          </TabUlator>
          <TabUlator key="4" v-slot="{ selected }" class="px-3 border-gray-300 focus:outline-none border-none">
            <button :class="[
              'w-full rounded-lg px-3 py-2.5 text-lg font-medium leading-5',
              'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'text-black shadow'
                : 'text-gray-500',
            ]">
              Kontakt
            </button>
          </TabUlator>
          <TabUlator key="5" v-show="false" >
          </TabUlator>
          <TabUlator key="6" v-show="false">
          </TabUlator>
          <TabUlator key="7" v-show="false">
          </TabUlator>
         </TabList>
        <TabPanels>
            <TabPanel v-for="tab in tabs" :key="tab.id" class="py-2.5 flex justify-center items-center">          
              <img class="s1:max-w-[400px]" :src="tab.content" :alt="tab.name">
            </TabPanel>
            <TabPanel key="4" class="tab-panel-form py-2.5 text-sm font-medium leading-5">
              <email-form></email-form>
            </TabPanel>
            <TabPanel key="5" class="tab-panel-text text-left rounded-lg  text-sm font-medium">
              <imprint-text class="px-3"></imprint-text>
            </TabPanel>
            <TabPanel key="6" class="tab-panel-text text-left rounded-lg  text-sm font-medium">
              <privacy-text class="px-3"></privacy-text>
            </TabPanel>
            <TabPanel key="7" class="tab-panel-text text-left rounded-lg  text-sm font-medium">
              <cookies-text class="px-3"></cookies-text>
            </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
</template>

<script setup>
  import { selectedTab } from '../store';
  import { watchEffect } from 'vue';
  import { nextTick } from 'vue';

  const handleTabChange = async (index) => {
    selectedTab.value = index;
    await nextTick();
    // console.log("Tab-Index nach nextTick: ", selectedTab.value);
  }

  const tabs = [
    { id: 1, name: 'Development', content: require('@/assets/pi.jpg') , isActive: false },
    { id: 2, name: 'Server', content: require('@/assets/pis.jpg') , isActive: true },
    { id: 3, name: 'Network', content: require('@/assets/net.jpg') , isActive: false },
  ];

  watchEffect(() => {
    // console.log(`Aktueller Tab: ${selectedTab.value}`);
  });
</script>

<script>
import { defineComponent } from 'vue';
import EmailForm from './EmailForm';
import ImprintText from './Imprint';
import PrivacyText from './Privacy';
import CookiesText from './Cookies';

export default defineComponent({
  name: 'TabView',
  components: {
    EmailForm,
    ImprintText,
    PrivacyText,
    CookiesText
  },
  setup() {
  }
})
</script>

<style scoped>
  .tab-panel-form {
    overflow: auto;  /* Fügt Scrollbars hinzu, wenn der Inhalt größer als das Panel ist */
  }

  .tab-panel-text {
    overflow: auto;  /* Fügt Scrollbars hinzu, wenn der Inhalt größer als das Panel ist */
    height:400px;
    background-color:white;
    max-width: 500px;
  }

  .tab-view img {
    height: auto;
  }
</style>