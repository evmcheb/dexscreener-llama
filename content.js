// content.js
const BUTTON_CODE = `
      <div class="chakra-stack custom-1ievikz">
        <button type="button" class="chakra-button custom-15vewf4">
        <a target="_blank" rel="noopener noreferrer" aria-label="External Link" href="LINK_REPLACE">
          <span class="chakra-button__icon custom-1wh2kri">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 350 350" focusable="false" class="chakra-icon custom-13otjrl" aria-hidden="true" height="1em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
          <g>
              <g>
                  <g>
                      <rect x="113.472" y="297.479" style="fill:#A4A9AD;" width="27.124" height="85.71"/>
                      <rect x="113.472" y="374.51" style="fill:#2D3740;" width="27.124" height="8.68"/>
                  </g>
                  <path style="fill:#C8C9C9;" d="M102.666,245.36c0-13.458,10.91-24.368,24.368-24.368c13.459,0,24.369,10.91,24.369,24.368v52.162
                      c0,13.46-10.91,24.368-24.369,24.368c-13.457,0-24.368-10.908-24.368-24.368C102.666,297.522,102.666,245.36,102.666,245.36z"/>
              </g>
              <g>
                  <g>
                      <rect x="234.985" y="297.479" style="fill:#A4A9AD;" width="27.123" height="85.71"/>
                      <rect x="234.985" y="374.51" style="fill:#2D3740;" width="27.123" height="8.68"/>
                  </g>
                  <path style="fill:#C8C9C9;" d="M224.179,245.36c0-13.458,10.91-24.368,24.368-24.368c13.459,0,24.369,10.91,24.369,24.368v52.162
                      c0,13.46-10.91,24.368-24.369,24.368c-13.458,0-24.368-10.908-24.368-24.368V245.36z"/>
              </g>
              <g>
                  <g>
                      <rect x="78.169" y="297.479" style="fill:#C8C9C9;" width="27.124" height="85.71"/>
                      <rect x="78.169" y="374.51" style="fill:#333E48;" width="27.124" height="8.68"/>
                  </g>
                  <path style="fill:#DADBDC;" d="M67.362,245.36c0-13.458,10.911-24.368,24.369-24.368s24.368,10.91,24.368,24.368v52.162
                      c0,13.46-10.91,24.368-24.368,24.368s-24.369-10.908-24.369-24.368C67.362,297.522,67.362,245.36,67.362,245.36z"/>
              </g>
              <g>
                  <g>
                      <rect x="199.682" y="297.479" style="fill:#C8C9C9;" width="27.123" height="85.71"/>
                      <rect x="199.682" y="374.51" style="fill:#333E48;" width="27.123" height="8.68"/>
                  </g>
                  <path style="fill:#DADBDC;" d="M188.875,245.36c0-13.458,10.911-24.368,24.369-24.368c13.458,0,24.368,10.91,24.368,24.368v52.162
                      c0,13.46-10.91,24.368-24.368,24.368s-24.369-10.908-24.369-24.368V245.36z"/>
              </g>
              <path style="fill:#DADBDC;" d="M300.96,15.706h-26.792c-20.19,0-36.557,16.367-36.557,36.558c0,0.015,0.001,0.027,0.001,0.042
                  v80.807H91.724c-9.186,0-17.86,2.282-25.505,6.285c-3.617-4.653-9.255-7.66-15.605-7.66c-10.92,0-19.773,8.852-19.773,19.774
                  c0,7.102,3.758,13.313,9.383,16.8c-2.462,6.248-3.83,13.035-3.83,20.133v27.665c0,30.434,24.899,55.332,55.332,55.332h156.621
                  c30.432,0,55.332-24.899,55.332-55.332V88.708c18.922-1.392,33.842-17.17,33.842-36.444
                  C337.517,32.073,321.151,15.706,300.96,15.706z"/>
              <path style="fill:#A4A9AD;" d="M347.059,52.831h-8.588v15.878h13.199V57.442C351.67,54.896,349.606,52.831,347.059,52.831z"/>
              <path style="fill:#C8C9C9;" d="M337.469,51.016c-0.25-7.372-2.662-14.193-6.652-19.834h-45.734c0,3.64-1.983,6.811-4.924,8.51
                  c0.371,1.036,0.584,2.146,0.584,3.312c0,2.742-1.126,5.222-2.938,7.004c10.354,2.985,17.928,12.525,17.928,23.841
                  c0,5.751-1.96,11.038-5.242,15.246h42.554c10.662,0,19.304-8.643,19.304-19.302C352.348,60.652,345.995,53.018,337.469,51.016z"/>
              <circle style="fill:#333E48;" cx="319.199" cy="47.335" r="4.331"/>
              <path style="fill:#C8C9C9;" d="M276.455,29.272c-2.855,2.854-7.486,2.854-10.342,0c-2.855-2.856-2.856-7.489,0-10.344L285.043,0
                  c5.711,5.711,5.712,14.971,0.001,20.682L276.455,29.272z"/>
          </g>
          </svg>
          Trade on DeFi Llama
        </a>
        </button>
      </div>
    `;
window.onload = function() {
    let oldHref = "";
    setInterval(function() {
        try {
            if (document.location.href !== oldHref) {
                // Simplify the extraction of outputCurrency and chain from the address
                const urlParams = new URLSearchParams(document.querySelector('.chakra-link.chakra-button.custom-4c1uv8').href.split('?')[1]);
                const outputCurrency = urlParams.get('outputCurrency');
                const chain = urlParams.get('chain');
                
                // Create a new div element
                var newDiv = document.createElement("div");
        
                // Append the new div element to the parent of the div with class=chakra-stack custom-1ievikz, but after this element
                var targetElement = document.querySelector('.chakra-stack.custom-1ievikz');
                targetElement.parentNode.insertBefore(newDiv, targetElement.nextSibling);
                
                const defillama_link = `https://swap.defillama.com/?chain=${chain}&from=0x0000000000000000000000000000000000000000&to=${outputCurrency}`;
                newDiv.innerHTML = BUTTON_CODE.replace('LINK_REPLACE', defillama_link);
                
                oldHref = document.location.href;
            }
        } catch (error) {
            console.error(error);
        }
    }, 2000);
  };
