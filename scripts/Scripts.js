// ******************************************************************sidebar toggle script*************************************************************************************//
// Variables
const body = document.querySelector("body"),
 sidebar = body.querySelector(".sidebar"),
 mainPageIcon = document.querySelector(".main-page-icon"),
 sidebar2 = body.querySelector(".sidebar2");
 const sidebar1Col = document.querySelector(".sidebar1-col");
 const sidebar2Col = document.querySelector(".sidebar2-col");

toggles1 = [
  {
    toggle: body.querySelector(".toggle"),
    sidebarToToggle: sidebar,
    sidebarToClose: sidebar2,
  },
  {
    toggle: body.querySelector(".toggle4"),
    sidebarToToggle: sidebar,
    sidebarToClose: sidebar2,
  },
];
toggles2 = [
  {
    toggle: body.querySelector(".toggle2"),
    sidebarToToggle: sidebar2,
    sidebarToClose: sidebar,
  },
];
// Event Listeners
toggles1.forEach(({ toggle, sidebarToToggle, sidebarToClose}) => {
  toggle.addEventListener("click", () => {
    
    const collapsibleElements = sidebar.querySelectorAll(".collapse");
    collapsibleElements.forEach((element) => {
      const collapseInstance = bootstrap.Collapse.getInstance(element);
      if (collapseInstance) {
        collapseInstance.hide();
      }
    });

      sidebarToToggle.classList.toggle("close");
      sidebar1Col.classList.toggle("close");
      sidebarToClose.classList.add("close2");
      sidebar2Col.classList.add("close2");
      if (window.innerWidth > 1500) {
        
      if (mainPageIcon) {
        if (sidebarToToggle.classList.contains("close")) {
          mainPageIcon.style.left = ""; 
          mainPageIcon.style.bottom = ""; 
        } else {
          mainPageIcon.style.left = "-60px";
          mainPageIcon.style.bottom = "60px";
        }
      }
      }
  });
});

toggles2.forEach(({ toggle, sidebarToToggle, sidebarToClose }) => {
  toggle.addEventListener("click", () => {
    sidebarToToggle.classList.toggle("close2");
    sidebarToToggle.classList.add("open");
    sidebar2Col.classList.toggle("close2");
    sidebar2Col.classList.add("open");
    const collapsibleElements = sidebar.querySelectorAll(".collapse");
    collapsibleElements.forEach((element) => {
      const collapseInstance = bootstrap.Collapse.getInstance(element);
      if (collapseInstance) {
        collapseInstance.hide();
      }
    });
    setTimeout(() => {
      sidebarToClose.classList.add("close");
      sidebar1Col.classList.add("close");

      if (window.innerWidth > 1500) {
        
        if (mainPageIcon) {
          if (sidebarToToggle.classList.contains("close2")) {
            mainPageIcon.style.left = ""; 
            mainPageIcon.style.bottom = ""; 
          } else {
            mainPageIcon.style.left = "-60px";
            mainPageIcon.style.bottom = "60px";
          }
        }
        }
    },300);
  });
});

// *******************************************************************************************************************************************************//

sidebar.addEventListener("mouseenter", function () {
  sidebar.classList.remove("close");
  sidebar1Col.classList.remove("close");

  sidebar2.classList.add("close2");
  sidebar2Col.classList.add("close2");

  if (window.innerWidth > 1500) {
    if (mainPageIcon) {
      if (sidebar.classList.contains("close")) {
        mainPageIcon.style.left = ""; 
        mainPageIcon.style.bottom = ""; 
      } else {
        mainPageIcon.style.left = "-60px";
        mainPageIcon.style.bottom = "60px";
      }
    }
  }
});

