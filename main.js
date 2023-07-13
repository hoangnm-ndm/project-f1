import "./style.css";

const app = document.querySelector("#app")

const HomePage = () => {
    return `
    <div>
        Home Page
    </div>
    `
}


const render = (content, target) => {
    target.innerHTML = content()
}


render(HomePage, app)