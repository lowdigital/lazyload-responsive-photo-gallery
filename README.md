
# Minimalist Photo Gallery

This repository provides a minimalist, responsive photo gallery with lazy loading. It is designed to handle a large number of images efficiently, ensuring fast load times for users while remaining search engine friendly despite the use of lazy loading.

Demo: [https://lowdigital.github.io/lazyload-responsive-photo-gallery/](https://lowdigital.github.io/lazyload-responsive-photo-gallery/)

## Features

- **Responsive Design**: Adapts to different screen sizes, ensuring a good user experience on both desktop and mobile devices.
- **Lazy Loading**: Loads images as they come into the viewport, reducing initial load time.
- **SEO Friendly**: Optimized for search engines even with lazy loading.
- **Tooltips**: Provides additional image information on hover for desktop users.
- **FancyBox Integration**: Offers a smooth, modern lightbox experience for viewing images.

## Folder Structure

- **index.php**: Main file that sets up the photo gallery.
- **data.html**: Contains the gallery items (links to images with necessary attributes).
- **assets/**: Contains CSS and JS files.
  - **app.css**: Custom styles for the gallery.
  - **app.js**: Custom scripts for the gallery.
- **img/**: Full-size images.
- **thumb/**: Thumbnail versions of the images for lazy loading.
- **placeholder.jpg**: Placeholder image for lazy loading.

## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/lowdigital/lazyload-responsive-photo-gallery.git
   cd lazyload-responsive-photo-gallery
   ```

2. **Ensure you have PHP installed**.

3. **Place your images**:
   - Add your full-size images to the `img` directory.
   - Add corresponding thumbnails to the `thumb` directory.

4. **Configure data.html**:
   - Add entries for your images in `data.html`. Each entry should be in the format:
     ```html
     <a href="img/yourimage.jpg" data-fancybox="gallery" class="gallery-item">
       <img src="/placeholder.jpg" data-src="thumb/yourimage_thumb.jpg" alt="Your image description">
     </a>
     ```

## Usage

Open `index.php` in your web browser to view the gallery.

## Customization

- **Styles**: Modify `assets/app.css` to change the appearance of the gallery.
- **Scripts**: Modify `assets/app.js` to customize the functionality.

## Example

Here is an example of how to add an image to the gallery:

1. **Add the full-size image** to the `img` directory:
   ```sh
   cp /path/to/yourimage.jpg img/
   ```

2. **Add the thumbnail** to the `thumb` directory:
   ```sh
   cp /path/to/yourimage_thumb.jpg thumb/
   ```

3. **Update `data.html`** with the new image:
   ```html
   <a href="img/yourimage.jpg" data-fancybox="gallery" class="gallery-item">
     <img src="/placeholder.jpg" data-src="thumb/yourimage_thumb.jpg" alt="Description of your image">
   </a>
   ```

## SEO Considerations

The gallery is designed to be search engine friendly. To further enhance SEO:

- Ensure `alt` attributes for all images are descriptive.
- Keep `data.html` updated with accurate and relevant information about each image.

## Dependencies

- [FancyBox](https://fancyapps.com/fancybox/4/)
- [Tippy.js](https://atomiks.github.io/tippyjs/)
- [Popper.js](https://popper.js.org/)

These libraries are included via CDN in `index.php`.

## License

This project is licensed under the MIT License.

## Contributing

Feel free to fork the project, create a branch, make your changes, and submit a pull request. Contributions are welcome!

## Author

- **Your Name** - [@lowdigital](https://t.me/low_digital)
