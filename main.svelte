<script>
export let OLSKSundialSize = 100;
export let OLSKSundialBaseSize = 10;
export let OLSKSundialLineCount = 1;
export let OLSKSundialLineSize = 10;

const lineOrigin = OLSKSundialSize / 2 + OLSKSundialBaseSize * 0.725;
</script>

<svg class="OLSKSundial" width={ OLSKSundialSize } height={ OLSKSundialSize }>

<circle class="OLSKSundialCircle" fill="transparent" r={ OLSKSundialBaseSize } cx={ OLSKSundialSize / 2 } cy={ OLSKSundialSize / 2 } />

{#each Array.from(Array(OLSKSundialLineCount)) as item, index }
	<line class="OLSKSundialLine" x1={ lineOrigin } y1={ lineOrigin } x2={ lineOrigin + OLSKSundialLineSize } y2={ lineOrigin + OLSKSundialLineSize } style="transform: rotateZ({ -45 -90 + (360 / OLSKSundialLineCount * index)  }deg);"/>
{/each}

</svg>

<style src="./ui-style.css"></style>
