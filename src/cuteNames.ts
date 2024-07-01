import './style.css';

document.querySelector<HTMLDivElement>('#cute')!.innerHTML = `
  <div>
    <h1>Cute Names😊</h1>
    <div class="card">
        <input id="input_name" placeholder="Input your name"/>
        <button id="submit" type="button">Submit</button>
    </div>
  </div>
`

const uglyNames: string[] = ["bunny", "liv", "olivia", "oliwia"];

const checkName = (name: string) => {
    return uglyNames.includes(name);
};

const setupSubmit = (button: HTMLButtonElement | null) => {
    if (button) {
        button.addEventListener('click', () => {
            const inputElement = document.querySelector<HTMLInputElement>('#input_name');
            if (inputElement) {
                const name = inputElement.value.toLocaleLowerCase();
                if (name === "") {
                    alert("Please enter a name man.");
                } else if (checkName(name)) {
                    alert(`${name.toUpperCase()} is not a cute name 😂`);
                } else {
                    alert(`${name.toUpperCase()} is a cute name 😳`);
                }
            }
        });
    }
};

setupSubmit(document.querySelector<HTMLButtonElement>('#submit')!);