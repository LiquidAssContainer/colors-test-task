import { Ref, onMounted, onUnmounted } from 'vue';

// нагло украдено из интернета
export const useOnClickOutside = (ref: Ref, callback: () => void) => {
  function handleClickOutside(event: Event) {
    if (ref.value && !ref.value.contains(event.target)) {
      callback();
    }
  }

  onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside);
  });
};
