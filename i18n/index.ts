import ru from "./ru";
import ky from "./ky";

export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    ru,
    ky,
  },
}));
