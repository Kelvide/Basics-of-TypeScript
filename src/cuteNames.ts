import './style.css';

document.querySelector<HTMLDivElement>('#cute')!.innerHTML = `
  <div>
    <h1 id="title">Cute Names😊</h1>
    <div class="form">
        <input id="input_name" placeholder="Input your name"/>
        <button id="submit" type="button">Submit</button>
    </div>
  </div>
  <div id="modal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <p id="modal-text"></p>
    </div>
  </div>
`

const uglyNames: string[] = ["bunny", "liv", "olivia", "oliwia"];

const checkName = (name: string) => {
    return uglyNames.includes(name);
};

const showModal = (message: string) => {
    const modal = document.querySelector<HTMLDivElement>('#modal');
    const modalText = document.querySelector<HTMLParagraphElement>('#modal-text');
    if (modal && modalText) {
        modalText.textContent = message;
        modal.style.display = 'block';
    }
};

const setupSubmit = (button: HTMLButtonElement | null) => {
    if (button) {
        button.addEventListener('click', () => {
            const inputElement = document.querySelector<HTMLInputElement>('#input_name');
            if (inputElement) {
                const name = inputElement.value.toLocaleLowerCase();
                if (name === "") {
                    showModal("Please enter a name man 🤬.");
                } else if (checkName(name)) {
                    showModal(`${name.toUpperCase()} is not a cute name 😂`);
                } else {
                    showModal(`${name.toUpperCase()} is a cute name 😳`);
                }
            }
        });
    }
};

setupSubmit(document.querySelector<HTMLButtonElement>('#submit')!);

const setupModalClose = () => {
    const modal = document.querySelector<HTMLDivElement>('#modal');
    const closeButton = document.querySelector<HTMLSpanElement>('.close');
    if (modal && closeButton) {
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
};

setupModalClose();