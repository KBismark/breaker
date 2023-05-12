/**
 * The journey to the fastest and most flexible reactive library. 
 * Your apps could be faster. The web can be better.
 */
!function () {
    "use strict";
    var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };
    var _a;
    var renderingComponent = { id: undefined, dynIndex: undefined };
    var componentsTrashBin = new Set();
    var ListsTrashBin = new Set();
    var CreatedComponents = new Map();
    var Blocks = new Map();
    var MountBucket = new Map();
    var TemplateBucket = new Map();
    var standAloneUpdates = new Map();
    var updates_initiated = false;
    var updating = false;
    var internal = Symbol();
    var internal_ins = Symbol();
    var dinstinctComponents = 0;
    var componentsID = 0;
    var STATUS = {
        alive: 1,
        hibernated: 2,
        dead: 3
    };
    var NODETYPES = {
        text: 1,
        component: 2,
        list: 3
    };
    var global_template = undefined;
    var Breaker = /** @class */ (function () {
        function Breaker() {
            this.ui = new UI();
        }
        Breaker.prototype.create = function (htmlMethod, Setter, dynamicNodes, comp) {
            var _internal_ = comp[internal];
            comp[internal] = null;
            var compClass = CreatedComponents.get(_internal_.fnId);
            compClass.setup(htmlMethod, Setter, dynamicNodes, comp);
            var node = compClass.getTemplate();
            comp = Object.create(comp);
            comp[internal] = _internal_;
            Blocks.set(_internal_.id, comp);
            run(comp);
            var kNdN = Setter.apply(comp, [_internal_.Args[0], node, eventHandler, _internal_.id]);
            _internal_.keyed = kNdN[0];
            _internal_.init_dyn = kNdN[1];
            return node;
            // return setAttributes(_internal_.id, compClass.kn, _internal_.keyed, comp.elements || {}, compClass.template.cloneNode(true));
        };
        return Breaker;
    }());
    function clone(_internal_) {
        var compClass = CreatedComponents.get(_internal_.fnId);
        var node = compClass.getTemplate();
        var comp = Object.create(compClass.proto);
        comp[internal] = _internal_;
        Blocks.set(_internal_.id, comp);
        run(comp);
        var kNdN = compClass.setAttr.apply(comp, [_internal_.Args[0], node, eventHandler, _internal_.id]);
        _internal_.keyed = kNdN[0];
        _internal_.init_dyn = kNdN[1];
        return node;
        //return setAttributes(_internal_.id, compClass.kn, _internal_.keyed, comp.elements || {}, compClass.template.cloneNode(true));
    }
    function run(t) {
        var _internal_ = t[internal];
        var args = _internal_.Args;
        !_internal_.created && t.onCreation && t.onCreation.apply(t, args);
        _internal_.created = true;
        t.onParentMounting && t.onParentMounting.apply(t, args);
        t.onMount && MountBucket.set(_internal_.id, t);
        if (t.public) {
            t.public = t.public.apply(t, args);
        }
    }
    var UI = /** @class */ (function () {
        function UI() {
        }
        UI.prototype.CreateStyle = function () {
            var styles = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                styles[_i] = arguments[_i];
            }
            if (styles.length) {
                return styles.join(";");
            }
            return "";
        };
        UI.prototype.CreateList = function (list) {
            //if (!listTracker) return undefined as any;
            return new List(list);
        };
        UI.prototype.CreateComponent = function (fn) {
            var cm = new ComponentClass(fn);
            CreatedComponents.set(cm.id, cm);
            var f = ComponentMethod.bind({ fnId: cm.id });
            f.instance = getComponentInstance.bind({ fnId: cm.id });
            return f;
        };
        UI.prototype.CreateApp = function (pagePath, app, destination) {
            destination.replaceWith(app[internal].node);
            MountBucket.forEach(function (comp) {
                comp.onMount.apply(comp);
                comp.onMount = undefined;
            });
            MountBucket.clear();
            TemplateBucket.forEach(function (compClass) {
                compClass.template = undefined;
            });
            TemplateBucket.clear();
            global_template = undefined;
        };
        UI.prototype.render = function (ins, args) {
            var id = ins[internal_ins].id;
            var comp = Blocks.get(id);
            var _internal_ = comp[internal];
            var compClass = CreatedComponents.get(_internal_.fnId);
            var node = undefined; //listTrack;
            var out, el;
            args = _internal_.Args = [args];
            switch (_internal_.status) {
                case STATUS.dead: //Full Mount
                    comp.initArgs = _internal_.InitArgs || comp.initArgs;
                    _internal_.InitArgs = undefined;
                    if (!compClass.proto) {
                        node = compClass.fn.apply(comp, args);
                    }
                    else {
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
                    runDynamicnodes(_internal_.id, compClass.dn, _internal_.init_dyn);
                    _internal_.init_dyn = null;
                    //listTracker = listTrack;
                    return out;
                case STATUS.alive: //Update
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
                            }
                            else if (j == e.curData.length - 1) {
                                el.node.replaceWith((e.pos.tail = document.createTextNode("")));
                            }
                            else {
                                el.node.replaceWith(document.createTextNode(""));
                            }
                            el.listItem = false;
                            el.getList = undefined;
                        }
                        else {
                            tmp2[(j = el.dynIndex)].node.replaceWith((e = document.createTextNode("")));
                            tmp2[j] = { node: e, type: NODETYPES.text, value: "" };
                        }
                        el.parent = 0;
                        el.dynIndex = 0;
                    }
                    updateDynamicnodes(_internal_.id, _internal_.fnId, undefined);
                    return el;
                default: //Partial mount when hibernated
                    return node;
            }
        };
        UI.prototype.setState = function (This, state) {
            var _internal_ = This[internal];
            if (!This.state) {
                This.state = state;
                updateDynamicnodes(_internal_.id, _internal_.fnId, undefined);
                return;
            }
            ;
            This.state = __assign(__assign({}, This.state), state);
            updateDynamicnodes(_internal_.id, _internal_.fnId, undefined);
        };
        UI.prototype.setClass = function (This, key, classObject) {
            var _internal_ = This[internal];
            B.ui.update(_internal_.ins, internal, key, classObject);
        };
        UI.prototype.getPublicData = function (ins) {
            return Blocks.get(ins[internal_ins].id).public || {};
        };
        UI.prototype.getInstance = function (This) {
            return This[internal].ins;
        };
        UI.prototype.getParentInstance = function (This) {
            var parent = This[internal].outerValue[internal].parent;
            return Blocks.get(parent)[internal].ins;
        };
        UI.prototype.update = function (ins) {
            var _b;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var id = ins[internal_ins].id;
            var pre = standAloneUpdates.get(id);
            if (args.length && args[0] == internal) {
                if (!pre) {
                    standAloneUpdates.set(id, { ins: ins, main: false, args: undefined, keys: (_b = {}, _b[args[1]] = { class: args[2] }, _b) });
                    if (!updates_initiated) {
                        updates_initiated = true;
                        setTimeout(update, 0);
                    }
                }
                else {
                    pre.key[args[1]] = pre.key[args[1]] || { class: {} };
                    pre.key[args[1]].class = __assign(__assign({}, pre.key[args[1]].class), args[2]);
                }
                return;
            }
            args = args.length ? args[0] : undefined;
            if (pre) {
                pre.main = true;
                pre.args = args;
                return;
            }
            standAloneUpdates.set(id, { ins: ins, main: true, args: args, keys: {} });
            if (!updates_initiated) {
                updates_initiated = true;
                setTimeout(update, 0);
            }
        };
        return UI;
    }());
    function update() {
        updating = true;
        standAloneUpdates.forEach(function (value, k) {
            if (value.main) {
                B.ui.render(value.ins, value.args);
            }
            var keys = value.keys, key, cls;
            var keyed = Blocks.get(k)[internal].keyed, node;
            for (key in keys) {
                if (keyed[key]) {
                    node = keyed[key].node;
                    cls = keys[key].class;
                    var add = new Set((node.getAttribute("class") || '').split(' '));
                    for (var classname in cls) {
                        if (cls[classname]) {
                            add.add(classname);
                        }
                        else {
                            add.delete(classname);
                        }
                    }
                    node.setAttribute('class', Array.from(add).join(' '));
                }
            }
        });
        standAloneUpdates.clear();
        updating = updates_initiated = false;
    }
    var ComponentClass = /** @class */ (function () {
        function ComponentClass(fn) {
            this.template = undefined;
            this.dn = [];
            //kn: { [k: string]: KeyedNode } = {};
            this.fn = undefined;
            this.id = 0;
            this.proto = undefined;
            this.html = undefined;
            this.setAttr = undefined;
            this.fn = fn;
            dinstinctComponents++;
            this.id = dinstinctComponents;
        }
        ComponentClass.prototype.setup = function (htmlMethod, setter, dn, proto) {
            this.dn = dn;
            this.proto = proto;
            this.html = htmlMethod;
            this.setAttr = setter;
        };
        ComponentClass.prototype.getTemplate = function () {
            if (!this.template) {
                if (!global_template) {
                    global_template = document.createElement("template");
                }
                global_template.innerHTML = this.html();
                this.template = global_template.content.firstElementChild;
                TemplateBucket.set(this.id, this);
            }
            return this.template.cloneNode(true);
        };
        return ComponentClass;
    }());
    ;
    var ComponentInstance = /** @class */ (function () {
        function ComponentInstance(_b) {
            var _c, _d;
            var methodId = _b.methodId, args = _b.args, initArgs = _b.initArgs;
            this.outerValue = (_c = {},
                _c[internal] = {
                    type: NODETYPES.component,
                    parent: 0,
                    dynIndex: 0,
                    listItem: false,
                    listIndex: 0,
                    getList: undefined,
                    node: undefined,
                    id: 0
                },
                _c);
            this.ins = (_d = {}, _d[internal_ins] = { fnId: 0, id: 0, out: undefined }, _d.isComponent = true, _d);
            this.created = false;
            this.status = STATUS.dead;
            this.parent = 0;
            this.id = 0;
            this.fnId = 0;
            this.Args = undefined;
            this.InitArgs = undefined;
            this.init_dyn = undefined;
            this.keyed = null;
            componentsID++;
            this.id = componentsID;
            var f = this.outerValue[internal];
            f.id = componentsID;
            this.fnId = methodId;
            this.Args = args;
            this.InitArgs = initArgs;
            var a = this.ins[internal_ins];
            a.fnId = methodId;
            ;
            a.id = componentsID;
            a.out = f;
        }
        return ComponentInstance;
    }());
    function getList() {
        return this[internal];
    }
    function getListItem(item) {
        return item && item[internal_ins] ? item : item == null ? "" : "".concat(item);
    }
    var List = /** @class */ (function () {
        function List(list) {
            this[_a] = {
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
                runner: { fn: undefined, data: undefined }
            };
            var a = this[internal];
            //a.pos.parent = boundedParentId;
            a.curData = list.map(getListItem);
        }
        // map<U>(fn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
        List.prototype.map = function (data, fn, thisArg) {
            if (fn) {
                var _internal_ = this[internal];
                _internal_.runner.fn = fn.bind(thisArg || null);
                _internal_.runner.data = data;
            }
            return this;
        };
        List.prototype.clear = function () {
            var _internal_ = this[internal];
            _internal_.nextData = [];
        };
        List.prototype.get = function () {
            return this[internal].curData.slice(0);
        };
        List.prototype.remove = function (from, to) {
            var l;
            var _internal_ = this[internal];
            l = _internal_.length;
            if (typeof to != "number" || to > l) {
                to = l - 1;
            }
            if (to < from || from >= l)
                return;
            var t = to - from + 1;
            _internal_.length = l - t;
            _internal_.stack.push({ type: "remove", from: from, to: to, total: t });
        };
        List.prototype.insertBefore = function (index, listData, args) {
            var _internal_ = this[internal];
            var l = _internal_.length, i, t = 1;
            var bf = index < 0 ? l : index >= l ? l : index;
            var value;
            if (Array.isArray(listData)) {
                t = listData.length;
                value = new Array(t);
                for (i = 0; i < t; i++) {
                    value[i] = getListItem(listData[i]);
                    // if (typeof listData[i] == "string") {
                    //     value[i] = document.createTextNode(listData[i]);
                    // } else {
                    //     value[i] = listData[i];
                    // }
                }
            }
            else {
                value = [getListItem(listData)];
                // if (typeof value == 'string') {
                //     value = document.createTextNode(listData)
                // }
            }
            _internal_.length = l + t;
            _internal_.stack.push({ type: "insert", value: value, before: bf, args: args });
        };
        List.prototype.size = function () {
            return this[internal].length;
        };
        return List;
    }());
    _a = internal;
    function setAttributes(id, KN, keys, elements, head) {
        var key, value, node, tmp, tmp2, k;
        for (key in KN) {
            k = keys[key] = {
                eventCallers: {},
                $events: {},
                class: "",
                style: "",
                attributes: {},
                node: node = getNode(head, KN[key].position)
            };
            if ((value = elements[key])) {
                if (typeof (tmp = value.style) == "string") {
                    node.setAttribute("style", "".concat(node.attributes.style.value, ";").concat(tmp));
                }
                if (typeof (tmp = value.class) == "string") {
                    node.setAttribute("class", "".concat(node.className, " ").concat(tmp));
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
    function insertList(list, parentData, node) {
        updateListData(list);
        var lc = list.curData, value, docF = undefined, ar, e, j, ee, pid = parentData.id, pidx = parentData.i;
        var getList = list.getList;
        if ((value = lc.length)) {
            docF = document.createDocumentFragment();
            ar = new Array(value);
            loop: for (j = 0; j < value; j++) {
                ee = lc[j];
                if ((ee = ee[internal_ins])) {
                    e = ee.out; //Blocks.get(ee.id)[internal].outerValue[internal];
                    ar[j] = e.node;
                    e.parent = pid;
                    e.dynIndex = pidx;
                    e.listItem = true;
                    e.getList = getList;
                    continue loop;
                }
                ar[j] = lc[j];
            }
            docF.append.apply(docF, ar);
            //ar = undefined;
            value = list.pos;
            value.head = docF.firstChild;
            value.tail = docF.lastChild;
            // node.replaceWith(docF);
        }
        else {
            value = list.pos;
            value.head = value.tail = document.createTextNode("");
            //node.replaceWith((value.head = value.tail = document.createTextNode("")));
        }
        value.dynIndex = pidx;
        value.parent = pid;
        return docF || value.head;
    }
    function removeList(list, head) {
        var stack = list.stack;
        var lc = list.curData, value = list.pos, r, docF = undefined, e, j, ee, l;
        if ((l = lc.length)) {
            if (!head) {
                Blocks.get(value.parent)[internal].dyn[value.dynIndex] =
                    { value: "", type: NODETYPES.text, node: head = document.createTextNode("") };
            }
            r = head;
            // docF = document.createDocumentFragment();
            // ar = new Array(value);
            value.head.replaceWith(head);
            loop: for (j = 1; j < l; j++) {
                ee = lc[j];
                head.nextSibling.remove();
                if ((ee = ee[internal_ins])) {
                    e = ee.out; //Blocks.get(ee.id)[internal].outerValue[internal];
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
                e = ee.out; //Blocks.get(ee.id)[internal].outerValue[internal];
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
                Blocks.get(value.parent)[internal].dyn[value.dynIndex] =
                    { value: "", type: NODETYPES.text, node: r = value.head };
            }
            else {
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
    function updateListData(list) {
        var stack = list.stack;
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
                        data = __spreadArray(__spreadArray([], data.slice(0, t), true), data.slice(b + 1), true);
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
                            data = __spreadArray(__spreadArray([], data, true), item.value, true);
                        }
                        else {
                            data = __spreadArray(__spreadArray(__spreadArray([], data.slice(0, a), true), item.value, true), data.slice(a), true);
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
        if (t && (b = list.curData) && (l = b.length)) {
            data = d.data;
            for (i = 0; i < l; i++) {
                t(b[i], i, data);
            }
        }
        d.fn = d.data = undefined;
    }
    function buildListNodes(listData, parent, dynIndex, listGetter) {
        var l = listData.length, ar, j, e;
        var docF = document.createDocumentFragment();
        ar = new Array(l);
        loop: for (j = 0; j < l; j++) {
            e = listData[j];
            if ((e = e[internal_ins])) {
                //blc = Blocks.get(e.id);
                //B.ui.render(listData[j] as BreakerComponentInstanceObject,blc.initArgs)
                e = e.out; //blc[internal].outerValue[internal];
                ar[j] = e.node;
                e.parent = parent;
                e.dynIndex = dynIndex;
                e.listItem = true;
                e.getList = listGetter;
                continue loop;
            }
            ar[j] = listData[j];
        }
        docF.append.apply(docF, ar);
        // ar = undefined;
        return docF;
    }
    function updateList(list, parentData, node) {
        var stack = list.stack;
        var data, d, t, b, l, i;
        if (stack.length) {
            list.stack = [];
            data = list.curData;
            l = stack.length;
            d = data.length;
            var head = list.pos.head;
            var tail = list.pos.tail;
            var j = void 0, a = void 0, tmp = void 0, parent_1, item = void 0, el = void 0;
            var removed = false, pid = parentData.id, pidx = parentData.i;
            var args = void 0, argsData = void 0, handler = void 0, getList_1 = list.getList;
            for (i = 0; i < l; i++) {
                item = stack[i];
                d = data.length;
                switch (item.type) {
                    case "remove":
                        //if (!removed) {
                        a = item.total;
                        t = item.from;
                        b = item.to;
                        if (d == a) {
                            //j = 0;
                            for (j = 1; j < a; j++) {
                                //tmp = head.nextSibling;
                                head.nextSibling.remove();
                                //head = tmp;
                                if ((el = data[j][internal_ins])) {
                                    el = el.out; //Blocks.get(el.id)[internal].outerValue[internal];
                                    el.parent = 0;
                                    el.dynIndex = 0;
                                    el.listItem = false;
                                    el.getList = undefined;
                                    componentsTrashBin.add(el);
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
                        }
                        else {
                            if (t - 0 < d - b) {
                                for (j = 0; j < t; j++) {
                                    head = head.nextSibling;
                                }
                                //If the current tail node must be removed,
                                //then the next tail node is the previousSibling
                                //of the `from` node
                                if (d - 1 == b) {
                                    list.pos.tail = head.previousSibling;
                                }
                                for (; j <= b; j++) {
                                    tmp = head.nextSibling;
                                    head.remove();
                                    head = tmp;
                                    if ((el = data[j][internal_ins])) {
                                        el = el.out; //Blocks.get(el.id)[internal].outerValue[internal];
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
                            }
                            else {
                                for (j = d - 1; j > b; j--) {
                                    tail = tail.previousSibling;
                                }
                                //If the current head node must be removed,
                                //then the next head node is the nextSibling of 
                                // the `to` node
                                if (t == 0) {
                                    list.pos.tail = tail.nextSibling;
                                }
                                for (; j >= t; j--) {
                                    tmp = tail.previousSibling;
                                    tail.remove();
                                    tail = tmp;
                                    if ((el = data[j][internal_ins])) {
                                        el = el.out; //Blocks.get(el.id)[internal].outerValue[internal];
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
                        data = __spreadArray(__spreadArray([], data.slice(0, t), true), data.slice(b + 1), true);
                        //}
                        //stack[i] = null;
                        //afterRem = data;
                        break;
                    case "insert":
                        removed = true;
                        a = item.before;
                        if (a >= d) {
                            data = __spreadArray(__spreadArray([], data, true), item.value, true);
                        }
                        else {
                            data = __spreadArray(__spreadArray(__spreadArray([], data.slice(0, a), true), item.value, true), data.slice(a), true);
                        }
                        
                        b = item.value;
                        if (args = item.args) {
                            t = b.length;
                            argsData = args.data;
                            handler = args.handler;
                            for (j = 0; j < t; j++) {
                                handler(b[j], j, argsData);
                            }
                        }
                        tmp = buildListNodes(b, pid, pidx, getList_1);
                        head = list.pos.head;
                        if (!d) {
                            list.pos.head = tmp.firstChild;
                            list.pos.tail = tmp.lastChild;
                            head.replaceWith(tmp);
                        }
                        else {
                           
                            if (a - 0 <= d - a) {
                                head = list.pos.head;
                                if (a == 0) {
                                    list.pos.head = tmp.firstChild;
                                }
                                for (j = 0; j < a; j++) {
                                    head = head.nextSibling;
                                }
                                head.parentNode.insertBefore(tmp, head);
                            }
                            else {
                                parent_1 = list.pos.tail.parentNode;
                                if (a >= d) {
                                    tail = list.pos.tail.nextSibling;
                                    list.pos.tail = tmp.lastChild;
                                }
                                else {
                                    tail = list.pos.tail;
                                }
                                for (j = d - 1; j > a; j--) {
                                    tail = tail.previousSibling;
                                }
                                parent_1.insertBefore(tmp, tail);
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
            if (t && (b = list.curData) && (l = b.length)) {
                data = d.data;
                for (i = 0; i < l; i++) {
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
        }
        else {
            d = list.runner;
            t = d.fn;
            if (t && (b = list.curData) && (l = b.length)) {
                data = d.data;
                for (i = 0; i < l; i++) {
                    t(b[i], i, data);
                }
            }
            d.fn = d.data = undefined;
        }
    }
    function runDynamicnodes(id, classDyn, compDyn) {
        var l = classDyn.length;
        if (l) {
            var comp = Blocks.get(id);
            var _internal_ = comp[internal];
            var dyn = _internal_.dyn = new Array(l);
            var dn = classDyn;
            var Args = (comp.state || comp.sharedState) ? undefined : _internal_.Args;
            var value, el, pairs = [], docF, lc, j, e, ar, i;
            for (i = 0; i < l; i++) {
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
                                        pairs.push([compDyn[i], insertList(el, { i: i, id: id }, undefined)]);
                                    }
                                    else {
                                        // el.data.parent = id;
                                        // value = el.pos;
                                        // getNode(node, dn[i].position).replaceWith((value.head = value.tail = document.createTextNode("")));
                                        compDyn[i].replaceWith(insertList(el, { i: i, id: id }, undefined));
                                    }
                                    // el.curData = lc;
                                    // el.nextData = undefined;
                                }
                                else {
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
                        value = "".concat(value);
                        el = document.createTextNode(value);
                        compDyn[i].replaceWith(el);
                        dyn[i] = { node: el, type: NODETYPES.text, value: value };
                        break;
                }
            }
            l = pairs.length;
            for (i = 0; i < l; i++) {
                value = pairs[i];
                value[0].replaceWith(value[1]);
            }
            renderingComponent.id = undefined;
            renderingComponent.dynIndex = undefined;
        }
    }
    function updateDynamicnodes(id, fnId, node) {
        var compClass = CreatedComponents.get(fnId);
        var l = compClass.dn.length;
        if (l) {
            var comp = Blocks.get(id);
            var _internal_ = comp[internal];
            var dyn = _internal_.dyn; // = new Array(l);
            var dn = compClass.dn;
            var Args = (comp.state || comp.sharedState) ? undefined : _internal_.Args;
            var value, el, pairs = [], docF, lc, j, e, ar, i, tmp, tmp2, blc;
            var head, tail, bn;
            for (i = 0; i < l; i++) {
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
                                            tmp.node.replaceWith(insertList(el, { i: i, id: id }, undefined));
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
                                            tmp.node.replaceWith(bn);
                                            bn.replaceWith(insertList(el, { i: i, id: id }, undefined));
                                            dyn[i] = el;
                                            break;
                                        default: //Lists
                                            if (tmp != el) {
                                                if (el.pos.head) {
                                                    removeList(el, undefined);
                                                }
                                                //tmp2 = tmp.pos;
                                                //if (tmp2.head) {
                                                e = removeList(tmp, undefined);
                                                //}
                                                e.replaceWith(insertList(el, { i: i, id: id }, undefined));
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
                                            }
                                            else {
                                                updateList(el, { i: i, id: id }, undefined);
                                            }
                                            break;
                                    }
                                }
                                else {
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
                                        default: //Lists
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
                                            e = removeList(tmp, undefined);
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
                        value = "".concat(value);
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
                            default: //Lists
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
                                el = removeList(tmp, document.createTextNode(value));
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
    function ComponentMethod(args) {
        var _b;
        args = [args];
        var _internal_ = new ComponentInstance({ methodId: this.fnId, args: args });
        // const compObj: ComponentObjects = {
        //     [internal]: _internal_,
        // }
        //const id = _internal_.id;
        //Blocks.set(id, compObj);
        var compClass = CreatedComponents.get(this.fnId);
        var node;
        if (!compClass.proto) {
            node = compClass.fn.apply((_b = {}, _b[internal] = _internal_, _b), args);
        }
        else {
            node = clone(_internal_);
        }
        // compObj.onCreation && compObj.onCreation.apply(compObj, args as any);
        // _internal_.created = true;
        // compObj.onParentMounting && compObj.onParentMounting.apply(compObj, args as any);
        var out = _internal_.outerValue;
        out[internal].node = node;
        _internal_.status = STATUS.alive;
        // var listTrack = listTracker;
        // listTracker = id;
        runDynamicnodes(_internal_.id, compClass.dn, _internal_.init_dyn);
        _internal_.init_dyn = null;
        //listTracker = listTrack;
        //
        return out;
    }
    function getComponentInstance(initArgs) {
        var _b;
        var _internal_ = new ComponentInstance({ methodId: this.fnId, args: undefined, initArgs: initArgs });
        Blocks.set(_internal_.id, (_b = {}, _b[internal] = _internal_, _b));
        return _internal_.ins;
    }
    //Traverses an element to find nested element
    function getNode(head, position) {
        var i = 0, l = position.length;
        while (i < l) {
            head = head.childNodes[position[i]];
            i++;
        }
        return head;
    }
    ;
    function runElementEvent(data) {
        var comp = Blocks.get(data.id);
        var keyed_Data = comp[internal].keyed[data.key];
        //Run event
        keyed_Data.$events[data.ev].apply(data.event.target, [data.event, comp]);
        data.event = null;
    }
    function eventHandler(e) {
        var data = this;
        data.event = e;
        runElementEvent(data);
    }
    //Attach event handlers
    function attachEvents(element, events, componentId, key) {
        var eventCallers = {};
        var i, fn;
        for (i in events) {
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
    function removeEvents(element, eventCallers) {
        for (var i in eventCallers) {
            element.removeEventListener(i, eventCallers[i], false);
        }
    }
    var B = new Breaker();
    Object.defineProperty(window, "Breaker", { value: B, configurable: false, enumerable: true, writable: false });
}();
