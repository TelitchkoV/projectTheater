
/*----------------- Будущий переключатель видео -----------------*/
var indexSliderVideoID_counter = 0;
var indexSliderVideoID_list = new Array(
  "g11PUtKEk6k",
  "nslac9Tk0wE",
  "41RnqAE-jRA",
  "Othd8W8o3t0",
  "pEyrpF0kSKI",
  "PJX6a06gnEY"
);
// var indexSliderVideoID = getVideoID();
function getVideoID() {
  return indexSliderVideoID_list[indexSliderVideoID_counter];
}
document.getElementById("index-slider-video").src ="https://www.youtube.com/embed/" + getVideoID() + "?autoplay=1&rel=0&showinfo=0&modestbranding=1";



/*----------------- Клик на превью видео -----------------*/
const btnIndexSliderThumbnail = document.getElementById("index-slider-thumbnail");

btnIndexSliderThumbnail.addEventListener("click", function () {
  document.getElementById("testBg").style.display = "block";
  btnIndexSliderThumbnail.style.display = "none";
  document.getElementById("index-slider-video").style.display = "block";
});
