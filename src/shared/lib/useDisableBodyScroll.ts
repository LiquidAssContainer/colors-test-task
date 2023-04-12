import { ComputedRef, Ref, watchEffect } from 'vue';

export const useDisableBodyScroll = (isDisabled: Ref | ComputedRef) => {
  watchEffect(() => {
    console.log('watch');
    document.body.style.overflow = isDisabled.value ? 'hidden' : 'unset';
  });
};
