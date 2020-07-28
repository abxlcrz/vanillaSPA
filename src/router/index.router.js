import Home from "../controllers/index.controller";
import Posts from "../controllers/post.controller";
let content = document.getElementById('root');

const router = (route) => {
    console.log(route);
    content.innerHTML = '';

    switch (route) {
        case '#/': {
            content.appendChild(Home());
            //contentNav.appendChild(Aside());
        }
            break;
        case '#/about-us':
            console.log("about us section");
            break;
        case '#/post':
            content.appendChild(Posts());
            console.log("post section");
            break;
        default:
            console.log(404);
            break;
    }
}

export { router };