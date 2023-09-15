const sortableList = document.querySelector('.sortable-list');

new Sortable(sortableList, {
    animation: 150,
    handle: '.drag-indicator'
});
