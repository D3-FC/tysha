import { Component, Prop, Vue } from 'vue-property-decorator'
import MegaString from '@/classes/MegaString'
import { KeyToValueMapContract } from '@/interfaces/KeyToValueMapContract'
import { ThemeColor } from '@/enums/ThemeColor'

@Component
export class WithColor extends Vue {
  @Prop({
    validator (v) {
      return Object.values(ThemeColor).indexOf(v) >= 0
    }
  }) color!: string

  get kebabCaseComponentName () {
    return new MegaString(this.$options.name || '').toKebabCase()
  }

  get colorClassList (): Object {
    const result: KeyToValueMapContract = {}
    Object.values(ThemeColor).forEach((color: string) => {
      result[`${this.kebabCaseComponentName}--color_${color}`] = this.color === color
    })
    return result
  }
}
