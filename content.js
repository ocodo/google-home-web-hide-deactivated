function hideDeactivatedCards() {
    document.querySelectorAll('mat-card').forEach(card => {
        const description = card.querySelector('.description');
        if (description && description.textContent.includes('Deactivated ')) {
            card.style.display = 'none';
        }
    });

    removeFakeAddButton()
}

function removeFakeAddButton() {
    const fakeButton = Array.from(document.querySelectorAll('mat-toolbar .group'))[3]
    if (fakeButton) fakeButton.style.display = 'none'
}

function observe(mutation) {
    mutation.forEach(hideDeactivatedCards)
}

hideDeactivatedCards()

const observer = new MutationObserver(observe)

observer.observe(document.body, {
    childList: true,
    subtree: true
})
