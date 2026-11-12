import { AIRich } from './AIRich.js'
import { createRich, sendRich } from './Rich.js'
import { Button } from './Button.js'
import { ButtonV2 } from './ButtonV2.js'
import { ButtonV3 } from './ButtonV3.js'
import { Carousel } from './Carousel.js'
import { Poll } from './Poll.js'
import { A2UI } from './A2UI.js'

/**
 * WannsBaileys — unified builder hub.
 *
 * Every builder keeps living in its own class/file; this class only provides
 * a single entry point to construct any of them from one place.
 */
class WannsBaileys {
  constructor(client) {
    if (!client) {
      throw new TypeError(
        'WannsBaileys(client) requires an active Baileys socket/client'
      )
    }

    this.client = client
  }

  // ===== AIRICH =====

  airich() {
    return new AIRich(this.client)
  }

  wannsAI() {
    return new AIRich(this.client)
  }

  aiWanns() {
    return new AIRich(this.client)
  }

  leafRich() {
    return new AIRich(this.client)
  }

  wannsRich(input) {
    return input === undefined ? new AIRich(this.client) : createRich(this.client, input)
  }

  richWanns(input) {
    return input === undefined ? new AIRich(this.client) : createRich(this.client, input)
  }

  /** One-liner rich helper: `wanns.rich({ markdown: '# Hi' }).send(jid)`. */
  rich(input = {}) {
    return createRich(this.client, input)
  }

  /** Short WANNS-branded one-liner alias: `wanns.wanns('# Hi').send(jid)`. */
  wanns(input = {}) {
    return createRich(this.client, input)
  }

  /** One-liner rich sender: `await wanns.sendRich(jid, { text: 'Hi' })`. */
  sendRich(jid, input = {}, options = {}) {
    return sendRich(this.client, jid, input, options)
  }

  /** WANNS-branded sender alias: `await wanns.sendWannsRich(jid, { text: 'Hi' })`. */
  sendWannsRich(jid, input = {}, options = {}) {
    return sendRich(this.client, jid, input, options)
  }

  // ===== BUTTON =====

  button() {
    return new Button(this.client)
  }

  buttonV2() {
    return new ButtonV2(this.client)
  }

  buttonV3() {
    return new ButtonV3(this.client)
  }

  // ===== CAROUSEL =====

  carousel() {
    return new Carousel(this.client)
  }

  // ===== POLL =====

  poll() {
    return new Poll(this.client)
  }

  // ===== A2UI / BLOKS =====

  a2ui() {
    return new A2UI()
  }

  /**
   * PascalCase aliases for developers who prefer class-style naming.
   */
  AIRich() {
    return this.airich()
  }

  Rich(input = {}) {
    return this.rich(input)
  }

  WannsRich(input = {}) {
    return this.wanns(input)
  }

  Button() {
    return this.button()
  }

  Carousel() {
    return this.carousel()
  }

  Poll() {
    return this.poll()
  }

  A2UI() {
    return this.a2ui()
  }
}

export { WannsBaileys }
