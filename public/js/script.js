const showAlert = document.querySelector("[show-alert]");
if (showAlert) {
  const time = parseInt(showAlert.getAttribute("data-time"));
  const closeAlert = showAlert.querySelector("[close-alert]");

  setTimeout(() => {
    showAlert.classList.add("alert-hidden");
  }, time);

  closeAlert.addEventListener("click", () => {
    showAlert.classList.add("alert-hidden");
  });
}
const userPrint = document.querySelector("#user-print");
if (userPrint) {
  userPrint.addEventListener("click", () => {
    window.location.href = "/user/print";
  });
}
const userBuyPaper = document.querySelector("#user-buy-paper");
if (userBuyPaper) {
  userBuyPaper.addEventListener("click", () => {
    window.location.href = "/user/buy-paper";
  });
}
const userHistory = document.querySelector("#user-history");
if (userHistory) {
  userHistory.addEventListener("click", () => {
    window.location.href = "/user/history";
  });
}
// const uploadFile = document.querySelector(".upload-file");
// if (uploadFile) {
//   uploadFile.addEventListener("click", () => {
//     const file = document.querySelector(".upload-file-input");
//     if (file) {
//       if (!file.getAttribute("disabled")) {
//         file.click();
//       }
//       file.addEventListener("change", () => {
//         if (file.files.length > 0) {
//           const selectedFileName = file.files[0].name;
//           uploadFile.innerHTML = selectedFileName;
//           file.setAttribute("disabled", "disabled");
//         }
//       });
//     }
//   });
// }

// const printButton = document.querySelector(".print-button");

// if (printButton) {
//   printButton.addEventListener("click", () => {
//     const file = document.querySelector(".upload-file-input");

//     if (file && file.files.length > 0) {
//       const selectedFile = file.files[0];
//       console.log(selectedFile);
//       const fileURL = URL.createObjectURL(selectedFile);

//       const printWindow = window.open(fileURL, "_blank");

//       if (printWindow !== null) {
//         printWindow.onload = function () {
//           printWindow.print();
//           URL.revokeObjectURL(fileURL); // Clean up the object URL
//         };
//       } else {
//         alert("Please allow pop-ups to print the file.");
//       }
//     } else {
//       alert("Please select a file.");
//     }
//   });
// }
const uploadFile = document.querySelector(".upload-file");
const fileInput = document.querySelector(".upload-file-input");

if (uploadFile && fileInput) {
  uploadFile.addEventListener("click", () => {
    if (!fileInput.getAttribute("disabled")) {
      fileInput.click();
    }

    fileInput.addEventListener("change", () => {
      if (fileInput.files.length > 0) {
        const selectedFileName = fileInput.files[0].name;
        uploadFile.innerHTML = selectedFileName;
      }
    });
  });
}

const printButton = document.querySelector(".print-button");

if (printButton) {
  printButton.addEventListener("click", () => {
    if (fileInput && fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      const fileURL = URL.createObjectURL(selectedFile);

      const printWindow = window.open(fileURL, "_blank");

      if (printWindow !== null) {
        printWindow.onload = function () {
          printWindow.print();
          URL.revokeObjectURL(fileURL); // Clean up the object URL
        };
      } else {
        alert("Please allow pop-ups to print the file.");
      }
    } else {
      alert("Please select a file.");
    }
  });
}
const previewButton = document.querySelector(".preview-button");
// const fileInput = document.querySelector(".upload-file-input");

if (previewButton && fileInput) {
  previewButton.addEventListener("click", () => {
    if (fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      const fileURL = URL.createObjectURL(selectedFile);

      const previewWindow = window.open(fileURL, "_blank");

      if (!previewWindow) {
        alert("Please allow pop-ups to preview the file.");
      }
    } else {
      alert("Please select a file to preview.");
    }
  });
}

const paperType = document.querySelector("#paperType");
const quantity = document.querySelector("#quantity");
const price = document.querySelector("#price");

function calculatePrice() {
  if (paperType && paperType.value !== "none" && quantity) {
    let money = 0;

    if (paperType.value === "A4") {
      money = quantity.value * 1000;
    } else if (paperType.value === "A3") {
      money = quantity.value * 2000;
    } else if (paperType.value === "A2") {
      money = quantity.value * 3000;
    }

    price.innerHTML = `Th&agrave;nh ti&#x1EC1;n: <span class="total-price">${money} &#x111;</span>`;
    price.classList.remove("d-none");
  }
}

if (paperType) {
  paperType.addEventListener("change", calculatePrice);
}

if (quantity) {
  quantity.addEventListener("input", calculatePrice);
}
