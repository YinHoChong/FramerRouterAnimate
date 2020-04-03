import { createStore } from "./storeKoen";
import templateCardDpData from "../data/CardDpData";

export default createStore({
  currentDigitalProduct: {},
  digitalProducts: templateCardDpData.valueProps,
  currentApplication: {}
});
