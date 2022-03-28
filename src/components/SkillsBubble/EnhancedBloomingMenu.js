import BloomingMenu from "blooming-menu";

export default class EnhancedBloomingMenu extends BloomingMenu {
  open() {
    super.open();

    if (this.onOpened) {
      this.onOpened(this);
    }
  }

  close() {
    super.close();

    if (this.onClosed) {
      this.onClosed(this);
    }
  }
}
