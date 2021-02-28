export const Tip = (tipObj) => {
	return (
	`<article class="tip-card">
		<h3 class="tip-name">${tipObj.name}</h3>
		<ul>
			<li class="tip-details">${tipObj.tip}</li>
		</ul>
	</article>`
	)
} 