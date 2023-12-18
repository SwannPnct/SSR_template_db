<script>
	import '../app.pcss';

	export let data
  	$: ({ session } = data)
</script>

<slot />
