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


// LoadNPause
// const loadNPause = async () => {
//   try {
//     //imgage 1 load
//     let img = await createImage('./img1.jpg')
//     console.log('Image 1 loaded!!!');
//     await wait(2)
//     img.style.display = 'none'
//     // image 2 load
//     img = await createImage('./img2.jpg')
//     console.log('Image 2 loaded!!');
//     await wait(2)
//     img.style.display ='none'
    
//   } catch(err) {
//     console.log(err);
//   }
// }

// loadNPause()

const loadAll = async function(imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img))
    const imgElement = await Promise.all(imgs)
    imgElement.forEach(img => img.classList.add('parallel'))
  } catch (err) {
    console.log(err);
  }
}

loadAll(['./img1.jpg', './img2.jpg', './img3.jpg'])