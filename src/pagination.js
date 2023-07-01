import Pagination from 'tui-pagination';

const container = document.querySelector('ul');

if (container.children.length === 0) {
    return;
} else {

    if (container.style.width >= '704px') {
        options.itemsPerPage = 3;
    } else {
        options.itemsPerPage = 4;
    }



    const options = {
        itemsPerPage: 4,
        visiblePages: 2,
        page: 1,
        centerAlign: false,
        firstItemClassName: 'shopping-list-button-item',
        lastItemClassName: 'shopping-list-button-item',
        template: {
            page: '<a href="#" class="tui-page-btn">{{page}}</a>',
            currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
            moveButton:
                '<a href="#" class="tui-page-btn tui-{{type}}">' +
                '<span class="tui-ico-{{type}}">{{type}}</span>' +
                '</a>',
            disabledMoveButton:
                '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
                '<span class="tui-ico-{{type}}">{{type}}</span>' +
                '</span>',
            moreButton:
                '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
                '<span class="tui-ico-ellip">...</span>' +
                '</a>'
        }
    }





    const instance = new Pagination(container, options);

    instance.getCurrentPage();
}