const sortableList = document.querySelector('.sortable-list');
const sortableItems = document.querySelectorAll('.sortable-list li');

let sortableItem;
let sortableIcon;

sortableItems.forEach(item => {

    const dragIndicator = item.querySelector('img');

    dragIndicator.addEventListener('dragstart', () => {
        sortableItem = item;
        sortableIcon = dragIndicator;
    });

    dragIndicator.addEventListener('dragover', () => {
        const sortableIconRect = sortableIcon.getBoundingClientRect();
        const dragIndicatorRect = dragIndicator.getBoundingClientRect();
        if (sortableIconRect.top > dragIndicatorRect.top) {
            sortableList.insertBefore(sortableItem, item);
        } else {
            sortableList.insertBefore(item, sortableItem);
        }
    });

});
