const imgContainer = document.getElementById("image");

const wait = (second) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, second * 1000)
    })
}

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found!!"));
    });
  });
};

// Set current image
let currentImg

createImage("./img1.jpg")
  .then((img) => {
    currentImg = img
    console.log("Image 1 loaded");
    return wait(2)
  })
  .then(() => {
    currentImg.style.display = 'none'
    return createImage('./img2.jpg')
  })
  .then(img => {
    currentImg = img
    console.log('Imge 2 loaded!!');
    return wait(2)
  })
  .then(() => {
    currentImg.style.display = 'none'
  })
  .catch((err) => console.log(err))

