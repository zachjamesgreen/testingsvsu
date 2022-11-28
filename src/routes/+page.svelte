<script>
  import { supabase } from "../lib/db";
	import { onMount } from "svelte";
  let count = 0;

  function incrementCount() {
    count++;
  }
  

</script>

<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>

<div>
  <p>The count {count}</p>
  <button class="border border-cyan-700 rounded-lg p-2 bg-cyan-500 hover:bg-cyan-300 hover:underline" on:click={incrementCount}>Increase</button>
</div>
