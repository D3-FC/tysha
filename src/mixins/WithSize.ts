import { Component, Prop, Vue } from 'vue-property-decorator'
import MegaString from '@/classes/MegaString'
import { KeyToValueMapContract } from '@/interfaces/KeyToValueMapContract'
import { ThemeSize } from '@/enums/ThemeSize'

@Component
export class WithSize extends Vue {
  @Prop({
    validator (v) {
      return Object.values(ThemeSize).indexOf(v) >= 0
    },
    default: 'md'
  }) size!: string

  get kebabCaseComponentName () {
    return new MegaString(this.$options.name || '').toKebabCase()
  }

  get sizeClassList (): Object {
    const result: KeyToValueMapContract = {}
    Object.values(ThemeSize).forEach((color: string) => {
      result[`${this.kebabCaseComponentName}--size_${color}`] = this.size === color
    })
    return result
  }
}
