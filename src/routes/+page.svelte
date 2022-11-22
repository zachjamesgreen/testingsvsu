<script>
  import { supabase } from "../lib/db";
	import { onMount } from "svelte";

  let names = [];

  onMount(() => {
    fetchNames()
  })

  const fetchNames = async () => {
    let {data, error} = await supabase.from("name").select("*");
    if (error) {
      console.log("error", error)
    } else {
      names = data
    }
  }

  

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>

<div>
  {#each names as name (name.id)}
    {name.name} {name.id} {name.created_at}
  {/each}
</div>
