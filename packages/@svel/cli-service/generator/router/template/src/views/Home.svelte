<%_ if (!rootOptions.bare) { _%>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.svelte'
import logo from './assets/logo.png';
</script>
<%_ } _%>

<div class="home">
  <img alt="Svelte logo" src={logo}>
  <%_ if (!rootOptions.bare) { _%>
  <HelloWorld message="Svelte"/>
  <%_ } else { _%>
  <h1>Welcome to Your Svelte.js App</h1>
  <%_ } _%>
</div>
