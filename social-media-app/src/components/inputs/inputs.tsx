export default function Input ({onChange, ...rest}) {
    return (
      <label>
        <span>{rest.placeholder ?? ''}</span>
        <input type="text" {...rest} id={rest.placeholder} onChange={e => onChange(e.target.value)} />
      </label>
    )
  }