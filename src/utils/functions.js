// Add a scroll event listener to the window
window.addEventListener("scroll", () => {
	const stickyElement = document.querySelector(".navbar");
	const stickyPosition = stickyElement?.offsetTop;
	const searchElementPosition = stickyElement?.offsetTop;
	// Get the current scroll position
	const scrollPosition = window.scrollY;

	// Check if the scroll position has passed the sticky element
	if (scrollPosition >= stickyPosition) {
		// Add the "sticky" CSS class to the element
		stickyElement.classList.add("sticky");
	}
	if (scrollPosition <= searchElementPosition) {
		// Remove the "sticky" CSS class from the element
		stickyElement.classList.remove("sticky");
	}
});
