interface Props {
    label: string
    id: string
    name: string
    value: string
    checked: boolean
    classes?: string
    onChange: (e:any) => void
}
function RadioInput(props: Props) {
  const {label, id, name, value, checked, classes, onChange} = props
  return (
    <div className={`${classes} item d-flex align-items-center`}>
    <input
      onChange={onChange}
      style={{width: '16px', height: '16px'}}
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
    />
    <label className="px-2 fs-6 mt-1" htmlFor={id}>{label}</label>
  </div>
  )
}

export default RadioInput