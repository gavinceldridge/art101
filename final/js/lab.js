let saturationVal = 0;
let exposureVal = 0;
let contrastVal = 0;
let brightnessVal = 0;
let hueVal = 0;

// taken from https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL#javascript
// turns the given file into a picture
const previewFile = () => {
	//removes old images if replacing
	$("#outputimg").remove();
	$("#inputimg").remove();
	//const preview = document.getElementById('outputimg');
	const file = document.querySelector("input[type=file]").files[0];
	const reader = new FileReader();
	reader.addEventListener(
		"load",
		() => {
			// convert image file to base64 string
			//After Image
			//creates img elelment
			var afterImgElement = document.createElement("img");
			afterImgElement.setAttribute("id", "outputimg");
			afterImgElement.src = reader.result;
			document.getElementById("after").appendChild(afterImgElement);
			//Before Image
			//creates img elelment
			var beforeImgElement = document.createElement("img");
			beforeImgElement.setAttribute("id", "inputimg");
			//changes the src of the element to uploaded file src
			beforeImgElement.src = reader.result;
			//appends new img element to before div
			document.getElementById("before").appendChild(beforeImgElement);
		},
		false
	);
	if (file) {
		reader.readAsDataURL(file);
	}
}

// A function added to the randomizer button that adds all the randomized elements
$("#imageInput").on("input", () => {
	// sets the img into a canvas that can now be used to be editing, as well as resize the image keeping the original ratio

	Caman("#outputimg", () => {
		// resize the img
		this.resize({
			//width: 600
		});
		this.render();
	});
	//

	// assigns the slider inputs into Variables
	// NEED TO FIND OUT HOW TO GET SLIDER VARIABLE
	var pic_saturation = $("#img_Saturation");
	var pic_exposure = $("#img_Exposure");
	var pic_contrast = $("#img_Contrast");
	var pic_brightness = $("#img_brightness");
	var pic_hue = $("#img_hue");

	$("#img_Saturation").on("input", () => {
		$("#Saturation_val").html(pic_saturation.val());
		saturationVal = pic_saturation.val();
	});

	$("#img_Exposure").on("input", () => {
		$("#Exposure_val").html(pic_exposure.val());
		exposureVal = pic_exposure.val();
	});

	$("#img_brightness").on("input", () => {
		$("#Brightness_Val").html(pic_brightness.val());
		brightnessVal = pic_brightness.val();
	});

	$("#img_Contrast").on("input", () => {
		$("#Contrast_Val").html(pic_contrast.val());
		contrastVal = pic_contrast.val();
	});

	$("#img_hue").on("input", () => {
		$("#Hue_Val").html(pic_hue.val());
		hueVal = pic_hue.val();
	});

	// changes variables to slider #applyButton
	$("#applyButton").click(() => {
		//removes old AFTER image element
		$("#outputimg").remove();
		$("#after").find("img").remove();
		//creates new AFTER image element
		const file = document.querySelector("input[type=file]").files[0];
		const reader = new FileReader();
		reader.addEventListener(
			"load",
			() => {
				var afterImgElement = document.createElement("img");
				afterImgElement.setAttribute("id", "outputimg");
				afterImgElement.src = reader.result;
				document.getElementById("after").appendChild(afterImgElement);
				//calls apply changes function
				applyChanges();
			},
			false
		);
		if (file) {
			reader.readAsDataURL(file);
		}
	});

	//apply settings changes
	ap =>plyChanges() {
		Caman("#outputimg", () => {
			//sets image propertie
			this.contrast(contrastVal / 4);
			this.saturation(saturationVal / 2);
			this.exposure(exposureVal / 2);
			this.brightness(brightnessVal / 2);
			this.hue(hueVal / 4);
			this.render();
		});
	}

	//randomize function

	// on click, randomizes picture
	$("#random_var").click(() => {
		//removes old AFTER image element
		$("#outputimg").remove();
		$("#after").find("img").remove();
		//creates new AFTER image element
		const file = document.querySelector("input[type=file]").files[0];
		const reader = new FileReader();
		reader.addEventListener(
			"load",
			() => {
				var afterImgElement = document.createElement("img");
				afterImgElement.setAttribute("id", "outputimg");
				afterImgElement.src = reader.result;
				document.getElementById("after").appendChild(afterImgElement);
				//calls randomize function
				randomize();
			},
			false
		);
		if (file) {
			reader.readAsDataURL(file);
		}
	});

	//randomize function
	const randomize = () => {
		//creates random integer vars for each value
		saturationVal = Math.round(Math.random() * (100 - -100) + -100);
		exposureVal = Math.round(Math.random() * (100 - -100) + -100);
		contrastVal = Math.round(Math.random() * (100 - -100) + -100);
		brightnessVal = Math.round(Math.random() * (100 - -100) + -100);
		hueVal = Math.round(Math.random() * (100 - -100) + -100);
		//puts value on slider
		$("#Saturation_val").html(saturationVal);
		$("#Exposure_val").html(exposureVal);
		$("#Contrast_Val").html(contrastVal);
		$("#Brightness_Val").html(brightnessVal);
		$("#Hue_Val").html(hueVal);
		//sets slider location to value
		//saturation
		saturationSlider = document.getElementById("img_Saturation");
		saturationSlider.value = saturationVal;

		//Exposure
		exposureSlider = document.getElementById("img_Exposure");
		exposureSlider.value = exposureVal;

		//Contrast
		contrastSlider = document.getElementById("img_Contrast");
		contrastSlider.value = contrastVal;

		//birhgtness
		brightnessSlider = document.getElementById("img_brightness");
		brightnessSlider.value = brightnessVal;

		//Hue
		HueSlider = document.getElementById("img_hue");
		HueSlider.value = hueVal;

		//calls apply changes function
		applyChanges();
	}

	//downlaod
	// let downloadButton = document.getElementById("download");
	// let img = document.getElementById("outputimg");
	//
	//
	// downloadButton.addEventListener('click', () => {
	//   let imgPath = img.getAttribute('src');
	//   let filename = getFileName(imgPath);
	//
	//   saveas(imgPath, filename);
	// });
	//
	// function getFileName(str){
	//   return str.substring(str.last.lastIndexOf('/')+1);
	// }

	let downloadLink = "";
	$("#download").click(() => {
		Caman("#outputimg", () => {
			downloadLink = document.getElementById("outputimg").src;
			//var downloadLink = $('img#outputimg').src;
			this.render(() => {
				this.save(downloadLink);
			});
		});
	});

	//buton coldowns

	//random button cooldown
	$("#random_var").click(() => {
		var btn = $(this);
		btn.prop("disabled", true);
		setTimeout(() => {
			btn.prop("disabled", false);
		}, 500);
	});

	// apply changes cool down
	$("#applyButton").click(() => {
		var btn = $(this);
		btn.prop("disabled", true);
		setTimeout(() => {
			btn.prop("disabled", false);
		}, 500);
	});
});
