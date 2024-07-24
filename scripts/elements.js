// Footer
footerContainer = document.querySelector("#footerContainer");

function footerContainerF(footerContainer) {
  if (footerContainer != null) {
    // Define footer content:
    footerContainer.innerHTML += `
Copyright © 2024 Vladislav Kazantsev. <span class="nowrap">All Rights Reserved.</span>
      `
  }
}
footerContainerF(footerContainer);
