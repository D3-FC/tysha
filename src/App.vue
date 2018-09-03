<template>
  <div class="tysha-app">
    <tysha-sidebar>
      <domain-logo slot="logo"/>
      <domain-current-user slot="user"/>
      <tysha-list size="lg">
        <tysha-list-item  size="lg" activated>Menu item 1</tysha-list-item>
        <tysha-list-item  size="lg">Menu item 2 with very very long name</tysha-list-item>
        <tysha-list-item  size="lg">Menu item 3</tysha-list-item>
        <tysha-list-item  size="lg">Menu item 4</tysha-list-item>
        <!--<tysha-list-item>Menu item 5</tysha-list-item>-->
        <!--<tysha-list-item>Menu item 6</tysha-list-item>-->
        <!--<tysha-list-item>Menu item 7</tysha-list-item>-->
        <!--<tysha-list-item>Menu item 8</tysha-list-item>-->
        <!--<tysha-list-item>Menu item 9</tysha-list-item>-->
        <!--<tysha-list-item>Menu item 10</tysha-list-item>-->
        <!--<tysha-list-item>Menu item 11</tysha-list-item>-->
        <!--<tysha-list-item>Menu item 12</tysha-list-item>-->
        <!--<tysha-list-item>Menu item 13</tysha-list-item>-->
        <!--<tysha-list-item>Menu item 14</tysha-list-item>-->
        <!--<tysha-list-item>Menu item 15</tysha-list-item>-->
      </tysha-list>
    </tysha-sidebar>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TyshaSidebar from './components/Sidebar/TyshaSidebar.vue'
import TyshaList from './components/List/TyshaList.vue'
import TyshaListItem from './components/List/TyshaListItem.vue'
import DomainLogo from './components/Domain/Logo/DomainLogo.vue'
import DomainCurrentUser from './components/Domain/CurrentUser/DomainCurrentUser.vue'

@Component({
  components: {DomainCurrentUser, DomainLogo, TyshaListItem, TyshaList, TyshaSidebar}
  })
export default class App extends Vue {
}
</script>

//Normalize
<style src="normalize.css"/>
//Reset
<style lang="scss">
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  //body
  //  line-height: 1
  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  .tysha-app {
    background-color: $tysha-color--base;
    height: 100%;
    color: $tysha-color--secondary;
    font-family: Roboto, serif;
  }
</style>
