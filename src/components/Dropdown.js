import MenuItem from "./MenuItem";

const Dropdown = ({ submenus, dropdown, depthlevel }) => {
    depthlevel = depthlevel + 1;
    const dropdownClass = depthlevel > 1 ? "dropdown-submenu" : "";

    return (
        <ul className={
            `dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}
        >
            {
            submenus.map((submenus, index) => (
            <MenuItem items={submenus} key={index} depthlevel={depthlevel} />
            ))
            }
        </ul>
    )
}

export default Dropdown;