sidebar.addEventListener('mouseleave', function() {
  const collapsibleElements = sidebar.querySelectorAll('.collapse');
  collapsibleElements.forEach(element => {
    const collapseInstance = bootstrap.Collapse.getInstance(element);
    if (collapseInstance) {
      collapseInstance.hide();
    }
  });

  setTimeout(() => {
    sidebar.classList.add("close");
    sidebar1Col.classList.add("close");
    sidebar.classList.remove("close2");
    if (window.innerWidth > 1500) {
      if (mainPageIcon) {
        if (sidebar.classList.contains("close")) {
          mainPageIcon.style.left = ""; 
          mainPageIcon.style.bottom = ""; 
        } else {
          mainPageIcon.style.left = "-60px";
          mainPageIcon.style.bottom = "60px";
        }
      }
    }
  }, 0);
});

//***************************************************************************main sidebar collapse script****************************************************************************** */

const collapsibleElements = sidebar.querySelectorAll(".collapse");

collapsibleElements.forEach((element) => {
  element.addEventListener("show.bs.collapse", function () {
    collapsibleElements.forEach((otherElement) => {
      if (otherElement !== element) {
        const collapseInstance = bootstrap.Collapse.getInstance(otherElement);
        if (collapseInstance) {
          collapseInstance.hide();
        }
      }
    });
  });
});

//**************************************************************************alert sidebar collapse script******************************************************************************* */

const collapse = document.querySelectorAll(".accordion-item");

collapse.forEach((item) => {
  item.querySelector(".accordion-item-header").addEventListener("click", () => {
    item.classList.toggle("open");
    collapse.forEach((otherElement) => {
      if (otherElement !== item) {
        otherElement.classList.remove("open");
      }
    });
  });
});

//*****************************************************************initialize tooltips*************************************************************************************** */

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// //***************************************************************** inputs collapses toggle *************************************************************************************** */
const inputsAccordion = document.querySelectorAll(".inputs-accordion-item");

inputsAccordion.forEach((item) => {
  item
    .querySelector(".inputs-accordion-item-header")
    .addEventListener("click", () => {
      item.classList.toggle("open");
      inputsAccordion.forEach((otherElement) => {
        if (otherElement !== item) {
          otherElement.classList.remove("open");
        }
      });
    });
});

// //***************************************************************** move foucs between fields*************************************************************************************** */
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".inputs-accordion-item");

  if (accordionItems.length > 0) {
    // Case for forms with accordion items
    accordionItems.forEach((item) => {
      const header = item.querySelector(".inputs-accordion-item-header");
      const focusableElements = item.querySelectorAll("input, select, textarea, button");

      // Set focus on the first input when the accordion item is clicked
      header.addEventListener("click", function () {
        setTimeout(() => {
          if (focusableElements.length > 0) {
            focusableElements[0].focus();
          }
        }, 300);
      });

      // Move focus to the next element on pressing Enter
      focusableElements.forEach((element, index) => {
        element.addEventListener("keydown", function (e) {
          if (e.key === "Enter") {
            e.preventDefault();
            const nextElement = focusableElements[index + 1];
            if (nextElement) {
              nextElement.focus();
            }
          }
        });
      });
    });
  }

  // Case for regular forms (not inside accordion)
  const regularFormElements = document.querySelectorAll("input, select, textarea");
  if (regularFormElements.length > 0) {
    regularFormElements[0].focus();
  }
  regularFormElements.forEach((element, index) => {
    element.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const nextElement = regularFormElements[index + 1];
        if (nextElement) {
          nextElement.focus();
        }
      }
    });
  });
});


