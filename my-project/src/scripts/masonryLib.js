import Masonry from "masonry-layout";
import { noteContainer } from "./main";

export let masonry;

export function initMasonry() {
  masonry = new Masonry(noteContainer, {
    itemSelector: ".note-card",
    columnWidth: ".note-card",
    gutter: 16,
  });
}
