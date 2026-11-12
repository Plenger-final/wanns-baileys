import type { AIRich } from './AIRich.js';
import type { RichOneLiner } from './Rich.js';
import type { Button } from './Button.js';
import type { ButtonV2 } from './ButtonV2.js';
import type { ButtonV3 } from './ButtonV3.js';
import type { Carousel } from './Carousel.js';
import type { Poll } from './Poll.js';
import type { A2UI } from './A2UI.js';

/**
 * WannsBaileys — unified builder hub. Every builder stays in its own
 * class/file; this is a single entry point to instantiate them.
 */
export class WannsBaileys {
    constructor(client: any);
    client: any;
    airich(): AIRich;
    wannsAI(): AIRich;
    aiWanns(): AIRich;
    leafRich(): AIRich;
    wannsRich(): AIRich;
    wannsRich(input: RichOneLiner): AIRich;
    richWanns(): AIRich;
    richWanns(input: RichOneLiner): AIRich;
    /** One-liner rich helper: `wanns.rich({ markdown: '# Hi' }).send(jid)`. */
    rich(input?: RichOneLiner): AIRich;
    /** Short WANNS-branded one-liner alias: `wanns.wanns('# Hi').send(jid)`. */
    wanns(input?: RichOneLiner): AIRich;
    /** One-liner rich sender: `await wanns.sendRich(jid, { text: 'Hi' })`. */
    sendRich(jid: string, input?: RichOneLiner, options?: any): Promise<any>;
    /** WANNS-branded sender alias: `await wanns.sendWannsRich(jid, { text: 'Hi' })`. */
    sendWannsRich(jid: string, input?: RichOneLiner, options?: any): Promise<any>;
    button(): Button;
    buttonV2(): ButtonV2;
    buttonV3(): ButtonV3;
    carousel(): Carousel;
    poll(): Poll;
    a2ui(): A2UI;
    /** PascalCase aliases. */
    AIRich(): AIRich;
    Rich(input?: RichOneLiner): AIRich;
    WannsRich(input?: RichOneLiner): AIRich;
    Button(): Button;
    Carousel(): Carousel;
    Poll(): Poll;
    A2UI(): A2UI;
}
