window.addEventListener('keydown', (event) => {
    // Check if Ctrl (Windows) or Cmd (Mac) is pressed along with 'S'
    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        event.preventDefault(); // Prevents the browser's default "Save Page As" dialog
        window.print()
    }
});

window.addEventListener("DOMContentLoaded", () => {
    const date = new Date();

    // Get full month name (e.g., "July")
    const monthName = date.toLocaleString('default', { month: 'long' });

    // Get 4-digit year (e.g., 2026)
    const year = date.getFullYear();

    document.title = `CV - J. M Areeb Uzair Alam - ${monthName} ${year}`
})