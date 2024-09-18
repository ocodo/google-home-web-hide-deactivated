document.querySelectorAll('mat-card').forEach(card => {
    const description = card.querySelector('.description');
    if (description && description.textContent.includes('Deactivated ')) {
        card.style.display = 'none';
    }
});

