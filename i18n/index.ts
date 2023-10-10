import ru from "./ru";
import kg from "./kg";

export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    ru,
    kg,
  },
}));
