export default class MegaString {
  private _text: string

  constructor (text: string) {
    this._text = text
  }

  toKebabCase(){
    return this._text
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '-')
      .toLowerCase()
  }

  get kebabCased(){
    return this.toKebabCase()
  }
}
