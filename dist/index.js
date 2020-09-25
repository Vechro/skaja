export class Path {
    constructor() {
        this.path = '';
    }
    M(x, y) {
        this.path += `M ${x} ${y} `;
        return this;
    }
    m(dx, dy) {
        this.path += `m ${dx} ${dy} `;
        return this;
    }
    L(x, y) {
        this.path += `L ${x} ${y} `;
        return this;
    }
    l(dx, dy) {
        this.path += `l ${dx} ${dy} `;
        return this;
    }
    H(x) {
        this.path += `H ${x} `;
        return this;
    }
    h(dx) {
        this.path += `h ${dx} `;
        return this;
    }
    V(x) {
        this.path += `V ${x} `;
        return this;
    }
    v(dx) {
        this.path += `v ${dx} `;
        return this;
    }
    C(cx1, cy1, cx2, cy2, x, y) {
        this.path += `C ${cx1} ${cy1} ${cx2} ${cy2} ${x} ${y} `;
        return this;
    }
    c(cx1, cy1, cx2, cy2, dx, dy) {
        this.path += `c ${cx1} ${cy1} ${cx2} ${cy2} ${dx} ${dy} `;
        return this;
    }
    S(cx, cy, x, y) {
        this.path += `S ${cx} ${cy} ${x} ${y} `;
        return this;
    }
    s(cx, cy, dx, dy) {
        this.path += `s ${cx} ${cy} ${dx} ${dy} `;
        return this;
    }
    Q(cx, cy, x, y) {
        this.path += `Q ${cx} ${cy} ${x} ${y} `;
        return this;
    }
    q(cx, cy, dx, dy) {
        this.path += `q ${cx} ${cy} ${dx} ${dy} `;
        return this;
    }
    T(x, y) {
        this.path += `T ${x} ${y} `;
        return this;
    }
    t(dx, dy) {
        this.path += `t ${dx} ${dy} `;
        return this;
    }
    A(rx, ry, angle, largeArcFlag, sweepFlag, x, y) {
        this.path += `A ${rx} ${ry} ${angle} ${largeArcFlag} ${sweepFlag} ${x} ${y} `;
        return this;
    }
    a(rx, ry, angle, largeArcFlag, sweepFlag, dx, dy) {
        this.path += `a ${rx} ${ry} ${angle} ${largeArcFlag} ${sweepFlag} ${dx} ${dy} `;
        return this;
    }
    Z() {
        this.path += 'Z ';
        return this;
    }
    z() {
        this.path += 'z ';
        return this;
    }
    get toString() {
        return this.path;
    }
}
