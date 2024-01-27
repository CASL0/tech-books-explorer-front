import { createI18n } from "vue-i18n";
import ja from "@/locales/ja";

export const i18n = createI18n({
  locale: "ja",
  messages: { ja },
  globalInjection: true,
  legacy: false,
});
