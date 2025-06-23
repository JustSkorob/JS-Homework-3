document.addEventListener('DOMContentLoaded', function() {
    const book = document.querySelector('.book');
    const fontSizes = document.querySelectorAll('.font-size');
    const textColors = document.querySelectorAll('.color[data-color]');
    const bgColors = document.querySelectorAll('.color.bg[data-bg]');

    fontSizes.forEach(size => {
        size.addEventListener('click', function(e) {
            e.preventDefault();
            
            fontSizes.forEach(s => s.classList.remove('font-size_active'));
            this.classList.add('font-size_active');
            
            book.classList.remove('book_fs-small', 'book_fs-big');
            
            if (this.dataset.size === 'small') {
                book.classList.add('book_fs-small');
            } else if (this.dataset.size === 'big') {
                book.classList.add('book_fs-big');
            }
        });
    });

    textColors.forEach(color => {
        color.addEventListener('click', function(e) {
            e.preventDefault();
            
            textColors.forEach(c => c.classList.remove('color_active'));
            this.classList.add('color_active');
            
            book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
            
            book.classList.add(`book_color-${this.dataset.color}`);
        });
    });

    bgColors.forEach(bg => {
        bg.addEventListener('click', function(e) {
            e.preventDefault();
            
            bgColors.forEach(b => b.classList.remove('color_active'));
            this.classList.add('color_active');
            
            book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
            
            book.classList.add(`book_bg-${this.dataset.bg}`);
        });
    });
});
