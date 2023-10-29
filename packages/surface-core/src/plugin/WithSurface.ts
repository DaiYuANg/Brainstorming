import {Editor} from "slate";

const WithSurface =<E extends Editor>(e: E) =>{
    console.log(e)
}

export {WithSurface}