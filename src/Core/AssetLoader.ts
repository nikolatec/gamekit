export default class AssetLoader {
  static loadcount = 0;
  static loadtotal = 0;
  static preloaded = false;
  static loadedImages: any[] = [];

  static loadImages(imagefiles: any) {
    // Initialize variables
    this.loadcount = 0;
    this.loadtotal = imagefiles.length;
    this.preloaded = false;
 
    // Load the images
    const loadedImages = [];
    for (let i=0; i<imagefiles.length; i++) {
        // Create the image object
        var image = new Image();
 
        // Add onload event handler
        image.onload = () => {
            this.loadcount++;
            if (this.loadcount == this.loadtotal) {
                // Done loading
                this.preloaded = true;
            }
        };
 
        // Set the source url of the image
        image.src = imagefiles[i];
 
        // Save to the image array
        loadedImages[i] = image;
    }
 
    // Return an array of images
    this.loadedImages = loadedImages;
  }
}