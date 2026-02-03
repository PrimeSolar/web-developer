/*
 * Script
 *
 * Copyright © Vladislav Kazantsev
 * All rights reserved.
 * This code is the intellectual property of Vladislav Kazantsev.
 * You are welcome to clone the related repository and use the code for exploratory purposes.
 * However, unauthorized reproduction, modification, or redistribution of this code (including cloning of related repository or altering it for activities beyond exploratory use) is strictly prohibited.
 * Code snippets may be shared only when the original author is explicitly credited and a direct link to the original source of the code is provided alongside the code snippet.
 * Sharing the link to the file is permitted, except when directed toward retrieval purposes.
 * Any form of interaction with this file is strictly prohibited when facilitated by the code, except when such interaction is for discussion or exchange purposes with others.
 * This copyright notice applies globally.
 * For inquiries about collaboration, usage outside exploratory purposes, or permissions, please contact: hypervisor7@pm.me
 */

document.addEventListener("DOMContentLoaded", () => {
  const email = document.querySelector(".email");
  if (!email) return;
  const emailWrapper = document.createElement("div");
  emailWrapper.classList.add("wrapper");

  const copyEmailBtn = document.createElement("button");
  copyEmailBtn.classList.add("copy-button");
  copyEmailBtn.textContent = "Copy Email";
  copyEmailBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email.querySelector("a").textContent);
      copyEmailBtn.textContent = "Copied ✓";
      copyEmailBtn.classList.add("copied");
      setTimeout(() => {
        copyEmailBtn.textContent = "Copy Email";

        copyEmailBtn.classList.remove("copied");
      }, 1700);
    } catch (e) {
      alert("Clipboard unavailable");
    }
  });
  emailWrapper.appendChild(copyEmailBtn);

  email.appendChild(emailWrapper);

  const phone = document.querySelector(".phone");
  if (!phone) return;
  const phoneWrapper = document.createElement("div");
  phoneWrapper.classList.add("wrapper");

  const copyPhoneBtn = document.createElement("button");
  copyPhoneBtn.classList.add("copy-button");
  copyPhoneBtn.textContent = "Copy Phone";
  copyPhoneBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(phone.querySelector("a").textContent);
      copyPhoneBtn.textContent = "Copied ✓";
      copyPhoneBtn.classList.add("copied");
      setTimeout(() => {
        copyPhoneBtn.textContent = "Copy Phone";

        copyPhoneBtn.classList.remove("copied");
      }, 1700);
    } catch (e) {
      alert("Clipboard unavailable");
    }
  });
  phoneWrapper.appendChild(copyPhoneBtn);

  phone.appendChild(phoneWrapper);
});
