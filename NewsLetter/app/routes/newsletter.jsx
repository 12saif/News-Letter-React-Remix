import { Form } from "@remix-run/react";
// import styles from "./global.css";


export default function NewsLetter(){
    return(
<main>
    <Form method="post">
        <h2>Subscribe!</h2>
        <p>Don't miss any of the action!</p>
        <fieldset>
            <input type="email" placeholder="your@example.com" />
            <button type="submit">Subscribe</button>
        </fieldset>
    </Form>
</main>
    );
}

// export function links() {
//     return [
//       {
//         rel: "stylesheet",
//         href: "styles",
//       },
//     ];
//   }