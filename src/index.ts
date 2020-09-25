export class Path {
  private path = '';

  public M(x: number, y: number) {
    this.path += `M ${x} ${y} `;
    return this;
  }

  public m(dx: number, dy: number) {
    this.path += `m ${dx} ${dy} `;
    return this;
  }

  public L(x: number, y: number) {
    this.path += `L ${x} ${y} `;
    return this;
  }

  public l(dx: number, dy: number) {
    this.path += `l ${dx} ${dy} `;
    return this;
  }

  public H(x: number) {
    this.path += `H ${x} `;
    return this;
  }

  public h(dx: number) {
    this.path += `h ${dx} `;
    return this;
  }

  public V(x: number) {
    this.path += `V ${x} `;
    return this;
  }

  public v(dx: number) {
    this.path += `v ${dx} `;
    return this;
  }

  public C(cx1: number, cy1: number, cx2: number, cy2: number, x: number, y: number) {
    this.path += `C ${cx1} ${cy1} ${cx2} ${cy2} ${x} ${y} `;
    return this;
  }

  public c(cx1: number, cy1: number, cx2: number, cy2: number, dx: number, dy: number) {
    this.path += `c ${cx1} ${cy1} ${cx2} ${cy2} ${dx} ${dy} `;
    return this;
  }

  public S(cx: number, cy: number, x: number, y: number) {
    this.path += `S ${cx} ${cy} ${x} ${y} `;
    return this;
  }

  public s(cx: number, cy: number, dx: number, dy: number) {
    this.path += `s ${cx} ${cy} ${dx} ${dy} `;
    return this;
  }

  public Q(cx: number, cy: number, x: number, y: number) {
    this.path += `Q ${cx} ${cy} ${x} ${y} `;
    return this;
  }

  public q(cx: number, cy: number, dx: number, dy: number) {
    this.path += `q ${cx} ${cy} ${dx} ${dy} `;
    return this;
  }

  public T(x: number, y: number) {
    this.path += `T ${x} ${y} `;
    return this;
  }

  public t(dx: number, dy: number) {
    this.path += `t ${dx} ${dy} `;
    return this;
  }

  public A(rx: number, ry: number, angle: number, largeArcFlag: number, sweepFlag: number, x: number, y: number) {
    this.path += `A ${rx} ${ry} ${angle} ${largeArcFlag} ${sweepFlag} ${x} ${y} `;
    return this;
  }

  public a(rx: number, ry: number, angle: number, largeArcFlag: number, sweepFlag: number, dx: number, dy: number) {
    this.path += `a ${rx} ${ry} ${angle} ${largeArcFlag} ${sweepFlag} ${dx} ${dy} `;
    return this;
  }

  public Z() {
    this.path += 'Z ';
    return this;
  }

  public z() {
    this.path += 'z ';
    return this;
  }

  public get toString() {
    return this.path;
  }
}
