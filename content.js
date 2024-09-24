const deactivatedTerms = [
    'Deactivated',
    'Deaktivováno'
];

function hideDeactivatedCards() {
    document.querySelectorAll('mat-card').forEach(card => {
        const description = card.querySelector('.description')?.textContent;
        if (description && deactivatedTerms.some(term => description.startsWith(term))) {
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
