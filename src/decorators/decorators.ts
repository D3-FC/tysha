import { createDecorator } from 'vue-class-component'

export const NoCache = createDecorator((options: any, key) => {
  options.computed[key].cache = false
})
