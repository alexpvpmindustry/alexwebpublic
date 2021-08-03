import { conjson } from "cnt2.js";
import { Web3 } from "https://cdn.jsdelivr.net/npm/web3@1.3.4/dist/web3.min.js";
window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
  console.log("script loa22ded");
  render();
  console.log("script fin");
});

//contractjson
const render = async () => {
  const web3 = new Web3("https://bsc-dataseed.binance.org/");
  const contractABI = conjson;
  console.log(conjson);
  let contractAddress = "0x3c37ab18d0ec386d06dd68e3470e49bfdc0d46e8";
  let contract = new web3.eth.Contract(
    JSON.parse(contractABI),
    contractAddress
  );
  const currentMessage = await contract.methods
    .a_public_getContractBalanceWeiTok()
    .call();
  console.log(currentMessage.weii);
};
