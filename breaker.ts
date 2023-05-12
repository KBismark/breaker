/**
 * The journey to the fastest and most flexible reactive library. 
 * Your apps could be faster. The web can be better.
 */
export const Breaker = function () {
    
    type EventHandlersEventMap ={
        "abort"?: ((this: GlobalEventHandlers, ev: UIEvent,This: ComponentObjects) => any) | null;
        "animationcancel"?: ((this: GlobalEventHandlers, ev: AnimationEvent,This: ComponentObjects) => any) | null;
        "animationend"?: ((this: GlobalEventHandlers, ev: AnimationEvent,This: ComponentObjects) => any) | null;
        "animationiteration"?: ((this: GlobalEventHandlers, ev: AnimationEvent,This: ComponentObjects) => any) | null;
        "animationstart"?: ((this: GlobalEventHandlers, ev: AnimationEvent,This: ComponentObjects) => any) | null;
        "auxclick"?: ((this: GlobalEventHandlers, ev: MouseEvent,This: ComponentObjects) => any) | null;
        "beforeinput"?: ((this: GlobalEventHandlers, ev: InputEvent,This: ComponentObjects) => any) | null;
        "blur"?: ((this: GlobalEventHandlers, ev: FocusEvent,This: ComponentObjects) => any) | null;
        "cancel"?: ((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "canplay"?: ((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "canplaythrough"?: ((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "change"?: ((this: GlobalEventHandlers, ev: UIEvent,This: ComponentObjects) => any) | null;
        "click"?: ((this: GlobalEventHandlers, ev: MouseEvent,This: ComponentObjects) => any) | null;
        "close"?: ((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "compositionend"?: ((this: GlobalEventHandlers, ev: CompositionEvent,This: ComponentObjects) => any) | null;
        "compositionstart"?: ((this: GlobalEventHandlers, ev: CompositionEvent,This: ComponentObjects) => any) | null;
        "compositionupdate"?: ((this: GlobalEventHandlers, ev: CompositionEvent,This: ComponentObjects) => any) | null;
        "contextmenu"?: ((this: GlobalEventHandlers, ev: MouseEvent,This: ComponentObjects) => any) | null;
        "copy"?: ((this: GlobalEventHandlers, ev: ClipboardEvent,This: ComponentObjects) => any) | null;
        "cuechange"?: ((this: GlobalEventHandlers, ev: UIEvent,This: ComponentObjects) => any) | null;
        "cut"?: ((this: GlobalEventHandlers, ev: ClipboardEvent,This: ComponentObjects) => any) | null;
        "dblclick"?: ((this: GlobalEventHandlers, ev: MouseEvent,This: ComponentObjects) => any) | null;
        "drag"?: ((this: GlobalEventHandlers, ev: DragEvent,This: ComponentObjects) => any) | null;
        "dragend"?: ((this: GlobalEventHandlers, ev: DragEvent,This: ComponentObjects) => any) | null;
        "dragenter"?: ((this: GlobalEventHandlers, ev: DragEvent,This: ComponentObjects) => any) | null;
        "dragleave"?:((this: GlobalEventHandlers, ev: DragEvent,This: ComponentObjects) => any) | null;
        "dragover"?:((this: GlobalEventHandlers, ev: DragEvent,This: ComponentObjects) => any) | null;
        "dragstart"?:((this: GlobalEventHandlers, ev: DragEvent,This: ComponentObjects) => any) | null;
        "drop"?:((this: GlobalEventHandlers, ev: DragEvent,This: ComponentObjects) => any) | null;
        "durationchange"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "emptied"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "ended"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "error"?: ((this: GlobalEventHandlers, ev: ErrorEvent,This: ComponentObjects) => any) | null;
        "focus"?:((this: GlobalEventHandlers, ev: FocusEvent,This: ComponentObjects) => any) | null;
        "focusin"?:((this: GlobalEventHandlers, ev: FocusEvent,This: ComponentObjects) => any) | null;
        "focusout"?:((this: GlobalEventHandlers, ev: FocusEvent,This: ComponentObjects) => any) | null;
        "formdata"?:((this: GlobalEventHandlers, ev: FormDataEvent,This: ComponentObjects) => any) | null;
        "gotpointercapture"?:((this: GlobalEventHandlers, ev: PointerEvent,This: ComponentObjects) => any) | null;
        "input"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "invalid"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "keydown"?:((this: GlobalEventHandlers, ev: KeyboardEvent,This: ComponentObjects) => any) | null;
        "keypress"?:((this: GlobalEventHandlers, ev: KeyboardEvent,This: ComponentObjects) => any) | null;
        "keyup"?:((this: GlobalEventHandlers, ev: KeyboardEvent,This: ComponentObjects) => any) | null;
        "load"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "loadeddata"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "loadedmetadata"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "loadstart"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "lostpointercapture"?:((this: GlobalEventHandlers, ev: PointerEvent,This: ComponentObjects) => any) | null;
        "mousedown"?:((this: GlobalEventHandlers, ev: MouseEvent,This: ComponentObjects) => any) | null;
        "mouseenter"?:((this: GlobalEventHandlers, ev: MouseEvent,This: ComponentObjects) => any) | null;
        "mouseleave"?:((this: GlobalEventHandlers, ev: MouseEvent,This: ComponentObjects) => any) | null;
        "mousemove"?:((this: GlobalEventHandlers, ev: MouseEvent,This: ComponentObjects) => any) | null;
        "mouseout"?:((this: GlobalEventHandlers, ev: MouseEvent,This: ComponentObjects) => any) | null;
        "mouseover"?:((this: GlobalEventHandlers, ev: MouseEvent,This: ComponentObjects) => any) | null;
        "mouseup"?:((this: GlobalEventHandlers, ev: MouseEvent,This: ComponentObjects) => any) | null;
        "paste"?:((this: GlobalEventHandlers, ev: ClipboardEvent,This: ComponentObjects) => any) | null;
        "pause"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "play"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "playing"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "pointercancel"?:((this: GlobalEventHandlers, ev: PointerEvent,This: ComponentObjects) => any) | null;
        "pointerdown"?:((this: GlobalEventHandlers, ev: PointerEvent,This: ComponentObjects) => any) | null;
        "pointerenter"?:((this: GlobalEventHandlers, ev: PointerEvent,This: ComponentObjects) => any) | null;
        "pointerleave"?:((this: GlobalEventHandlers, ev: PointerEvent,This: ComponentObjects) => any) | null;
        "pointermove"?:((this: GlobalEventHandlers, ev: PointerEvent,This: ComponentObjects) => any) | null;
        "pointerout"?:((this: GlobalEventHandlers, ev: PointerEvent,This: ComponentObjects) => any) | null;
        "pointerover"?:((this: GlobalEventHandlers, ev: PointerEvent,This: ComponentObjects) => any) | null;
        "pointerup"?:((this: GlobalEventHandlers, ev: PointerEvent,This: ComponentObjects) => any) | null;
        "progress"?:((this: GlobalEventHandlers, ev: ProgressEvent,This: ComponentObjects) => any) | null;
        "ratechange"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "reset"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "resize"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "scroll"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "securitypolicyviolation"?:((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent,This: ComponentObjects) => any) | null;
        "seeked"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "seeking"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "select"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "selectionchange"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "selectstart"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "slotchange"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "stalled"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "submit"?:((this: GlobalEventHandlers, ev: SubmitEvent,This: ComponentObjects) => any) | null;
        "suspend"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "timeupdate"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "toggle"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "touchcancel"?:((this: GlobalEventHandlers, ev: TouchEvent,This: ComponentObjects) => any) | null;
        "touchend"?:((this: GlobalEventHandlers, ev: TouchEvent,This: ComponentObjects) => any) | null;
        "touchmove"?:((this: GlobalEventHandlers, ev: TouchEvent,This: ComponentObjects) => any) | null;
        "touchstart"?:((this: GlobalEventHandlers, ev: TouchEvent,This: ComponentObjects) => any) | null;
        "transitioncancel"?:((this: GlobalEventHandlers, ev: TransitionEvent,This: ComponentObjects) => any) | null;
        "transitionend"?:((this: GlobalEventHandlers, ev: TransitionEvent,This: ComponentObjects) => any) | null;
        "transitionrun"?:((this: GlobalEventHandlers, ev: TransitionEvent,This: ComponentObjects) => any) | null;
        "transitionstart"?:((this: GlobalEventHandlers, ev: TransitionEvent,This: ComponentObjects) => any) | null;
        "volumechange"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "waiting"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "webkitanimationend"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "webkitanimationiteration"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "webkitanimationstart"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "webkittransitionend"?:((this: GlobalEventHandlers, ev: Event,This: ComponentObjects) => any) | null;
        "wheel"?:((this: GlobalEventHandlers, ev: WheelEvent,This: ComponentObjects) => any) | null;
    }
    
    
    interface HTMLAttributes {
        // Standard HTML Attributes
        accessKey?: string | undefined;
        contentEditable?: boolean | "inherit" | undefined;
        contextMenu?: string | undefined;
        dir?: string | undefined;
        draggable?: boolean | undefined;
        hidden?: boolean | undefined;
        id?: string | undefined;
        lang?: string | undefined;
        slot?: string | undefined;
        spellCheck?: boolean | undefined;
        tabindex?: number | undefined;
        title?: string | undefined;
        translate?: "yes" | "no" | undefined;
      
        // Other Standard HTML Attributes
        accept?: string | undefined;
        acceptCharset?: string | undefined;
        action?: string | undefined;
        allowFullScreen?: boolean | undefined;
        allowTransparency?: boolean | undefined;
        alt?: string | undefined;
        as?: string | undefined;
        async?: boolean | undefined;
        autocomplete?: string | undefined;
        autofocus?: boolean | undefined;
        autoplay?: boolean | undefined;
        capture?: boolean | "user" | "environment" | undefined;
        cellPadding?: number | string | undefined;
        cellSpacing?: number | string | undefined;
        charSet?: string | undefined;
        challenge?: string | undefined;
        checked?: boolean | undefined;
        cite?: string | undefined;
        cols?: number | undefined;
        colSpan?: number | undefined;
        content?: string | undefined;
        controls?: boolean | undefined;
        coords?: string | undefined;
        crossOrigin?: string | undefined;
        data?: string | undefined;
        dateTime?: string | undefined;
        default?: boolean | undefined;
        defer?: boolean | undefined;
        disabled?: boolean | undefined;
        download?: any;
        encType?: string | undefined;
        form?: string | undefined;
        formAction?: string | undefined;
        formEncType?: string | undefined;
        formMethod?: string | undefined;
        formNoValidate?: boolean | undefined;
        formTarget?: string | undefined;
        frameBorder?: number | string | undefined;
        headers?: string | undefined;
        height?: number | string | undefined;
        high?: number | undefined;
        href?: string | undefined;
        hrefLang?: string | undefined;
        for?: string | undefined;
        httpEquiv?: string | undefined;
        integrity?: string | undefined;
        keyParams?: string | undefined;
        keyType?: string | undefined;
        kind?: string | undefined;
        label?: string | undefined;
        list?: string | undefined;
        loop?: boolean | undefined;
        low?: number | undefined;
        manifest?: string | undefined;
        marginHeight?: number | undefined;
        marginWidth?: number | undefined;
        max?: number | string | undefined;
        maxLength?: number | undefined;
        media?: string | undefined;
        mediaGroup?: string | undefined;
        method?: string | undefined;
        min?: number | string | undefined;
        minLength?: number | undefined;
        multiple?: boolean | undefined;
        muted?: boolean | undefined;
        name?: string | undefined;
        nonce?: string | undefined;
        noValidate?: boolean | undefined;
        open?: boolean | undefined;
        optimum?: number | undefined;
        pattern?: string | undefined;
        placeholder?: string | undefined;
        playsInline?: boolean | undefined;
        poster?: string | undefined;
        preload?: string | undefined;
        readOnly?: boolean | undefined;
        rel?: string | undefined;
        required?: boolean | undefined;
        reversed?: boolean | undefined;
        rows?: number | undefined;
        rowSpan?: number | undefined;
        sandbox?: string | undefined;
        scope?: string | undefined;
        scoped?: boolean | undefined;
        scrolling?: string | undefined;
        seamless?: boolean | undefined;
        selected?: boolean | undefined;
        shape?: string | undefined;
        size?: number | undefined;
        sizes?: string | undefined;
        span?: number | undefined;
        src?: string | undefined;
        srcDoc?: string | undefined;
        srcLang?: string | undefined;
        srcSet?: string | undefined;
        start?: number | undefined;
        step?: number | string | undefined;
        summary?: string | undefined;
        target?: string | undefined;
        type?: string | undefined;
        value?: string | number | undefined;
        width?: number | string | undefined;
        wmode?: string | undefined;
        wrap?: string | undefined;
      
        // Unknown
        radioGroup?: string | undefined; // <command>, <menuitem>
      
        // WAI-ARIA
        role?: AriaRole | undefined;
      
        // RDFa Attributes
        about?: string | undefined;
        datatype?: string | undefined;
        inlist?: any;
        prefix?: string | undefined;
        property?: string | undefined;
        resource?: string | undefined;
        typeof?: string | undefined;
        vocab?: string | undefined;
      
        // Non-standard Attributes
        autocapitalize?: string | undefined;
        autoCorrect?: string | undefined;
        autoSave?: string | undefined;
        color?: string | undefined;
        results?: number | undefined;
        security?: string | undefined;
        unselectable?: "on" | "off" | undefined;
      
        // Living Standard
        /**
         * Hints at the type of data that might be entered by the user while editing the element or its contents
         * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
         */
        inputMode?:
          | "none"
          | "text"
          | "tel"
          | "url"
          | "email"
          | "numeric"
          | "decimal"
          | "search"
          | undefined;
        /**
         * Specify that a standard HTML element should behave like a defined custom built-in element
         * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
         */
        is?: string | undefined;
    }
      
    type AriaRole =
      | "alert"
      | "alertdialog"
      | "application"
      | "article"
      | "banner"
      | "button"
      | "cell"
      | "checkbox"
      | "columnheader"
      | "combobox"
      | "complementary"
      | "contentinfo"
      | "definition"
      | "dialog"
      | "directory"
      | "document"
      | "feed"
      | "figure"
      | "form"
      | "grid"
      | "gridcell"
      | "group"
      | "heading"
      | "img"
      | "link"
      | "list"
      | "listbox"
      | "listitem"
      | "log"
      | "main"
      | "marquee"
      | "math"
      | "menu"
      | "menubar"
      | "menuitem"
      | "menuitemcheckbox"
      | "menuitemradio"
      | "navigation"
      | "none"
      | "note"
      | "option"
      | "presentation"
      | "progressbar"
      | "radio"
      | "radiogroup"
      | "region"
      | "row"
      | "rowgroup"
      | "rowheader"
      | "scrollbar"
      | "search"
      | "searchbox"
      | "separator"
      | "slider"
      | "spinbutton"
      | "status"
      | "switch"
      | "tab"
      | "table"
      | "tablist"
      | "tabpanel"
      | "term"
      | "textbox"
      | "timer"
      | "toolbar"
      | "tooltip"
      | "tree"
      | "treegrid"
      | "treeitem";
    
    type Lists = Array<String | Component>;
    type DynamicNode<T> = {
        position: Array<number>;
        index: number;
        method(this:T,args: any): Lists | String | Component;
    }
    type KeyedNode = {
        position: Array<number>;
        index: number;
    }
    
    type Style = string;
    interface Keyed  {
        style?: Style;
        class?: String;
        attributes?: ARIAMixin | GlobalEventHandlers | HTMLAttributes | AnyProp;
        $events: EventHandlersEventMap;
    }
    interface AnyProp {
        [k:string]:any
    }
        type Valueof<T> = T[keyof T]
        type va<T> = string;
        interface ComponentObjects{
            [k: string]: any;
        elements? : {
         [key:string]:Keyed
        }
        [k: symbol]: ComponentInstance
        onCreation?: (this: this, ...args: any[]) => void;
        onParentMounting?: (this: this, ...args: any[]) => void;
        onStateUpdates?: (this: this, ...args: any[]) => void;
        onMount?: (this: this) => void;
        willDismount?: (this: this) => void;
        onDismount?: (this: this) => void;
        beforeUpdates?: (this: this) => void;
            
        }
    type NodeGetter = <U,T=(this: ComponentObjects, args: U) => any>(el: HTMLElement, dynNode: T, args: U,dynIndex:number, This: ComponentObjects) => T;
    type AttributeSetter = (args: any, _$: HTMLElement, _$ev: typeof eventHandler, _$id: number,_$get:NodeGetter,_$dyn:any) => [{ [k: string | number]: Keyed }, { [k: number]: HTMLElement }];    
    type BreakerComponentInstanceObject = { [k: symbol]: { fnId: number, id: number ,out?:BreakerElement},isComponent:true };
    interface BreakerComponent{
        (...args:Array<any>):BreakerElement;
        instance(...args: any[]): BreakerComponentInstanceObject
        }
    //type BreakerComponent = (...args:Array<any>)=>BreakerElement
    interface BreakerElement {
        [k: symbol]: {
            node: HTMLElement | any,
            [k:string]:any
        }
        //instance?(...args: any[]): BreakerComponentInstanceObject
    }
    
    interface Component extends Function{
        (this:ComponentObjects,...args:any[]):BreakerElement;
        //instance(...args: any[]): BreakerComponentInstanceObject
    }
    
        const renderingComponent: { id?: number, dynIndex?: number } = { id: undefined, dynIndex: undefined };
        const componentsTrashBin = new Set();
        const ListsTrashBin = new Set();
        const CreatedComponents = new Map();
        const Blocks = new Map();
        const MountBucket = new Map();
        const TemplateBucket = new Map();
        const standAloneUpdates = new Map();
        const listUpdates = new Map();
        let updates_initiated = false;
        let updating = false;
        const internal = Symbol();
        const internal_ins = Symbol();
        let dinstinctComponents = 0;
        let componentsID = 0;
        let listCount = 0;
        const STATUS = {
            alive: 1,
            hibernated: 2,
            dead:3
        }
        const NODETYPES = {
            text: 1,
            component: 2,
            list: 3
        }
        let global_template: HTMLTemplateElement | undefined = undefined;
        
       
        class Breaker {
            constructor() {
                this.ui = new UI()
            }
            ui: UI;
           
            create(htmlMethod: () => string, Setter: AttributeSetter, comp: any): BreakerElement {
                const _internal_ = comp[internal];
                comp[internal] = null;
                const compClass = CreatedComponents.get(_internal_.fnId);
                compClass.setup(htmlMethod, Setter, comp);
                const node = compClass.getTemplate();
                comp = Object.create(comp);
                comp[internal] = _internal_;
                _internal_.dyn = {};
                Blocks.set(_internal_.id, comp);
                run(comp);
                const kNdN = Setter.apply(comp,[_internal_.Args[0], node, eventHandler, _internal_.id,get,undefined]);
                _internal_.keyed = kNdN[0];
                compClass.dn = kNdN[1];
                return node;
               // return setAttributes(_internal_.id, compClass.kn, _internal_.keyed, comp.elements || {}, compClass.template.cloneNode(true));
            }
            
        }
    
        function clone(_internal_: any): any {
            const compClass = CreatedComponents.get(_internal_.fnId);
            const node = compClass.getTemplate();
            const comp = Object.create(compClass.proto);
            comp[internal] = _internal_;
            _internal_.dyn = {};
            Blocks.set(_internal_.id, comp);
            run(comp);
            const kNdN = compClass.setAttr.apply(comp,[_internal_.Args[0], node, eventHandler, _internal_.id,get,compClass.dn]);
            _internal_.keyed = kNdN[0];
            //_internal_.init_dyn = kNdN[1];
            return node;
            //return setAttributes(_internal_.id, compClass.kn, _internal_.keyed, comp.elements || {}, compClass.template.cloneNode(true));
        }
        function run(t: ComponentObjects) {
            const _internal_ = t[internal];
            const args = _internal_.Args;
            !_internal_.created && t.onCreation && t.onCreation.apply(t, args);
            _internal_.created = true;
            t.onParentMounting && t.onParentMounting.apply(t, args);
            t.onMount && MountBucket.set(_internal_.id, t);
            if (t.public) {
                t.public = t.public.apply(t, args);
            }
           // t.onCreation = undefined;
        }
        const get: NodeGetter = function get(node, dynNode:any,args,i,comp:ComponentObjects) {
            //var l = classDyn.length;
       // if (l) {
           // const comp = Blocks.get(id);
            const _internal_ = comp[internal];
            const id = _internal_.id;
            const dyn = _internal_.dyn;
           // const dn = classDyn;
            //const Args = (comp.state || comp.sharedState) ? undefined : _internal_.Args;
            var value: any, el;
            //for (i = 0; i < l; i++){
    
                renderingComponent.id = id;
                renderingComponent.dynIndex = i;
                value = dynNode.apply(comp, args);
                switch (typeof value) {
                    case "object":
                        if (value) {
                            if ((el = value[internal])) {
                                if (el.type == NODETYPES.list) {
                                    
                                    
                                    //lc = el.nextData;
                                    // if ((value = el.curData.length)) {
                                       
                                    //     node.replaceWith(insertList(el, { i: i, id: id, getList: el.getList }, undefined));
                                    // }
                                    // else {
                                        // el.data.parent = id;
                                        // value = el.pos;
                                        // getNode(node, dn[i].position).replaceWith((value.head = value.tail = document.createTextNode("")));
                                        node.replaceWith(insertList(el, { i: i, id: id }, undefined))
                                    // }
                                    // el.curData = lc;
                                    // el.nextData = undefined;
                                } else {
                                    node.replaceWith(el.node);
                                    el.parent = id;
                                    el.dynIndex = i;
                                }
                                
                                dyn[i] = el;
                                break;
                            }
                        }
                        else {
                            value = "";
                        }
                    default:
                        value = `${value}`;
                        el = document.createTextNode(value);
                        node.replaceWith(el);
                        dyn[i] = { node: el, type: NODETYPES.text, value: value };
                        break;
                }
            //}
            // l = pairs.length;
            // for (i = 0; i < l; i++){
            //     value = pairs[i];
            //     value[0].replaceWith(value[1]);
            // }
            renderingComponent.id = undefined;
            renderingComponent.dynIndex = undefined;
       // }
        
            return dynNode;
        }
    
        class UI {
            constructor() { }
            CreateStyle(...styles: string[]): Style {
                if (styles.length) {
                    return styles.join(";")
                }
                return "";
            }
        
            CreateList<T>(list: Array<T>): List {
                //if (!listTracker) return undefined as any;
                return new List(list);
            }
        
            CreateComponent<T extends Component>(fn: T): T & { instance(...args: any[]): BreakerComponentInstanceObject } {
                var cm = new ComponentClass(fn);
                CreatedComponents.set(cm.id, cm);
    
                const f: any = ComponentMethod.bind({ fnId: cm.id });
                f.instance = getComponentInstance.bind({ fnId: cm.id });
                return f;
            }
    
            CreateApp(pagePath: string, app: BreakerElement, destination: Node | HTMLElement | Element) {
                (destination as any).replaceWith(app[internal].node);
                MountBucket.forEach(function (comp) {
                    comp.onMount.apply(comp)
                    comp.onMount = undefined;
                });
                MountBucket.clear();
                TemplateBucket.forEach(function (compClass) {
                    compClass.template = undefined;
                });
                TemplateBucket.clear();
                global_template = undefined;
            }
    
    
            render(ins: BreakerComponentInstanceObject,args: any): BreakerElement {
                const id = ins[internal_ins].id;
                const comp = Blocks.get(id);
                const _internal_ = comp[internal];
                const compClass = CreatedComponents.get(_internal_.fnId);
                var node: any = undefined;//listTrack;
                var out, el;
                args = _internal_.Args = [args];
                switch (_internal_.status) {
                    case STATUS.dead://Full Mount
                        comp.initArgs = _internal_.InitArgs || comp.initArgs;
                        _internal_.InitArgs = undefined;
                        if (!compClass.proto) {
                            node = compClass.fn.apply(comp, args);
                        } else {
                            node = clone(_internal_);
                        }
                        
                        // comp.onCreation && comp.onCreation.apply(comp, args);
                        // _internal_.created = true;
                        // comp.onParentMounting && comp.onParentMounting.apply(comp, args);
                        out = _internal_.outerValue;
                        out[internal].node = node;
                        _internal_.status = STATUS.alive;
                        //listTrack = listTracker;
                        //listTracker = _internal_.id;
                        // runDynamicnodes(_internal_.id, compClass.dn, _internal_.init_dyn);
                        // _internal_.init_dyn = null;
                        //listTracker = listTrack;
                        return out;
                    case STATUS.alive://Update
                    case STATUS.hibernated:
                        el = _internal_.outerValue;
                        if (el.parent && (renderingComponent.id != el.parent || renderingComponent.dynIndex != el.dynIndex)) {
                            var tmp2 = Blocks.get(el.parent)[internal].dyn;
                            if (el.listItem) {
                                var e = el.getList();
                                var j = e.curData.indexOf(el);
                                e.curData[j] = "";
                                if (j == 0) {
                                    el.node.replaceWith((e.pos.head = document.createTextNode("")));
                                } else if (j == e.curData.length - 1) {
                                    el.node.replaceWith((e.pos.tail = document.createTextNode("")));
                                } else {
                                    el.node.replaceWith(document.createTextNode(""));
                                }
                                el.listItem = false;
                                el.getList = undefined;
                            } else {
                                tmp2[(j = el.dynIndex)].node.replaceWith((e = document.createTextNode("")));
                                tmp2[j] = { node: e, type: NODETYPES.text, value: "" };
                            }
                            el.parent = 0;
                            el.dynIndex = 0;
                        
                        }
                        updateDynamicnodes(_internal_.id, _internal_.fnId, undefined);
                        return el;
                    default://Partial mount when hibernated
                        return node as BreakerElement;
                }
    
            }
    
            setState(This: ComponentObjects, state: { [k: string]: any }) {
                const _internal_ = This[internal];
                if (!This.state) {
                    This.state = state;
                    updateDynamicnodes(_internal_.id, _internal_.fnId, undefined);
                    return;
                };
                This.state = { ...This.state, ...state };
                updateDynamicnodes(_internal_.id, _internal_.fnId, undefined);
            }
    
            setClass(This: ComponentObjects, key: string, classObject: { [k: string]: 1 | 0 }) {
                const _internal_ = This[internal];
                B.ui.update(_internal_.ins, internal, key, classObject);
            }
    
    
            getPublicData(ins: BreakerComponentInstanceObject) {
                return Blocks.get(ins[internal_ins].id).public || {};
            }
    
            getInstance(This: ComponentObjects) {
                return This[internal].ins;
            }
    
            getParentInstance(This: ComponentObjects) {
                const parent = This[internal].outerValue[internal].parent;
                return Blocks.get(parent)[internal].ins;
            }
    
            update(ins: BreakerComponentInstanceObject, ...args: any) {
                const id = ins[internal_ins].id;
                const pre = standAloneUpdates.get(id);
                if (args.length && args[0] == internal) {
                    if (!pre) {
                        standAloneUpdates.set(id, { ins: ins, main: false, args: undefined, keys: { [args[1]]: { class: args[2] } } });
                        if (!updates_initiated) {
                            updates_initiated = true
                            setTimeout(update, 0);
                        }
                    } else {
                        pre.key[args[1]] = pre.key[args[1]] || { class: {} };
                        pre.key[args[1]].class = { ...pre.key[args[1]].class, ...args[2] };
                    }
                    return;
                }
                args = args.length ? args[0] : undefined;
                if (pre) {
                    pre.main = true;
                    pre.args = args;
                    return;
                }
                standAloneUpdates.set(id, { ins: ins, main: true, args: args, keys:{} });
                if (!updates_initiated) {
                    updates_initiated = true;
                    setTimeout(update, 0);
                }
            }
    
        }
    
        function update() {
            updating = true;
            standAloneUpdates.forEach(function (value, k) {
                if (value.main) {
                    B.ui.render(value.ins, value.args);
                }
                let keys = value.keys, key, cls;
                let keyed = Blocks.get(k)[internal].keyed,node;
                for (key in keys) {
                    if (keyed[key]) {
                        node = keyed[key].node;
                        cls = keys[key].class;
                        let add = new Set((node.getAttribute("class")||'').split(' '));
                        for (let classname in cls) {
                            if (cls[classname]) {
                                add.add(classname);
                            } else {
                                add.delete(classname);
                            }
                        }
                        node.setAttribute('class',Array.from(add).join(' '))
                    }
                }
            })
            standAloneUpdates.clear();
            listUpdates.forEach(function (value) {
                let parentData = { id: value.pos.parent, i: value.pos.dynIndex };
                updateList(value, parentData, undefined);
            })
            listUpdates.clear();
            updating = updates_initiated = false;
        }
        
        class ComponentClass {
            constructor(fn: Function) {
                this.fn = fn;
                dinstinctComponents++;
                this.id = dinstinctComponents;
            }
            template: any = undefined;
            dn: any = undefined;
            //kn: { [k: string]: KeyedNode } = {};
            fn?: Function = undefined;
            id: number = 0;
            proto: any = undefined;
            html: any = undefined;
            setAttr: any = undefined;
    
            setup(htmlMethod: ()=>string,setter:AttributeSetter ,proto:any) {
                //this.dn = dn;
                this.proto = proto;
                this.html = htmlMethod;
                this.setAttr = setter;
            }
            getTemplate() {
                if (!this.template) {
                    if (!global_template) {
                        global_template = document.createElement("template");
                    }
                    global_template.innerHTML = this.html();
                    this.template = global_template.content.firstElementChild;
                    TemplateBucket.set(this.id, this);
                }
                return this.template.cloneNode(true);
            }
    
        };
    
        class ComponentInstance {
            constructor({ methodId, args, initArgs }: { methodId: number; args: any, initArgs?: any }) {
                componentsID++;
                this.id = componentsID;
                const b = this.outerValue[internal];
                b.id = componentsID;
                this.fnId = methodId;
                this.Args = args;
                this.InitArgs = initArgs
                const a = this.ins[internal_ins];
                a.fnId = methodId;;
                a.id = componentsID;
                a.out = b;
            }
            outerValue: BreakerElement = {
                [internal]: {
                    type: NODETYPES.component,
                    parent: 0,
                    dynIndex: 0,
                    listItem: false,
                    listIndex: 0,
                    getList: undefined,
                    node: undefined,
                    id: 0
                }
            }
            ins: BreakerComponentInstanceObject = {[internal_ins]:{fnId:0,id:0,out:undefined},isComponent:true}
            created?= false;
            status = STATUS.dead;
            parent = 0;
            id = 0;
            fnId = 0;
            dyn: any = {};
            Args: any = undefined;
            InitArgs: any = undefined;
            init_dyn: any = undefined;
            keyed: { [k: string]: { $events: any, eventcallers: any, style: any, class: any, attributes: any } } | null = null;
        }
    
    
        type ListInternal = {
            id: number
            type: number;
            stack: any[],
            length: number,
            preData: (String | BreakerComponent)[],
            nextData: any,
            curData: (string | BreakerComponentInstanceObject)[],
            getList(): ListInternal
        
            pos: { head?: any, tail?: any, dynIndex?: number, parent?: number }
            runner:any
        }
        
        function getList(this:List) {
            return this[internal]
        }
        function getListItem(item:any) {
            return item&&item[internal_ins] ?item: item==null?"":`${item}`;
        }
        class List {
            constructor(list: any[]) {
                const a = this[internal];
                //a.pos.parent = boundedParentId;
                a.curData = list.map(getListItem);
                listCount++;
                a.id = listCount;
            }
        
            [internal]: ListInternal = {
                getList: getList.bind(this),
                preData: [],
                nextData: [],
                curData: [],
                length: 0,
                stack: [],
                type: NODETYPES.list,
                pos: {
                    head: undefined,
                    tail: undefined,
                    dynIndex: undefined,
                    parent: undefined
                },
                runner: { fn: undefined, data: undefined },
                id:0
            }
            // map<U>(fn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
            map<T>(data: T, fn?: (listItem: string | BreakerComponentInstanceObject,index: number, data: T) => string | BreakerComponentInstanceObject, thisArg?: any): this {
                if (fn) {
                    const _internal_ = this[internal];
                    _internal_.runner.fn = fn.bind(thisArg || null);
                    _internal_.runner.data = data; 
               }
                return this;
            }
            clear() {
                const _internal_ = this[internal];
                _internal_.nextData = [];
            }
            get() {
                return this[internal].curData.slice(0);
            }
            remove(from: number, to?: number ) {
                var  l;
                const _internal_ = this[internal];
                l = _internal_.length;
                if (typeof to != "number" || to > l) {
                    to = l - 1;
                }
                if (to < from || from >= l) return;
            
                var t = to - from + 1;
                _internal_.length = l - t;
                _internal_.stack.push({ type: "remove", from: from, to: to, total: t });
                listUpdates.set(_internal_.id, _internal_);
                if (!updates_initiated) {
                    updates_initiated = true;
                    setTimeout(update, 0);
                }
            }
            insertBefore<T,U= String | Component>(index: number, listData:U | Array<U> ,args?:{data:T,handler:(listItem:U,index:number,data:T)=>void}) {
                const _internal_ = this[internal];
                var l = _internal_.length, i, t = 1;
                var bf = index < 0 ? l : index >= l ? l : index;
                var value; 
                if (Array.isArray(listData)) {
                    t = listData.length;
                    value = new Array(t);
                    for (i = 0; i < t; i++) {
                        value[i] = getListItem(listData[i])
                        // if (typeof listData[i] == "string") {
                        //     value[i] = document.createTextNode(listData[i]);
                        // } else {
                        //     value[i] = listData[i];
                        // }
                    }
    
                } else {
                    value = [getListItem(listData)];
                    // if (typeof value == 'string') {
                    //     value = document.createTextNode(listData)
                    // }
                }
    
                _internal_.length = l + t;
                _internal_.stack.push({ type: "insert", value: value, before: bf, args: args });
                listUpdates.set(_internal_.id, _internal_);
                if (!updates_initiated) {
                    updates_initiated = true;
                    setTimeout(update, 0);
                }
            }
            size() {
                return this[internal].length;
            }
        }
    
        function setAttributes(id:any,KN: any, keys: any, elements: any, head: any):any {
            let key:string, value,node,tmp:any,tmp2,k;
            for (key in KN) {
                    k = keys[key] = {
                        eventCallers:{},
                        $events: {},
                        class: "",
                        style: "",
                        attributes: {},
                        node:node = getNode(head, KN[key].position)
                    };
                    
                    if ((value = elements[key])) {
                        if (typeof (tmp = value.style) == "string") {
                            node.setAttribute("style",`${node.attributes.style.value};${tmp}`)
                        }
                        if (typeof (tmp = value.class) == "string") {
                            node.setAttribute("class",`${node.className} ${tmp}`)
                        }
                        if ((tmp = value.attributes)) {
                            for (tmp2 in tmp) {
                                node[tmp2] = tmp[tmp2];
                            }
                        }
                        if ((tmp = value.$events)) {
                            k.$events = tmp;
                            k.eventCallers = attachEvents(node, tmp, id, key);
                        }
                    }
            }
            return head;
        }
        
        function insertList(list: ListInternal,parentData:any, node: any) {
            updateListData(list);
            let lc = list.curData, value, docF = undefined, ar, e, j, ee: any, pid = parentData.id, pidx = parentData.i;
            let getList = list.getList;
            if ((value = lc.length)) {
                docF = document.createDocumentFragment();
                ar = new Array(value);
                loop: for (j = 0; j < value; j++) {
                    ee = lc[j];
                    if ((ee=ee[internal_ins])) {
                        e = ee.out;//Blocks.get(ee.id)[internal].outerValue[internal];
                        ar[j] = e.node;
                        e.parent = pid;
                        e.dynIndex = pidx;
                        e.listItem = true;
                        e.getList = getList;
                        continue loop;
                    }
                    ar[j] = lc[j];
                }
                
                docF.append(...ar);
                //ar = undefined;
                value = list.pos;
                value.head = docF.firstChild;
                value.tail = docF.lastChild;
               // node.replaceWith(docF);
            }
            else {
                value = list.pos;
                value.head = value.tail = document.createTextNode("")
                //node.replaceWith((value.head = value.tail = document.createTextNode("")));
            }
            value.dynIndex = pidx;
            value.parent = pid;
            return docF||value.head
        }
    
        function removeList(list: ListInternal,head:any) {
            const stack = list.stack;
            var lc:any = list.curData, value=list.pos,r, docF=undefined, e, j,ee:any,l;
            if ((l = lc.length)) {
                if (!head) {
                    Blocks.get(value.parent)[internal].dyn[value.dynIndex as number] =
                    { value: "", type: NODETYPES.text, node: head = document.createTextNode("")};
                }
                r = head;
                // docF = document.createDocumentFragment();
                // ar = new Array(value);
                value.head.replaceWith(head);
                
                loop: for (j = 1; j < l; j++) {
                    ee = lc[j];
                    head.nextSibling.remove();
                    if ((ee=ee[internal_ins])) {
                        e = ee.out;//Blocks.get(ee.id)[internal].outerValue[internal];
                        //ar[j] = e.node;
                        e.parent = 0;
                        e.dynIndex = 0;
                        e.listItem = false;
                        e.getList = undefined;
                        //continue loop;
                    }
                    //ar[j] = lc[j];
                }
                if ((ee = lc[0][internal_ins])) {
                    e = ee.out;//Blocks.get(ee.id)[internal].outerValue[internal];
                    //ar[j] = e.node;
                    e.parent = 0;
                    e.dynIndex = 0;
                    e.listItem = false;
                    e.getList = undefined;
                }
                value.head = undefined;
                value.tail = undefined;
               // node.replaceWith(docF);
            }
            else {
                if (!head) {
                    Blocks.get(value.parent)[internal].dyn[value.dynIndex as number] =
                        { value: "", type: NODETYPES.text, node: r= value.head };
                } else {
                    value.head.replaceWith(head);
                    r = head;
                }
                value.head = value.tail = undefined;
                //node.replaceWith((value.head = value.tail = document.createTextNode("")));
            }
            value.dynIndex = 0;
            value.parent = 0;
            return r;
        }
    
        function updateListData(list: ListInternal) {
            const stack = list.stack;
            if (stack.length) {
                list.stack = [];
                var data = list.curData, i, l = stack.length;
                var item, d, a, t, b;
                for (i = 0; i < l; i++) { 
                    item = stack[i];
                    d = data.length;
                    t = item.from;
                    b = item.to;
                    switch (item.type) {
                        case "remove":
                            data = [...data.slice(0, t), ...data.slice(b + 1)];
                            // removed = [...data.slice(item.from, item.to + 1)].map(function (item: any) {
                            //     var blc,el;
                            //     if ((el=item[internal_ins])) {
                            //         blc = Blocks.get(el.id)[internal].outerValue[internal];
                            //         blc.parent = 0;
                            //         blc.dynIndex = 0;
                            //         blc.listItem = false;
                            //         blc.getList = undefined;
                            //     }
                            // })
                            // if (t == 0 && (el = removed[0][internal_ins])) {
                            //     blc = Blocks.get(el.id)[internal].outerValue[internal];
                            //     blc.parent = 0;
                            //     blc.dynIndex = 0;
                            //     blc.listItem = false;
                            //     blc.getList = getList.bind({[internal]:list} as List);
                            // }
                            // if (b == d-1 && (el = removed[removed.length-1][internal_ins])) {
                            //     blc = Blocks.get(el.id)[internal].outerValue[internal];
                            //     blc.parent = 0;
                            //     blc.dynIndex = 0;
                            //     blc.listItem = false;
                            //     blc.getList = getList.bind({[internal]:list} as List);
                            // }
                            break;
                        case "insert":
                            a = item.before;
                            if (a >= d) {
                                data = [...data, ...item.value];
                            } else {
                                data = [...data.slice(0, a), ...item.value, ...data.slice(a)];
                            }
                            break;
                        default:
                            break;
                    }
                }
                list.curData = data;
            }
            d = list.runner;
            t = d.fn;
            if (t&&( b = list.curData)&&(l = b.length)) {
                data = d.data;
                for (i = 0; i < l; i++){
                    t(b[i], i, data);
                }
            }
            d.fn = d.data = undefined;
        }
    
        function buildListNodes(listData: (string|BreakerComponentInstanceObject)[], parent: number, dynIndex: number,listGetter:any) {
            var l = listData.length,ar,j,e:any;
            const docF = document.createDocumentFragment();
            ar = new Array(l);
            loop: for (j = 0; j < l; j++) {
                e = listData[j];
                if ((e=e[internal_ins])) {
                    //blc = Blocks.get(e.id);
                    //B.ui.render(listData[j] as BreakerComponentInstanceObject,blc.initArgs)
                    e = e.out;//blc[internal].outerValue[internal];
                    ar[j] = e.node;
                    e.parent = parent;
                    e.dynIndex = dynIndex;
                    e.listItem = true;
                    e.getList = listGetter;
                    continue loop;
                }
                ar[j] = listData[j];
            }
            
            docF.append(...ar);
           // ar = undefined;
            return docF;
        }
        function updateList(list: ListInternal,parentData:any, node: any) {
            const stack = list.stack;
            let data, d, t, b, l, i;
            if (stack.length) {
                list.stack = [];
                data = list.curData;
                l = stack.length;
                d = data.length;
                let head = list.pos.head;
                let tail = list.pos.tail;
                let j, a,tmp, parent, item,el:any;
                let removed = false, pid = parentData.id, pidx = parentData.i;
                let args,argsData, handler,getList=list.getList;
                for (i = 0; i < l; i++){
                    item = stack[i];
                    d = data.length;
                    switch (item.type) {
                        case "remove":
                            if (!removed) {
                                a = item.total;
                                t = item.from;
                                b = item.to;
                                if (d == a) {
                                    //j = 0;
                                    for (j = 1; j < a; j++){
                                        //tmp = head.nextSibling;
                                        head.nextSibling.remove();
                                        //head = tmp;
                                        if ((el = data[j][internal_ins])) {
                                            el = el.out;//Blocks.get(el.id)[internal].outerValue[internal];
                                            el.parent = 0;
                                            el.dynIndex = 0;
                                            el.listItem = false;
                                            el.getList = undefined;
                                            componentsTrashBin.add(el)
                                        }
                                    }
                                    // while (head!=tail) {
                                    //     tmp = head.nextSibling;
                                    //     head.remove();
                                    //     head = tmp;
                                    //     if ((el = data[j][internal_ins])) {
                                    //         el = el.out;//Blocks.get(el.id)[internal].outerValue[internal];
                                    //         el.parent = 0;
                                    //         el.dynIndex = 0;
                                    //         el.listItem = false;
                                    //         el.getList = undefined;
                                    //         componentsTrashBin.add(el)
                                    //     }
                                    //     j++;
                                    // }
                                    //
                                    list.pos.tail = list.pos.head = head;
                                } else {
                                    if (t - 0 < d - b) {
                                        for (j = 0; j < t; j++){
                                            head = head.nextSibling;
                                        }
                                        //If the current tail node must be removed,
                                        //then the next tail node is the previousSibling
                                        //of the `from` node
                                        if (d - 1 == b) {
                                            list.pos.tail = head.previousSibling;
                                        }
                                        for (; j <= b; j++){
                                            tmp = head.nextSibling;
                                            head.remove();
                                            head = tmp;
                                            if ((el = data[j][internal_ins])) {
                                                el = el.out;//Blocks.get(el.id)[internal].outerValue[internal];
                                                el.parent = 0;
                                                el.dynIndex = 0;
                                                el.listItem = false;
                                                el.getList = undefined;
                                                componentsTrashBin.add(el);
                                            }
                                        }
                                        // while (j<=b) {
                                        //     tmp = head.nextSibling;
                                        //     head.remove();
                                        //     head = tmp;
                                        //     if ((el = data[j][internal_ins])) {
                                        //         el = Blocks.get(el.id)[internal].outerValue[internal];
                                        //         el.parent = 0;
                                        //         el.dynIndex = 0;
                                        //         el.listItem = false;
                                        //         el.getList = undefined;
                                        //         componentsTrashBin.add(el);
                                        //     }
                                        //     j++;
                                        // }
                                        //If the current head node must be removed,
                                        //then the next head node is the nextSibling of 
                                        // the `to` node
                                        if (t == 0) {
                                            list.pos.head = head;
                                        }
                                    } else {
                                        for (j = d-1; j >b; j--){
                                            tail = tail.previousSibling;
                                        }
                                        //If the current head node must be removed,
                                        //then the next head node is the nextSibling of 
                                        // the `to` node
                                        if (t == 0) {
                                            list.pos.tail  = tail.nextSibling;
                                        }
                                        for (; j >= t; j--){
                                            tmp = tail.previousSibling;
                                            tail.remove();
                                            tail = tmp;
                                            if ((el = data[j][internal_ins])) {
                                                el = el.out;//Blocks.get(el.id)[internal].outerValue[internal];
                                                el.parent = 0;
                                                el.dynIndex = 0;
                                                el.listItem = false;
                                                el.getList = undefined;
                                                componentsTrashBin.add(el);
                                            }
                                        }
                                        // while (j>=t) {
                                        //     tmp = tail.previousSibling;
                                        //     tail.remove();
                                        //     tail = tmp;
                                        //     if ((el = data[j][internal_ins])) {
                                        //         el = Blocks.get(el.id)[internal].outerValue[internal];
                                        //         el.parent = 0;
                                        //         el.dynIndex = 0;
                                        //         el.listItem = false;
                                        //         el.getList = undefined;
                                        //         componentsTrashBin.add(el);
                                        //     }
                                        //     j--;
                                        // }
                                        //If the current tail node must be removed,
                                        //then the next tail node is the previousSibling
                                        //of the `from` node
                                        if (d - 1 == b) {
                                            list.pos.tail = tail;
                                        }
                                    }
                                }
                                data = [...data.slice(0, t), ...data.slice(b + 1)];
                            }
                            //stack[i] = null;
                            //afterRem = data;
                            break;
                        case "insert":
                            removed = true;
                            a = item.before;
                            if (a >= d) {
                                data = [...data, ...item.value];
                            } else {
                                data = [...data.slice(0, a), ...item.value, ...data.slice(a)];
                            }
                            b = item.value;
                            if (args=item.args) {
                                t = b.length;
                                argsData = args.data;
                                handler = args.handler;
                                for (j = 0; j < t; j++){
                                    handler(b[j], j, argsData);
                                }
                            }
                            tmp = buildListNodes(b, pid, pidx, getList);
                            head = list.pos.head;
                            if (!d) {
                                list.pos.head = tmp.firstChild;
                                list.pos.tail = tmp.lastChild;
                                head.replaceWith(tmp);
                            } else {
                                if (a - 0 <= d - a) {
                                    head = list.pos.head;
                                    if (a == 0) {
                                        list.pos.head = tmp.firstChild;
                                    }
                                    for (j = 0; j < a; j++) {
                                        head = head.nextSibling;
                                    }
                                    head.parentNode.insertBefore(tmp, head);
                                } else {
                                    parent = list.pos.tail.parentNode;
                                    if (a >= d) {
                                        tail = list.pos.tail.nextSibling;
                                        list.pos.tail = tmp.lastChild;
                                    }else{
                                        tail = list.pos.tail;
                                    }
                                    for (j = d-1; j > a; j--) {
                                        tail = tail.previousSibling;
                                    }
                                    parent.insertBefore(tmp, tail);
                                }
    
                            }
                            break;
                        default:
                            break;
                    }
                }
                list.curData = data;
                d = list.runner;
                t = d.fn;
                if (t&&( b = list.curData)&&(l = b.length)) {
                    data = d.data;
                    for (i = 0; i < l; i++){
                        t(b[i], i, data);
                    }
                }
                d.fn = d.data = undefined;
                // data = afterRem;
                // d = data.length;
                // t = parentData.id;
                // b = parentData.i;
                // for (i = 0; i < l; i++){
                //     item = stack[i];
                //     if(!item){continue}
                //     switch (item.type) {
                //         case "insert":
                //             a = item.before;
                //             item = item.value;
                //             tmp = buildListNodes(item, t, b, list.getList);
                //             head = list.pos.head;
                //             if (!d) {
                //                 list.pos.head = tmp.firstChild;
                //                 list.pos.tail = tmp.lastChild;
                //                 head.replaceWith(tmp);
                //             } else {
                //                 if (a - 0 <= d - a) {
                //                     head = list.pos.head;
                //                     if (a == 0) {
                //                         list.pos.head = tmp.firstChild;
                //                     }
                //                     for (j = 0; j < a; j++) {
                //                         head = head.nextSibling;
                //                     }
                //                     head.parentNode.insertBefore(tmp, head);
                //                 } else {
                //                     parent = list.pos.tail.parentNode;
                //                     if (a >= d) {
                //                         tail = list.pos.tail.nextSibling;
                //                         list.pos.tail = tmp.lastChild;
                //                     }else{
                //                         tail = list.pos.tail;
                //                     }
                //                     for (j = d-1; j > a; j--) {
                //                         tail = tail.previousSibling;
                //                     }
                //                     parent.insertBefore(tmp, tail);
                //                 }
    
                //             }
    
                //             d = d + item.length;
                //             //data = [...data.slice(0, a), ...tmp, ...data.slice(a)];
                //             break;
                //         default:
                //             break;
                //     }
                // }
                
                if (!list.curData.length) {
                    list.pos.head.replaceWith((list.pos.tail = document.createTextNode("")));
                    list.pos.head = list.pos.tail;
                }
            } else {
                d = list.runner;
                t = d.fn;
                if (t&&( b = list.curData)&&(l = b.length)) {
                    data = d.data;
                    for (i = 0; i < l; i++){
                        t(b[i], i, data);
                    }
                }
                d.fn = d.data = undefined;
            }
            
        }
    
    function runDynamicnodes(id:number,classDyn:any,compDyn:any) {
        var l = classDyn.length;
        if (l) {
            const comp = Blocks.get(id);
            const _internal_ = comp[internal];
            const dyn = _internal_.dyn = new Array(l);
            const dn = classDyn;
            const Args = (comp.state || comp.sharedState) ? undefined : _internal_.Args;
            var value:any,el,pairs = [],docF,lc:any,j,e:any,ar,i;
            for (i = 0; i < l; i++){
                renderingComponent.id = id;
                renderingComponent.dynIndex = i;
                value = dn[i].apply(comp, Args);
                switch (typeof value) {
                    case "object":
                        if (value) {
                            if ((el = value[internal])) {
                                if (el.type == NODETYPES.list) {
                                    
                                    
                                    //lc = el.nextData;
                                    if ((value = el.curData.length)) {
                                        // docF = document.createDocumentFragment();
                                        // ar = new Array(value);
                                        // loop2: for (j = 0; j < value; j++) {
                                        //     e = lc[j];
                                        //     if (typeof e == "object") {
                                        //         if (e) {
                                        //             if ((e = e[internal])) {
                                        //                 ar[j] = e.node;
                                        //                 e.parent = id;
                                        //                 e.dynIndex = i;
                                        //                 e.listItem = true;
                                        //                 e.listIndex = j;
                                        //                 e.getList = el.getList;
                                        //                 lc[j] = e;
                                        //                 continue loop2;
                                        //             }
                                        //             else {
                                        //                 e = lc[j];
                                        //             }
                                        //         }
                                        //         else {
                                        //             e = "";
                                        //         }
                                        //     }
                                        //     e = `${e}`;
                                        //     ar[j] = e;
                                        //     lc[j] = e;
                                        // }
                                        // docF.append(...ar);
                                        // pairs.push([getNode(node, dn[i].position), docF]);
                                        // ar = undefined;
                                        // el.data.parent = id;
                                        // value = el.pos;
                                        // value.head = docF.firstChild;
                                        // value.tail = docF.lastChild;
                                        pairs.push([compDyn[i], insertList(el, { i: i, id: id}, undefined)]);
                                    }
                                    else {
                                        // el.data.parent = id;
                                        // value = el.pos;
                                        // getNode(node, dn[i].position).replaceWith((value.head = value.tail = document.createTextNode("")));
                                        compDyn[i].replaceWith(insertList(el, { i: i, id: id }, undefined))
                                    }
                                    // el.curData = lc;
                                    // el.nextData = undefined;
                                } else {
                                    compDyn[i].replaceWith(el.node);
                                    el.parent = id;
                                    el.dynIndex = i;
                                }
                                
                                dyn[i] = el;
                                break;
                            }
                        }
                        else {
                            value = "";
                        }
                    default:
                        value = `${value}`;
                        el = document.createTextNode(value);
                        compDyn[i].replaceWith(el);
                        dyn[i] = { node: el, type: NODETYPES.text, value: value };
                        break;
                }
            }
            l = pairs.length;
            for (i = 0; i < l; i++){
                value = pairs[i];
                value[0].replaceWith(value[1]);
            }
            renderingComponent.id = undefined;
            renderingComponent.dynIndex = undefined;
        }
        
    
    }
        
        
    function updateDynamicnodes(id:number,fnId:number,node:any) {
        const compClass: ComponentClass = CreatedComponents.get(fnId);
        var l = compClass.dn.length;
        if (l) {
            const comp = Blocks.get(id);
            const _internal_ = comp[internal];
            const dyn = _internal_.dyn;// = new Array(l);
            const dn = compClass.dn;
            const Args = (comp.state || comp.sharedState) ? undefined : _internal_.Args;
            var value: any, el:any, e: any,i, tmp;
            var head, tail,bn;
            for (i = 0; i < l; i++){
                renderingComponent.id = id;
                renderingComponent.dynIndex = i;
                value = dn[i].apply(comp, Args);
                switch (typeof value) {
                    case "object":
                        if (value) {
                            if ((el = value[internal])) {
                                if (el.type == NODETYPES.list) {
                                    
    
                                    switch ((tmp = dyn[i]).type) {
                                        case NODETYPES.text:
                                            if (el.pos.head) {
                                                removeList(el, undefined);
                                            }
                                            tmp.node.replaceWith(insertList(el,{i:i,id:id},undefined))
                                            // el.pos.parent = id;
                                            // el.pos.dynIndex = i;
                                            // updateList(el, tmp.node);
                                            // if (tmp.value != value) {
                                            //     tmp.node.textContent = value;
                                            //     tmp.value = value;
                                            // }
                                            dyn[i] = el;
                                            break;
                                        case NODETYPES.component:
                                            if (el.pos.head) {
                                                removeList(el, undefined);
                                            }
                                            tmp.parent = 0;
                                            tmp.dynIndex = 0;
                                            componentsTrashBin.add(tmp);
                                            bn = bn || document.createTextNode("");
                                            tmp.node.replaceWith(bn)
                                            bn.replaceWith(insertList(el, { i: i, id: id }, undefined))
                                            dyn[i] = el;
                                            break;
                                        default://Lists
                                            if (tmp != el) {
                                                if (el.pos.head) {
                                                    removeList(el, undefined);
                                                }
                                                //tmp2 = tmp.pos;
                                                //if (tmp2.head) {
                                                    e=removeList(tmp, undefined);
                                                //}
                                                
                                                e.replaceWith(insertList(el, { i: i, id: id }, undefined))
                                                // tmp2.parent = 0;
                                                // tmp2.dynIndex = 0;
                                                // head = tmp2.head;
                                                // tmp2.head = undefined;
                                                // tail = tmp2.tail;
                                                // tmp2.tail = undefined;
                                                // while (head != tail) {
                                                //     tmp2 = head.nextSibling;
                                                //     head.remove();
                                                //     head = tmp2;
                                                // }
                                                // tail = undefined;
                                                // updateList(el, head);
    
                                                ListsTrashBin.add(tmp);
                                                dyn[i] = el;
                                            } else {
                                                updateList(el,{ i: i, id: id },undefined);
                                            }
                                            break;
                                    }
                                } else {
                                    switch ((tmp = dyn[i]).type) {
                                        case NODETYPES.text:
                                            // if (el.parent) {
                                            //     blc = Blocks.get(el.parent);
                                            //     tmp2 = blc[internal].dyn;
                                            //     if (el.listItem) {
                                            //         e = el.getList();
                                            //         j = e.curData.findIndex(itemFinder,el);
                                            //         e.curData[j] = "";
                                            //         el.listItem = false;
                                            //         el.getList = undefined;
                                            //         if (j == 0) {
                                            //             el.node.replaceWith((e.pos.head = document.createTextNode("")));
                                            //         } else if (j == (lc = e.curData.length - 1)) {
                                            //             el.node.replaceWith((e.pos.tail = document.createTextNode("")));
                                            //         } else {
                                            //             el.node.replaceWith(document.createTextNode(""));
                                            //         }
                                            //     } else {
                                            //         tmp2[(j=el.dynIndex)].node.replaceWith((e = document.createTextNode("")));
                                            //         tmp2[j] = { node: e, type: NODETYPES.text, value: "" };
                                            //     }
                                                
                                            // }
                                            tmp.node.replaceWith(el.node);
                                            el.parent = id;
                                            el.dynIndex = i;
                                            dyn[i] = el;
                                            break;
                                        case NODETYPES.component:
                                            if (el.id != tmp.id) {
                                                // if (el.parent) {
                                                //     blc = Blocks.get(el.parent);
                                                //     tmp2 = blc[internal].dyn;
                                                //     if (el.listItem) {
                                                //         e = el.getList();
                                                //         j = e.curData.findIndex(itemFinder,el);
                                                //         e.curData[j] = "";
                                                //         el.listItem = false;
                                                //         el.getList = undefined;
                                                //         if (j == 0) {
                                                //             el.node.replaceWith((e.pos.head = document.createTextNode("")));
                                                //         } else if (j == (lc = e.curData.length - 1)) {
                                                //             el.node.replaceWith((e.pos.tail = document.createTextNode("")));
                                                //         } else {
                                                //             el.node.replaceWith(document.createTextNode(""));
                                                //         }
                                                //     } else {
                                                //         tmp2[(j=el.dynIndex)].node.replaceWith((e = document.createTextNode("")));
                                                //         tmp2[j] = { node: e, type: NODETYPES.text, value: "" };
                                                //     }
                                                    
                                                // }
                                                tmp.node.replaceWith(el.node);
                                                el.parent = id;
                                                el.dynIndex = i;
                                                tmp.parent = 0;
                                                tmp.dynIndex = 0;
                                                dyn[i] = el;
                                                componentsTrashBin.add(tmp);
                                            }
                                            break;
                                        default://Lists
                                            // if (el.parent) {
                                            //     blc = Blocks.get(el.parent);
                                            //     tmp2 = blc[internal].dyn;
                                            //     if (el.listItem) {
                                            //         e = el.getList();
                                            //         j = e.curData.findIndex(itemFinder,el);
                                            //         e.curData[j] = "";
                                            //         el.listItem = false;
                                            //         el.getList = undefined;
                                            //         if (j == 0) {
                                            //             el.node.replaceWith((e.pos.head = document.createTextNode("")));
                                            //         } else if (j == (lc = e.curData.length - 1)) {
                                            //             el.node.replaceWith((e.pos.tail = document.createTextNode("")));
                                            //         } else {
                                            //             el.node.replaceWith(document.createTextNode(""));
                                            //         }
                                            //     } else {
                                            //         tmp2[(j=el.dynIndex)].node.replaceWith((e = document.createTextNode("")));
                                            //         tmp2[j] = { node: e, type: NODETYPES.text, value: "" };
                                            //     }
                                                
                                            // }
                                            e=removeList(tmp,undefined)
                                            // tmp2 = tmp.pos;
                                            // tmp2.parent = 0;
                                            // tmp2.dynIndex = 0;
                                            // head = tmp2.head;
                                            // tmp2.head = undefined;
                                            // tail = tmp2.tail;
                                            // tmp2.tail = undefined;
                                            // while (head != tail) {
                                            //     tmp2 = head.nextSibling;
                                            //     head.remove();
                                            //     head = tmp2;
                                            // }
                                            // head.replaceWith(el.node);
                                            e.replaceWith(el.node);
                                            el.parent = id;
                                            el.dynIndex = i;
                                            dyn[i] = el;
                                            ListsTrashBin.add(tmp);
                                            break;
                                    }
                                }
                                break;
                            }
                        }
                        else {
                            value = "";
                        }
                    default:
                        value = `${value}`;
                        switch ((tmp = dyn[i]).type) {
                            case NODETYPES.text:
                                if (tmp.value != value) {
                                    tmp.node.textContent = value;
                                    tmp.value = value;
                                }
                                break;
                            case NODETYPES.component:
                                el = document.createTextNode(value);
                                tmp.parent = 0;
                                tmp.dynIndex = 0;
                                tmp.node.replaceWith(el);
                                componentsTrashBin.add(tmp);
                                dyn[i] = { node: el, type: NODETYPES.text, value: value };
                                break;
                            default://Lists
                                // tmp2 = tmp.pos;
                                // tmp2.parent = 0;
                                // tmp2.dynIndex = 0;
                                // head = tmp2.head;
                                // tmp2.head = undefined;
                                // tail = tmp2.tail;
                                // tmp2.tail = undefined;
                                // while (head != tail) {
                                //     tmp2 = head.nextSibling;
                                //     head.remove();
                                //     head = tmp2;
                                // }
                                //el = document.createTextNode(value);
                               el = removeList(tmp,document.createTextNode(value))
                                //head.replaceWith(el);
                                ListsTrashBin.add(tmp);
                                dyn[i] = { node: el, type: NODETYPES.text, value: value };
                                break;
                        }
                        break;
                }
            }
            // l = pairs.length;
            // for (i = 0; i < l; i++){
            //     value = pairs[i];
            //     value[0].replaceWith(value[1]);
            // }
            renderingComponent.id = undefined;
            renderingComponent.dynIndex = undefined;
        }
        
    
    }
       
    function ComponentMethod(this:{fnId:number},args:any):BreakerElement {
        args = [args];
        const _internal_ = new ComponentInstance({methodId:this.fnId,args:args});
        // const compObj: ComponentObjects = {
        //     [internal]: _internal_,
    
        // }
        //const id = _internal_.id;
        //Blocks.set(id, compObj);
        const compClass = CreatedComponents.get(this.fnId);
        let node;
        if (!compClass.proto) {
            node = compClass.fn.apply({[internal]:_internal_}, args);
        } else {
            node = clone(_internal_);
        }
       
        // compObj.onCreation && compObj.onCreation.apply(compObj, args as any);
        // _internal_.created = true;
        // compObj.onParentMounting && compObj.onParentMounting.apply(compObj, args as any);
        const out = _internal_.outerValue;
        out[internal].node = node;
        _internal_.status = STATUS.alive;
        // var listTrack = listTracker;
        // listTracker = id;
        // runDynamicnodes(_internal_.id, compClass.dn, _internal_.init_dyn);
        // _internal_.init_dyn = null;
        //listTracker = listTrack;
        //
        return out;
    }
    
    function getComponentInstance(this:{fnId:number},initArgs:any) {
        const _internal_ = new ComponentInstance({methodId:this.fnId,args:undefined,initArgs:initArgs});
        Blocks.set(_internal_.id,{[internal]:_internal_});
        return _internal_.ins;
    }
    
    //Traverses an element to find nested element
    function getNode(head:any, position:Array<number>) {
        var i = 0,
            l = position.length;
        while (i < l) {
            head = head.childNodes[position[i]];
            i++;
        }
        return head;
    };
    
    
    
    function runElementEvent(data:EventData) {
        const comp = Blocks.get(data.id);
        const keyed_Data = comp[internal].keyed[data.key];
        //Run event
        keyed_Data.$events[data.ev].apply(data.event.target, [data.event, comp]);
        data.event = null;
      }
    type EventData = { event?: any, ev: string, id: number, key: string };
    function eventHandler(this: EventData,e:Event) {
        const data = this;
        data.event = e;
        runElementEvent(data);
      }
    
      //Attach event handlers
      function attachEvents(element:any, events:EventHandlersEventMap, componentId:number, key:string ) {
        const eventCallers:{[k:string]:Function} = {};
        var i,fn;
        for(i in events) {
            fn = eventHandler.bind({
                ev: i,
                id: componentId,
                key: key,
            });
            element.addEventListener(i, fn, false);
            eventCallers[i] = fn;
        }
        return eventCallers;
      }
    
      //Remove event handlers
      function removeEvents(element:any, eventCallers:{[k:string]:Function}) {
            for (var i in eventCallers) {
                element.removeEventListener(i,eventCallers[i],false);
            }
        }
        const B = new Breaker();
        Object.defineProperty(window, "Breaker", { value: B, configurable: false, enumerable: true, writable: false });
        return B;
    }();
    