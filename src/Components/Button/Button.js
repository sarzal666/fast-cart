import './Button.scss'

export default function Button({ text, handler }) {
    return (
        <button onClick={handler && handler}>{text}</button>
    );
}