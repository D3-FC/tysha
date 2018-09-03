import { Component, Prop, Vue } from 'vue-property-decorator'
import MegaString from '@/classes/MegaString'
import { KeyToValueMapContract } from '@/interfaces/KeyToValueMapContract'
import { ThemeLayer } from '@/enums/ThemeLayer'

@Component
export class WithLayer extends Vue {
  @Prop({
    validator (v) {
      return Object.values(ThemeLayer).indexOf(v) >= 0
    },
    default: ThemeLayer.base
  }) layer!: string

  get kebabCaseComponentName () {
    return new MegaString(this.$options.name || '').toKebabCase()
  }

  get layerClassList (): object {
    const result: KeyToValueMapContract = {}
    Object.values(ThemeLayer).forEach((layer: string) => {
      result[`${this.kebabCaseComponentName}--layer_${layer}`] = this.layer === layer
    })
    return result
  }
}
