import styles from './styles/columnList.module.css'
import { HideButton } from './hideButton'
import { FilterButton } from './filterButton'

export const ColListHeader = ({header, filter, button}) => {

    return (
        <div className={styles.col_list_header}>
                <span>{header}</span>
                <HideButton isShow={button.isShowBtn} setIsShow={button.setIsShowBtn}></HideButton>
                <FilterButton filter={filter.filter} setFilter={filter.setFilter}></FilterButton>
            </div>
    )
}