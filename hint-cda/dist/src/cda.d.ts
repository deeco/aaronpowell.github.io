import { HintContext } from 'hint/dist/src/lib/hint-context';
import { IHint } from 'hint/dist/src/lib/types';
export default class CdaHint implements IHint {
    static readonly meta: import("hint/dist/src/lib/types").HintMetadata;
    constructor(context: HintContext);
}
