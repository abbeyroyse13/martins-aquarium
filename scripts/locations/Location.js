export const location = (locationObj) => {
	return (
	`<article class="location-card">
		<h3 class="location-name">${locationObj.name}</h3>
		<ul>
			<li class="locationTip-details">${locationObj.tip}</li>
		</ul>
	</article>`
	)
} 