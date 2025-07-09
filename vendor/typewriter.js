// assets/vendor/typewriter.js

class Typewriter {
  constructor(el, words, options = {}) {
    this.el = el;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = options.wait || 2000;
    this.typeSpeed = options.typeSpeed || 100;
    this.deleteSpeed = options.deleteSpeed || 50;
    this.loop = options.loop ?? true;
    this.isDeleting = false;
    this.type();
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    this.txt = this.isDeleting
      ? fullTxt.substring(0, this.txt.length - 1)
      : fullTxt.substring(0, this.txt.length + 1);

    this.el.innerHTML = `<span class="typing">${this.txt}</span><span class="cursor">|</span>`;

    let speed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

    if (!this.isDeleting && this.txt === fullTxt) {
      speed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      speed = 500;
    }

    setTimeout(() => this.type(), speed);
  }
}
