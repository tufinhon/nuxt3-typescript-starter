import { Ref } from 'nuxt/dist/app/compat/capi';
// import { ref } from 'vue';

export const useLogin = (): {
  showPassword: Ref<boolean>;
  email: Ref<string>;
  password: Ref<string>;
  isFormValid: Ref<boolean>;
  // rules: Ref<{ required: string | boolean; email: string | boolean }>;
} => {
  const showPassword = ref(false);
  const email = ref('user@email.com');
  const password = ref('1234567');
  const isFormValid = ref(false);
  // const rules = ref({
  //   required: (value: string): string | boolean =>
  //     !!value || 'Campo requerido.',
  //   email: (value: string): string | boolean => {
  //     const pattern =
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     return pattern.test(value) || 'Correo invalido.';
  //   }
  // });

  return {
    showPassword,
    email,
    password,
    isFormValid
    //    rules
  };
};

// export default useLogin;