// //********************************************************************** validation form submit ********************************************************************************** */
(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  // Function to open an accordion item
  const openAccordionItem = (item, inputsAccordion) => {
      item.classList.add("open");
      inputsAccordion.forEach(otherElement => {
          if (otherElement !== item) {
              otherElement.classList.remove("open");
          }
      });
  };

  // Function to validate accordion sections or regular form inputs
  const validateAccordionSections = (form) => {
      const accordionItems = form.querySelectorAll('.inputs-accordion-item');
      let formIsValid = true;
      let firstInvalidInput = null;

      if (accordionItems.length > 0) {
          // Validation for forms with accordion sections
          Array.from(accordionItems).forEach(item => {
            const inputs = form.querySelectorAll('input, select, textarea');
            const checkIcon = item.querySelector('.data-check');
              let sectionIsValid = true;

              Array.from(inputs).forEach(input => {
                  if (!input.checkValidity()) {
                      sectionIsValid = false;
                      if (!firstInvalidInput) {
                          firstInvalidInput = input;
                          openAccordionItem(item, accordionItems);
                      }
                  }
              });

              if (checkIcon) {
                  checkIcon.style.backgroundColor = sectionIsValid ? 'green' : '';
              }
          });

          if (firstInvalidInput) {
              firstInvalidInput.focus();
              formIsValid = false;
          }
      } else {
          // Validation for regular forms (without accordion sections)
          const inputs = form.querySelectorAll('input, select, textarea');

          Array.from(inputs).forEach(input => {
              if (!input.checkValidity()) {
                  if (!firstInvalidInput) {
                      firstInvalidInput = input;
                  }
              }
          });

          if (firstInvalidInput) {
              firstInvalidInput.focus();
              formIsValid = false;
          }

          if (!formIsValid) {
              form.classList.add('was-validated');  // Add Bootstrap's validation class
          }
      }

      return formIsValid;
  };

  // Function to validate and update check icons for each input field
  const validateInputFields = () => {
      const accordionItems = document.querySelectorAll('.inputs-accordion-item');

      accordionItems.forEach(item => {
          const inputs = item.querySelectorAll('input, select, textarea');
          const checkIcon = item.querySelector('.data-check');

          const validateInputs = () => {
              let allValid = true;
              inputs.forEach(input => {
                  if (!input.checkValidity()) {
                      allValid = false;
                  }
              });

              if (checkIcon) {
                  checkIcon.style.backgroundColor = allValid ? 'green' : '';
              }
          };

          inputs.forEach(input => {
              input.addEventListener("input", validateInputs);
              input.addEventListener("blur", validateInputs);
          });
      });
  };

  // Apply validation to all forms on submit
  Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
          const isFormValid = validateAccordionSections(form);

          if (!isFormValid) {
              event.preventDefault();  // Prevent form submission if invalid
              event.stopPropagation();
          } else {
              form.classList.add('was-validated');  // Add Bootstrap's validation class
          }
      }, false);
  });

  // Initialize input field validation on page load
  document.addEventListener("DOMContentLoaded", validateInputFields);

})();

// //********************************************************************** stop autocompelete ********************************************************************************** */

document.querySelectorAll('input, select, textarea').forEach(el => {
  el.setAttribute('autocomplete', 'off');
});

// //********************************************************************** warning message script ********************************************************************************** */
document.addEventListener('DOMContentLoaded', function() {
  // Select the warning message and both sidebar elements
  const warning = document.querySelector('.wornings');
  const sidebar1 = document.querySelector('.sidebar');
  const sidebar2 = document.querySelector('.sidebar2');

  // Function to adjust the height of both sidebars based on the warning message visibility
  function adjustSidebarsHeight() {
      if (window.getComputedStyle(warning).display === 'none') {
          // Warning is hidden, set both sidebars to their default height
          sidebar1.style.height = 'calc(100vh - 92px)';
          sidebar2.style.height = 'calc(100vh - 92px)';
      } else {
          // Warning is visible, adjust the height of both sidebars
          const warningHeight = warning.offsetHeight;
          sidebar1.style.height = `calc(100vh - 92px - ${warningHeight}px)`;
          sidebar2.style.height = `calc(100vh - 92px - ${warningHeight}px)`;
      }
  }

  // Adjust the heights initially
  adjustSidebarsHeight();

  // Listen for changes in the visibility of the warning message
  const observer = new MutationObserver(adjustSidebarsHeight);
  observer.observe(warning, { attributes: true, childList: true, subtree: true });

  // Optional: Call the function when the window resizes
  window.addEventListener('resize', adjustSidebarsHeight);
});
