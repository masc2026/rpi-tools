import { ref } from 'vue';

export const selectedTab = ref(0);

export function changeTab(index) {
  selectedTab.value = index;
}