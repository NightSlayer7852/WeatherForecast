
const Button = (props) => {
    

    return (
        <button
            onClick={props.onClick}
            disabled={props.disabled}
            className="bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 text-white font-semibold py-2 px-4 rounded-md focus:outline-none w-1/3 cursor-pointer disabled:cursor-not-allowed "
        >
            {props.value}
        </button>
    );
};
export default Button;