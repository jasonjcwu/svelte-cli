<%_ if (!rootOptions.router) { _%>
<script>
import HelloWorld from './components/HelloWorld.svelte'
import logo from './assets/logo.png';
</script>

<div id="app">
  <img alt="Svelte logo" src={logo}>
  <%_ if (!rootOptions.bare) { _%>
  <HelloWorld message="Svelte"/>
  <%_ } else { _%>
  <h1>Welcome to Your Svelte.js App</h1>
  <%_ } _%>
</div>
<%_ if (!rootOptions.bare) { _%>
  <%_ } _%>
<%_ } else { _%>
  <div id="app">
    <div id="nav">
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
    </div>
    <RouterView/>
  </div>
<%_ } _%>
<%_ if (!rootOptions.bare) { _%>
<%_ if (rootOptions.cssPreprocessor !== 'stylus') { _%>

<style<%-
  rootOptions.cssPreprocessor
    ? ` lang="${
        rootOptions.cssPreprocessor.includes('sass')
          ? 'scss'
          : rootOptions.cssPreprocessor
      }"`
    : ``
%>>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  <%_ if (!rootOptions.router) { _%>
  margin-top: 60px;
  <%_ } _%>
}
<%_ if (rootOptions.router) { _%>
  <%_ if (!rootOptions.cssPreprocessor) { _%>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
  <%_ } else { _%>
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  <%_ } _%>
<%_ } _%>
</style>
<%_ } else { _%>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  <%_ if (!rootOptions.router) { _%>
  margin-top 60px
  <%_ } _%>
<%_ if (rootOptions.router) { _%>

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
<%_ } _%>
</style>
<%_ } _%>
<%_ } _%>
