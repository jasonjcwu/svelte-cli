<%_ if (!rootOptions.bare) { _%>
<script>
export let message = 'World';
</script>

<div class="hello">
  <h1>Hello {message}!</h1>
  <p>
    For a guide and recipes on how to configure / customize this project,<br>
    check out the
    <a href="https://github.com/wmzy/svelte-cli" target="_blank" rel="noopener">svelte-cli documentation</a>.
  </p>
  <h3>Installed CLI Plugins</h3>
  <ul>
    <%_ for (plugin of plugins) { _%>
    <li><a href="<%- plugin.link %>" target="_blank" rel="noopener"><%- plugin.name %></a></li>
    <%_ } _%>
  </ul>
  <h3>Essential Links</h3>
  <ul>
    <li><a href="https://svelte.dev" target="_blank" rel="noopener">Core Docs</a></li>
  </ul>
</div>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<%_ if (rootOptions.cssPreprocessor !== 'stylus') { _%>
<style scoped<%-
  rootOptions.cssPreprocessor
    ? ` lang="${
        rootOptions.cssPreprocessor.includes('sass')
          ? 'scss'
          : rootOptions.cssPreprocessor
      }"`
    : ``
%>>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<%_ } else { _%>
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
<%_ } _%>
<%_ } _%>
