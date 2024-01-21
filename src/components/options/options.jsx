import css from './options.module.css'

export const Options = () => {
    return (
        <div className={css.options}>
            <button>Good</button>
            <button>Neutral</button>
            <button>Bad</button>
            <button>Resset</button>
        </div>
    );
}